import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  public displayedColumns: string[] = [
    'createdAt',
    'name',
    'surname',
    'content',
    'city',
  ];
  public dataSource = [
    {
      id: 'fafawfag',
      name: 'Rafał',
      surname: 'K',
      createdAt: new Date(),
      editedAt: new Date(),
      city: 'Warszawa',
      content: 'Właściciel nasrał mi na wycieraczkę!',
    },
    {
      id: 'gfdsgfdg',
      name: 'Anna',
      surname: 'S',
      createdAt: new Date(),
      editedAt: new Date(),
      city: 'Kraków',
      content: 'Właściciel zniszczył mi rośliny doniczkowe podczas naprawy!',
    },
    {
      id: 'hjghjghj',
      name: 'Jan',
      surname: 'D',
      createdAt: new Date(),
      editedAt: new Date(),
      city: 'Gdańsk',
      content:
        'W trakcie wynajmu zepsuła się lodówka, a właściciel nie reaguje!',
    },
    {
      id: 'tyutyutyu',
      name: 'Ewa',
      surname: 'M',
      createdAt: new Date(),
      editedAt: new Date(),
      city: 'Poznań',
      content: 'Właściciel nie naprawił awarii ogrzewania w zimie!',
    },
    {
      id: 'rtyrtyryt',
      name: 'Piotr',
      surname: 'W',
      createdAt: new Date(),
      editedAt: new Date(),
      city: 'Łódź',
      content:
        'W wynajmowanym mieszkaniu jest problem z przeciekającym dachem!',
    },
    {
      id: 'yuityuityu',
      name: 'Katarzyna',
      surname: 'K',
      createdAt: new Date(),
      editedAt: new Date(),
      city: 'Wrocław',
      content: 'Właściciel nie zwrócił kaucji mimo braku uszkodzeń!',
    },
    {
      id: 'poiupoipo',
      name: 'Marcin',
      surname: 'L',
      createdAt: new Date(),
      editedAt: new Date(),
      city: 'Katowice',
      content:
        'Mieszkanie było brudne i nieposprzątane przy przekazaniu kluczy!',
    },
    {
      id: 'mnvmnvmnv',
      name: 'Magdalena',
      surname: 'R',
      createdAt: new Date(),
      editedAt: new Date(),
      city: 'Szczecin',
      content: 'Właściciel bez uprzedzenia wszedł do wynajmowanego mieszkania!',
    },
    {
      id: 'xcvxcvxcv',
      name: 'Mateusz',
      surname: 'P',
      createdAt: new Date(),
      editedAt: new Date(),
      city: 'Bydgoszcz',
      content: 'Właściciel nie naprawił usterek pomimo wielokrotnych zgłoszeń!',
    },
    {
      id: 'zxczxczxc',
      name: 'Alicja',
      surname: 'K',
      createdAt: new Date(),
      editedAt: new Date(),
      city: 'Olsztyn',
      content: 'W wynajmowanym lokalu często wyłączają prąd bez uprzedzenia!',
    },
  ];

  constructor(private router: Router) {}

  public openRecord(element: any) {
    console.log('openRecord called');
    console.log('element', element);

    // Dodatkowe logi do debugowania
    console.log('Navigating to:', ['/blacklisted', element.id]);

    // Prosta nawigacja do ścieżki '/blacklisted/:id'
    this.router.navigate(['/blacklisted', element.id]);
  }
}
