import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CampSpotService} from "../../../../services/maps/camp-spot.service";
import {HuntSpot} from "../../../../models/maps/hunt_spot";
import {HuntService} from "../../../../services/maps/hunt.service";

@Component({
  selector: 'app-hunt-details',
  templateUrl: './hunt-details.component.html',
  styleUrls: ['./hunt-details.component.css']
})
export class HuntDetailsComponent implements OnInit {

  address: string;
  name: string;
  camp_lat: number;
  camp_lng: number;
  lat: number = 33.331050;
  lng: number = 10.489326;

  zoom: number = 8;
  marker: google.maps.Marker;
  private mapClickListener: google.maps.MapsEventListener;
  private map: google.maps.Map;
  hunt_id: String;
  huntSpot: HuntSpot;
  huntPosition: google.maps.LatLng;

  constructor(private route: ActivatedRoute, private huntService: HuntService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.hunt_id = params['id']);
    this.huntService.getHuntSpot(this.hunt_id).subscribe((response) => {
      this.huntSpot = response;
    })
    this.camp_lng = parseFloat(String(this.huntSpot.position.lng));
    this.camp_lat = parseFloat(String(this.huntSpot.position.lat));

    console.log(this.huntSpot)
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

  update() {
    this.huntService.updateHuntSpot(this.huntSpot).subscribe(() => {
      this.router.navigate(['/dashboard/maps/hunt'])
    })
  }

  delete() {
    this.huntService.deleteHuntSpot(this.hunt_id).subscribe(() => {
      this.router.navigate(['/dashboard/maps/hunt'])
    })
  }

}
