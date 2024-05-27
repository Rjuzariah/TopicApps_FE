import { Component, Input } from '@angular/core';
import { Topic } from '../../interfaces/topic.interface';
import { DateFormatingService } from 'src/app/services/date-formating.service';


@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent {
  constructor(private dateFormatingService: DateFormatingService) { }

  @Input() topic: Topic = {by: '', descendants: 0, id: 0, kids: [], score: 0, text: '', time: 0, title:'', type: ''};

  getTimeAgo(timestamp: number): string {
    return this.dateFormatingService.getTimeAgo(timestamp);
  }
}
