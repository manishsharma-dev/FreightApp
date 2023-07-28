import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.scss']
})
export class UserLogComponent implements OnInit, AfterViewInit {
  displayedHistoryColumns: string[] = ['user_name', 'date'];
  monthList = MONTH_DATA;
  yearList = [];
  selectedMonth: number;
  selectedYear: number;
  dataHistorySource: MatTableDataSource<UserHistoryData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this.selectedMonth = new Date().getMonth();
    this.selectedYear = new Date().getFullYear();

    for (let i = this.selectedYear - 10; i <= this.selectedYear; i++) {
      this.yearList.push(i);
    }

  }

  ngAfterViewInit(): void {
    this.getUserlog();
    this.dataHistorySource.paginator = this.paginator;
    this.dataHistorySource.sort = this.sort;
  }

  getUserlog() {
    this._appService.getUserLog().subscribe((res: any) => {
      this.dataHistorySource = new MatTableDataSource(res);

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataHistorySource.filter = filterValue.trim().toLowerCase();

    if (this.dataHistorySource.paginator) {
      this.dataHistorySource.paginator.firstPage();
    }
  }

}

export interface UserHistoryData {
  user_name: string;
  date: string;
}


export const MONTH_DATA = [
  {
    id: 0,
    value: 'January'
  },
  {
    id: 1,
    value: 'February'
  },
  {
    id: 2,
    value: 'March'
  },
  {
    id: 3,
    value: 'April'
  },
  {
    id: 4,
    value: 'May'
  },
  {
    id: 5,
    value: 'June'
  },
  {
    id: 6,
    value: 'July'
  },
  {
    id: 7,
    value: 'August'
  },
  {
    id: 8,
    value: 'September'
  },
  {
    id: 9,
    value: 'October'
  },
  {
    id: 10,
    value: 'November'
  },
  {
    id: 11,
    value: 'December'
  }
]