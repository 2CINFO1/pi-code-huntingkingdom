import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CampSpot} from "../../../../models/maps/camp_spot";
import {CampSpotService} from "../../../../services/maps/camp-spot.service";

@Component({
  selector: 'app-camp-details',
  templateUrl: './camp-details.component.html',
  styleUrls: ['./camp-details.component.css']
})
export class CampDetailsComponent implements OnInit {

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
  camp_id: String;
  campSpot: CampSpot;
  campPosition: google.maps.LatLng;

  constructor(private route: ActivatedRoute, private campService: CampSpotService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.camp_id = params['id']);
    this.campService.getCampSpot(this.camp_id).subscribe((response) => {
      this.campSpot = response;
    })
    this.camp_lng = parseFloat(String(this.campSpot.position.lng));
    this.camp_lat = parseFloat(String(this.campSpot.position.lat));

    console.log(this.campSpot)
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

  update() {
    this.campService.updateCampSpot(this.campSpot).subscribe(() => {
      this.router.navigate(['/maps'])
    })
  }

  delete() {
    this.campService.deleteCampSpot(this.camp_id).subscribe(() => {
      this.router.navigate(['/maps'])
    })
  }

  onItemChange(value: any){
    this.campSpot.rate = value.target.value
  }
}
