import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TopicService } from '../../services/topic.service';
import { Topic } from '../../interfaces/topic.interface';
import { DateFormatingService } from 'src/app/services/date-formating.service';

@Component({
  selector: 'app-topic-dialog',
  templateUrl: './topic-dialog.component.html',
  styleUrls: ['./topic-dialog.component.css']
})
export class TopicDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {topic: Topic}, private topicService: TopicService, private dateFormatingService: DateFormatingService) { }

  comments: any[] = [];
  commentLoading: boolean = false;

  ngOnInit(): void {
    if (this.data.topic.kids) {
      this.commentLoading = true
      this.getComments()
    }
  }

  getComments(): void {
    this.topicService.getTopicDetails(this.data.topic.kids || []).subscribe(comments => {
        this.comments = comments
        this.commentLoading = false
    });
  }

  getTimeAgo(timestamp: number): string {
    return this.dateFormatingService.getTimeAgo(timestamp);
  }
}
