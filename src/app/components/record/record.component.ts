import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [
    MatCardModule,
    MatBadgeModule,
    HttpClientModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatGridListModule,
  ],
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  public recordId: string = '';
  public recordData: any;
  public loading: boolean = false;
  public error: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recordId = params['id'];
      console.log('Record ID:', this.recordId);

      // Fetch data using the new method
      this.fetchRecordData();
    });
  }

  private fetchRecordData(): void {
    this.loading = true;

    this.http
      .get(`http://localhost:8080/api/blacklisted/${this.recordId}`)
      .subscribe({
        next: (data) => (this.recordData = data),
        error: (error) => (this.error = error),
        complete: () => (this.loading = false),
      });
  }
}
