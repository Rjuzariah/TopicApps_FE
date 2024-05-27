import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from './services/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean=false;

  constructor(private dialog: MatDialog, private loadingService: LoadingService) {
    this.loadingService.loading$.subscribe(loading => this.loading = loading);

  }
}
