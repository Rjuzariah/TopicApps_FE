import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicListComponent } from './components/topic-list/topic-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/topic-list', pathMatch: 'full' },
  { path: 'topic-list', component: TopicListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
