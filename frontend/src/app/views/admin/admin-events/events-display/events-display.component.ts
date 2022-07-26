import {AfterViewInit, Component, OnInit ,  ViewChild} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableDataSource} from '@angular/material/table';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';
import {Event} from "../../../../models/events/events";
import {EventsService} from "../../../../services/events/events.service";
import {Router} from "@angular/router";
import {MatDialogModule} from '@angular/material/dialog';

const ELEMENT_DATA: Event[] = [];

@Component({
  selector: 'app-events-display',
  templateUrl: './events-display.component.html',
  styleUrls: ['./events-display.component.css']
})

export class EventsDisplayComponent implements OnInit,AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  title = 'table';
  displayedColumns: string[] = ['_id', 'name', 'type', 'category', 'description', 'detail', 'location', 'startDate', 'status'];
  public eventList: Event[];
  dataSource = ELEMENT_DATA;


  constructor(private eventsService: EventsService, private router: Router, public dialog: MatDialogModule) {
  }

  ngOnInit(): void {
    this.eventsService.listEvents().subscribe((response: Event[])=> {
      this.eventList = response
    })
    const dataSource = new MatTableDataSource(this.eventList);
  }
  ngAfterViewInit() {
  /*  this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;*/

  }

}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
