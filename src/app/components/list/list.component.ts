import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatTableModule, DatePipe, HttpClientModule],
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
  ];
  public loading: boolean = false;
  public dataSource: any[] = [];
  public error: any = null;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBlacklistData();
  }

  private fetchBlacklistData() {
    console.log('hererare');
    this.loading = true;

    this.http.get('http://localhost:8080/api/blacklisted').subscribe({
      next: (data: any) => {
        console.log('data', data);
        this.dataSource = data;
      },
      error: (error) => (this.error = error),
      complete: () => (this.loading = false),
    });
  }

  public openRecord(element: any) {
    console.log('openRecord called');
    console.log('element', element);

    // Dodatkowe logi do debugowania
    console.log('Navigating to:', ['/blacklisted', element.id]);

    // Prosta nawigacja do ścieżki '/blacklisted/:id'
    this.router.navigate(['/blacklisted', element.id]);
  }
}
