import {Component, OnInit} from '@angular/core';
import {CampSpot} from "../../../models/maps/camp_spot";
import {CampSpotService} from "../../../services/maps/camp-spot.service";


@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.css']
})
export class CampComponent implements OnInit {

  address: string;
  name: string;

  campSpot: CampSpot;
  camp_lat: number;
  camp_lng: number;

  lat: number = 33.331050;
  lng: number = 10.489326;

  zoom: number = 8;
  marker: google.maps.Marker;
  private mapClickListener: google.maps.MapsEventListener;
  private map: google.maps.Map;

  ngOnInit(): void {
    this.campSpot = new CampSpot();
  }


  constructor(private campService: CampSpotService) {
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
    // console.log(`name: ${this.campSpot.name}
    // \naddress: ${this.campSpot.address}
    // \ncategory ${this.campSpot.category}
    // \nrate: ${this.campSpot.rate}
    // \nposition ${this.campSpot.position.lat}
    // \nlongitude: ${this.campSpot.position.lng}`
    // )
    this.campService.addCampSpot(this.campSpot);
  }
}
