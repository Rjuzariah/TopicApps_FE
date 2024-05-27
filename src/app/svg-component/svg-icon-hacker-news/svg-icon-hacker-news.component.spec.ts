import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconHackerNewsComponent } from './svg-icon-hacker-news.component';

describe('SvgIconHackerNewsComponent', () => {
  let component: SvgIconHackerNewsComponent;
  let fixture: ComponentFixture<SvgIconHackerNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgIconHackerNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgIconHackerNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
