import {Component, OnInit} from '@angular/core';
import {CampSpotService} from "../../../../services/maps/camp-spot.service";
import {CampSpot} from "../../../../models/maps/camp_spot";
import {HuntSpot} from "../../../../models/maps/hunt_spot";
import {HuntService} from "../../../../services/maps/hunt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  searchKeyWord: string = '';
  public searchList: CampSpot[]
  public searchMarkers: google.maps.Marker[]


  constructor(private campService: CampSpotService, private huntService: HuntService, private router: Router) {
  }

  public campList: CampSpot[]
  public huntList: HuntSpot[]

  private map: google.maps.Map;
  private campHeatmap: google.maps.visualization.HeatmapLayer;
  private huntHeatmap: google.maps.visualization.HeatmapLayer;
  zoom: number = 6;
  campCoordsList: google.maps.LatLng[] = [];
  huntCoordsList: google.maps.LatLng[] = [];

  ngOnInit(): void {
    this.campService.listCampSpot().subscribe((response: CampSpot[]) => {
      this.campList = response
    })
    this.huntService.listHuntSpot().subscribe((response: HuntSpot[]) => {
      this.huntList = response
    })

  }

  // initial center position for the map
  lat: number = 33.331050;
  lng: number = 10.489326;

  private labelIndex: number = 0;
  private labels: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


  getCampCoords() {
    this.campService.listCampSpot().subscribe(
      (response: CampSpot[]) => {
        for (var index in response) {
          this.campCoordsList.push(
            new google.maps.LatLng(response[index].position.lat, response[index].position.lng)
          )
        }
      })
  }

  getHuntCoords() {
    this.huntService.listHuntSpot().subscribe(
      (response: HuntSpot[]) => {
        for (var index in response) {
          this.huntCoordsList.push(
            new google.maps.LatLng(response[index].position.lat, response[index].position.lng)
          )
        }
      })
  }

  onMapLoad(mapInstance: google.maps.Map) {
    this.getCampCoords();
    this.map = mapInstance;
    let pointArray = new google.maps.MVCArray(this.campCoordsList);
    this.campHeatmap = new google.maps.visualization.HeatmapLayer({
      data: pointArray
    });

    this.getHuntCoords();
    const gradient = [
      "rgba(0, 255, 255, 0)",
      "rgba(0, 255, 255, 1)",
      "rgba(0, 191, 255, 1)",
      "rgba(0, 127, 255, 1)",
      "rgba(0, 63, 255, 1)",
      "rgba(0, 0, 255, 1)",
      "rgba(0, 0, 223, 1)",
      "rgba(0, 0, 191, 1)",
      "rgba(0, 0, 159, 1)",
      "rgba(0, 0, 127, 1)",
      "rgba(63, 0, 91, 1)",
      "rgba(127, 0, 63, 1)",
      "rgba(191, 0, 31, 1)",
      "rgba(255, 0, 0, 1)",
    ];
    let huntPointArray = new google.maps.MVCArray(this.huntCoordsList);
    this.huntHeatmap = new google.maps.visualization.HeatmapLayer({
      gradient: gradient,
      data: huntPointArray
    });

    this.toggleHuntHeatmap();
    this.toggleCampHeatmap();
  }

  changeRadius(): void {
    this.campHeatmap.set("radius", this.campHeatmap.get("radius") ? null : 20);
    this.huntHeatmap.set("radius", this.huntHeatmap.get("radius") ? null : 20);
  }

  changeOpacity(): void {
    this.campHeatmap.set("opacity", this.campHeatmap.get("opacity") ? null : 0.2);
    this.huntHeatmap.set("opacity", this.huntHeatmap.get("opacity") ? null : 0.2);
  }

  toggleCampHeatmap(): void {
    this.campHeatmap.setMap(this.campHeatmap.getMap() ? null : this.map);
  }

  toggleHuntHeatmap(): void {
    this.huntHeatmap.setMap(this.huntHeatmap.getMap() ? null : this.map);
  }

  toggleCampMarkers(): void {
    const image = "http://maps.google.com/mapfiles/ms/icons/";
    this.campList.forEach(data => {

      var myLatlng = new google.maps.LatLng(parseFloat(String(data.position.lat)), parseFloat(String(data.position.lng)))
      const campMarker = new google.maps.Marker({
        position: myLatlng,
        // label: (this.labels)[this.labelIndex++ % this.labels.length],
        map: this.map,
        icon: `${image}hiker.png`
      });
      this.infoTest(data, campMarker)

    })
  }


  infoTest(spot: CampSpot, marker: google.maps.Marker) {
    var contentWindow = "<h2>" + spot.name + "</h2>"
      + "<p>" + spot.address + "</p>"
      + "<p>" + spot.rate + "</p>"
      + "<button class='btn btn-primary' id='clickableItem' (click)='navigate()'>" +
      "Details</button>"

    const infoWindow = new google.maps.InfoWindow({
      content: contentWindow,
    });

    google.maps.event.addListener(infoWindow, 'domready', () => {
      //now my elements are ready for dom manipulation
      var clickableItem = document.getElementById('clickableItem');
      console.log(`Your clickable item: ${clickableItem}`)
      if (clickableItem)
        clickableItem.addEventListener('click', () => {
          this.goToDetails(spot._id)
        });
      console.log('Hola')
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  goToDetails(_id: String) {
    console.log(_id)
    this.router.navigate(['/maps/camp/details', _id])
  }

  toggleHuntMarkers(): void {
    const image = "http://maps.google.com/mapfiles/ms/icons/";
    this.huntCoordsList.forEach(data => {
      var myLatlng = new google.maps.LatLng(parseFloat(String(data.lat())), parseFloat(String(data.lng())))
      new google.maps.Marker({
        position: myLatlng,
        // label: (this.labels)[this.labelIndex++ % this.labels.length],
        map: this.map,
        icon: `${image}POI.png`
      });
    })
  }

  searchListElement()
  {
    this.campService.listCampSpotsByKey(this.searchKeyWord).subscribe((response: CampSpot[])=> {
      this.searchList = response
      this.searchKeyWord = '';
    })

    this.searchList.forEach(data => {
      var myLatlng = new google.maps.LatLng(parseFloat(String(data.position.lat)), parseFloat(String(data.position.lng)))
      const campMarker = new google.maps.Marker({
        position: myLatlng,
        // label: (this.labels)[this.labelIndex++ % this.labels.length],
        map: this.map,
      });
      this.searchMarkers.push(campMarker)
    })
    for (var i = 0; i < this.searchList.length; i++) {
      this.infoTest(this.searchList[i], this.searchMarkers[i])
      //Do something
    }

    this.searchList = []
    this.searchMarkers = []

  }

}
