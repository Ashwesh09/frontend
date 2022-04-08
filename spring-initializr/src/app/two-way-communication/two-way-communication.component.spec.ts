import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayCommunicationComponent } from './two-way-communication.component';

describe('TwoWayCommunicationComponent', () => {
  let component: TwoWayCommunicationComponent;
  let fixture: ComponentFixture<TwoWayCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
