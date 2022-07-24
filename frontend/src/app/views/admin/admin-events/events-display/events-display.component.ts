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

@Component({
  selector: 'app-events-display',
  templateUrl: './events-display.component.html',
  styleUrls: ['./events-display.component.css']
})
export class EventsDisplayComponent implements OnInit,AfterViewInit {
  title = 'table';
  displayedColumns: string[] = ['_id', 'name', 'type', 'category', 'description', 'detail', 'location', 'startDate', 'status'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public eventList: Event[]
  dataSource: any;

  constructor(private eventsService: EventsService, private router: Router) {
  }

  ngOnInit(): void {
    this.eventsService.listEvents().subscribe((response: Event[])=> {
      this.eventList = response
    })
    const dataSource = new MatTableDataSource(this.eventList);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  ELEMENT_DATA: Event[] = [
  ];
}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
