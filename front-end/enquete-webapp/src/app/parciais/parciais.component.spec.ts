import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParciaisComponent } from './parciais.component';

describe('ParciaisComponent', () => {
  let component: ParciaisComponent;
  let fixture: ComponentFixture<ParciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParciaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
