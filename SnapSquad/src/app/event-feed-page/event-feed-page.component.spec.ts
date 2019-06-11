import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFeedPageComponent } from './event-feed-page.component';

describe('EventFeedPageComponent', () => {
  let component: EventFeedPageComponent;
  let fixture: ComponentFixture<EventFeedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFeedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
