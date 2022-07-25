import { Component, OnInit } from '@angular/core';
import {CampSpot} from "../../../../models/maps/camp_spot";
import {CampSpotService} from "../../../../services/maps/camp-spot.service";
import {Router} from "@angular/router";

interface CampingCategories {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-camp-add',
  templateUrl: './camp-add.component.html',
  styleUrls: ['./camp-add.component.css']
})
export class CampAddComponent implements OnInit {

  address: string;
  name: string;

  camping_categories: CampingCategories[] = [
    {value: 'Tent Camping', viewValue: 'Tent Camping'},
    {value: 'Hiking Camping', viewValue: 'Hiking Camping'},
    {value: 'Car Camping', viewValue: 'Car Camping'},
    {value: 'Van Camping', viewValue: 'Van Camping'},
    {value: 'Bicycle Touring Camping', viewValue: 'Bicycle Touring Camping'},
    {value: 'Ultralight Camping', viewValue: 'Ultralight Camping'},
  ];
  campSpot: CampSpot;
  camp_lat: number;
  camp_lng: number;

  lat: number = 33.331050;
  lng: number = 10.489326;

  zoom: number = 5.5;
  marker: google.maps.Marker;
  private mapClickListener: google.maps.MapsEventListener;
  private map: google.maps.Map;

  ngOnInit(): void {
    this.campSpot = new CampSpot();
  }


  constructor(private campService: CampSpotService, private router: Router) {
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
      this.campSpot.position = {lat: myLatlng.lat(), lng: myLatlng.lng()};
    });
  }

  save() {
    this.campService.addCampSpot(this.campSpot);
    this.router.navigate(['/maps/'])
  }

  home() {
    this.router.navigate(['/maps/'])
  }


  onItemChange(value: any){
    this.campSpot.rate = value.target.value
  }

  campCategory(value: any) {
    console.log(value.value)
    this.campSpot.category = value.value
  }
}
