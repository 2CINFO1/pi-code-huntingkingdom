import {Component, OnInit} from '@angular/core';
import {CampSpotService} from "../../../../services/maps/camp-spot.service";
import {CampSpot} from "../../../../models/maps/camp_spot";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {


  constructor(private campService: CampSpotService) {
  }

  public campList: CampSpot[]

  ngOnInit(): void {
    this.campService.listCampSpot().subscribe((response: CampSpot[]) => {
      this.campList = response
    })
  }

  private map: google.maps.Map;
  private heatmap: google.maps.visualization.HeatmapLayer;
  marker: google.maps.Marker;
  zoom: number = 6;
  coordsList: google.maps.LatLng[] = [];

  // initial center position for the map
  lat: number = 33.331050;
  lng: number = 10.489326;

  rl_lat: number = 33.331050;
  rl_lng: number = 10.489326;
  private labelIndex: number = 0;
  private labels: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


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

  setMarker(): void {
    var myLatlng = new google.maps.LatLng(parseFloat(String(this.rl_lat)), parseFloat(String(this.rl_lng)));
    this.marker.setPosition(myLatlng)
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
      var myLatlng = new google.maps.LatLng(parseFloat(String(data.lat())), parseFloat(String(data.lng())))
      new google.maps.Marker({
        position: myLatlng,
        // label: (this.labels)[this.labelIndex++ % this.labels.length],
        map: this.map,
        // icon: image
      });
    })
  }

}
