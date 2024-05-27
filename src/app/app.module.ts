import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
// Components
import { AppComponent } from './app.component';
import { TopicDialogComponent } from './components/topic-dialog/topic-dialog.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { SvgIconHackerNewsComponent } from './svg-component/svg-icon-hacker-news/svg-icon-hacker-news.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TopicCardListComponent } from './components/topic-card-list/topic-card-list.component';



@NgModule({
  declarations: [
    // Components
    AppComponent,
    TopicDialogComponent,
    TopicListComponent,
    TopicCardComponent,
    SvgIconHackerNewsComponent,
    TopicCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Angular Material Module
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatChipsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
