import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LappisComponent } from './lappis.component';

describe('LappisComponent', () => {
  let component: LappisComponent;
  let fixture: ComponentFixture<LappisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LappisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LappisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
