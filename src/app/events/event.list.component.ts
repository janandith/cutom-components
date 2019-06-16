import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import {Entry} from '../model/Entry';
import {SortableHeader, SortEvent} from './sortable.header';

const ENTRY_LIST:Entry[] = [
  {
    id: 1,
    startDate: Date(),
    endDate: Date(),
    customerNumber: 123,
    eventId: 3,
    username: 'peter.pan1',
    name: 'peter',
    time: Date(),
    eventType: 'Logon',
    eventDetail: ''

  },
  {
    id: 2,
    startDate: Date(),
    endDate: Date(),
    customerNumber: 123,
    eventId: 4,
    username: 'peter.pan1',
    name: 'peter',
    time: Date(),
    eventType: 'LogOff',
    eventDetail: ''

  },
];

const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-event-list',
  templateUrl: './event.list.component.html',
  styleUrls: ['./event.list.component.css']
})
export class EventListComponent implements OnInit {
    
  constructor() { }

  ngOnInit() {
  }

  entries = ENTRY_LIST;

  @ViewChildren(SortableHeader) headers: QueryList<SortableHeader>;

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '') {
      this.entries = ENTRY_LIST;
    } else {
      this.entries = [...ENTRY_LIST].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
}
}

