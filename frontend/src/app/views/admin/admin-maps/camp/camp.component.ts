import {Component, OnInit} from '@angular/core';
import {CampSpot} from "../../../../models/maps/camp_spot";
import {CampSpotService} from "../../../../services/maps/camp-spot.service";
import {Router} from "@angular/router";
import {Event} from "../../../../models/events/events";

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.css']
})
export class CampComponent implements OnInit {

  private map: google.maps.Map;
  private heatmap: google.maps.visualization.HeatmapLayer;
  marker: google.maps.Marker;
  zoom: number = 6;
  coordsList: google.maps.LatLng[] = [];

  // initial center position for the map
  lat: number = 33.331050;
  lng: number = 10.489326;

  public campList: CampSpot[]
  searchKeyWord : string = '';

  constructor(private campService: CampSpotService, private router: Router) {
  }


  ngOnInit(): void {
    this.campService.listCampSpot().subscribe((response: CampSpot[])=> {
      this.campList = response
    })
  }



  getCoords() {
    this.campService.listCampSpot().subscribe(
      (response: CampSpot[]) => {
        for (var index in response) {
          this.coordsList.push(
            new google.maps.LatLng(response[index].position.lat, response[index].position.lng)
          )
        }
      })
  }

  onMapLoad(mapInstance: google.maps.Map) {
    this.getCoords();

    this.map = mapInstance;
    this.marker = new google.maps.Marker()
    let pointArray = new google.maps.MVCArray(this.coordsList);
    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data: pointArray
    });
    this.heatmap.setMap(this.map)
  }

  setMarker(mapInstance: google.maps.Map, lat: number, lng: number): void {
    var myLatlng = new google.maps.LatLng(parseFloat(String(lat)),parseFloat(String(lng)));
    const marker = new google.maps.Marker({
      map: mapInstance,
      position: myLatlng
    })
  }

  changeRadius(): void {
    this.heatmap.set("radius", this.heatmap.get("radius") ? null : 20);
  }

  changeOpacity(): void {
    this.heatmap.set("opacity", this.heatmap.get("opacity") ? null : 0.2);
  }

  toggleHeatmap(): void {
    this.heatmap.setMap(this.heatmap.getMap() ? null : this.map);
  }

  toggleMarkers(): void {
    const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    this.coordsList.forEach(data => {
      var myLatlng = new google.maps.LatLng(parseFloat(String(data.lat())),parseFloat(String(data.lng())))
      new google.maps.Marker({
        position: myLatlng,
        // label: (this.labels)[this.labelIndex++ % this.labels.length],
        map: this.map,
        // icon: image
      });
    })
  }

  goToDetails(_id: String) {
    console.log(_id)
    this.router.navigate(['dashboard/maps/camp/details', _id])
  }

  delete(_id: String) {
    this.campService.deleteCampSpot(_id).subscribe(() => {
      this.router.navigate(['/dashboard/maps/camp'])
    })
    this.router.navigate(['/dashboard/maps/camp'])
  }

  serachListElement()
  {
    this.campService.listCampSpotsByKey(this.searchKeyWord).subscribe((response: CampSpot[])=> {
      this.campList = response
      this.searchKeyWord = '';
    })
  }

  navigateToHunt()
  {
    this.router.navigate(['/dashboard/maps/hunt'])
  }
}
