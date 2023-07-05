import { Component, OnInit } from '@angular/core';

import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'arti';

  constructor(
    public FirestoreService: FirestoreService

  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
