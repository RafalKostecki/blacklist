import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Sort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatTableModule,
    DatePipe,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  public displayedColumns: string[] = [
    'createdAt',
    'name',
    'surname',
    'content',
    'city',
    'verified',
  ];

  public isLoading: boolean = false;
  public dataSource: any[] = [];
  public error: any = null;
  public currentPage = 0;
  public pageSizeOptions = [1, 3, 5, 10];
  public currentPageSize = 3;
  public totalElements = 1;
  private sortParam = 'name,asc';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBlacklistData();
  }

  private fetchBlacklistData() {
    this.isLoading = true;

    this.http
      .get(
        `http://localhost:8080/api/blacklisted?page=${this.currentPage}&size=${this.currentPageSize}&sort=${this.sortParam}`
      )
      .subscribe({
        next: (data: any) => {
          console.log('data', data?.content);
          this.dataSource = data?.content;
          this.totalElements = data?.totalElements;
        },
        error: (error) => (this.error = error),
        complete: () => (this.isLoading = false),
      });
  }

  public openRecord(element: any) {
    this.router.navigate(['/blacklisted', element.id]);
  }

  public onPageChange($event: PageEvent) {
    this.currentPage = $event.pageIndex;
    this.currentPageSize = $event.pageSize;

    this.fetchBlacklistData();
  }

  public announceSortChange($event: Sort) {
    this.sortParam = `${$event.active},${$event.direction}`;

    this.fetchBlacklistData();
  }
}
