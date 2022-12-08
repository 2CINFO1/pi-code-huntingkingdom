import { Component, OnInit } from '@angular/core';
import {HuntService} from "../../../../services/maps/hunt.service";
import {HuntSpot} from "../../../../models/maps/hunt_spot";
import {Router} from "@angular/router";

interface HuntTypes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hunt',
  templateUrl: './hunt.component.html',
  styleUrls: ['./hunt.component.css']
})
export class HuntComponent implements OnInit {

  address: string;
  name: string;

  huntSpot: HuntSpot;
  camp_lat: number;
  camp_lng: number;

  lat: number = 33.331050;
  lng: number = 10.489326;

  zoom: number = 5.5;
  marker: google.maps.Marker;
  private mapClickListener: google.maps.MapsEventListener;
  private map: google.maps.Map;


  hunt_types: HuntTypes[] = [
    {value: 'Fishing', viewValue: 'Fishing'},
    {value: 'Birds Hunt', viewValue: 'Birds Hunt'},
    {value: 'Forest Hunt', viewValue: 'Forest Hunt'},
    {value: 'Wild Hunt', viewValue: 'Wild Hunt'},
  ];

  ngOnInit(): void {
    this.huntSpot = new HuntSpot();
  }


  constructor(private huntService: HuntService, private router: Router) {
  }


  mapClicked(map: google.maps.Map) {
    if (!this.marker) {
      this.marker = new google.maps.Marker;
    }
    this.map = map;
    this.mapClickListener = this.map.addListener('click', (e: google.maps.MouseEvent) => {
      this.camp_lat = e.latLng.lat()
      this.camp_lng = e.latLng.lng()
      var myLatlng = new google.maps.LatLng(parseFloat(String(e.latLng.lat())), parseFloat(String(e.latLng.lng())));
      this.marker.setMap(map);
      this.marker.setPosition(myLatlng);
      this.huntSpot.position = {lat: myLatlng.lat(), lng: myLatlng.lng()};
    });
  }

  save() {
    this.huntService.addHuntSpot(this.huntSpot);
    this.router.navigate(['/maps/'])
  }

  home() {
    this.router.navigate(['/maps/'])
  }

  huntType(value: any) {
    console.log(value.value)
    this.huntSpot.hunt_type = value.value
  }

}
