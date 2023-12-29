import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [],
  templateUrl: './record.component.html',
  styleUrl: './record.component.scss',
})
export class RecordComponent implements OnInit {
  public recordId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recordId = params['id'];
      // Teraz masz dostęp do wartości id i możesz wykonać odpowiednie operacje
      console.log('Record ID:', this.recordId);
    });
  }
}
