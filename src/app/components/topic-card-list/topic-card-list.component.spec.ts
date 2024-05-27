import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCardListComponent } from './topic-card-list.component';

describe('TopicCardListComponent', () => {
  let component: TopicCardListComponent;
  let fixture: ComponentFixture<TopicCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
