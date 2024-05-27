import { Component } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { LoadingService } from '../../services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { TopicDialogComponent } from '../topic-dialog/topic-dialog.component';


@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent {

  constructor(private topicService: TopicService, private dialog: MatDialog, private loadingService: LoadingService) { }


  ngOnInit(): void {
    this.getData();
  }

  topics: any[] = [];

  getData(): void {
    this.loadingService.show();

    this.topicService.getTopicList().subscribe(ids => {
      ids.forEach(id => {
        this.topicService.getTopicDetail(id).subscribe(detailData => {
          this.topics.push(detailData)
        });
      });
      this.loadingService.hide();
    });
  }

  openDialog(topic: Object) {
    const dialogRef = this.dialog.open(TopicDialogComponent, {
      width: '50%',
      data: { topic: topic },

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  calculateTopicItem(i:number): boolean {
    return Math.floor(i / 4) % 2 === 0
  }

}
