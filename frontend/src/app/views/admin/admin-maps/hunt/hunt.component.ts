import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HuntSpot} from "../../../../models/maps/hunt_spot";
import {HuntService} from "../../../../services/maps/hunt.service";

@Component({
  selector: 'app-hunt',
  templateUrl: './hunt.component.html',
  styleUrls: ['./hunt.component.css']
})
export class HuntComponent implements OnInit {

  constructor(private huntService: HuntService, private router: Router) {
  }

  public huntList: HuntSpot[]

  ngOnInit(): void {
    this.huntService.listHuntSpot().subscribe((response: HuntSpot[])=> {
      this.huntList = response
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
    this.huntService.listHuntSpot().subscribe(
      (response: HuntSpot[]) => {
        for (var index in response) {
          this.coordsList.push(
            new google.maps.LatLng(response[index].position.lat, response[index].position.lng)
          )
        }
      })
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
    this.router.navigate(['dashboard/maps/hunt/details', _id])
  }

  navigateToCamp() {
      this.router.navigate(['/dashboard/maps/camp'])
  }
}
