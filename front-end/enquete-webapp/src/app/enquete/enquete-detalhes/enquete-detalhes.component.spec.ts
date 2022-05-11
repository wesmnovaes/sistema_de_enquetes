import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueteDetalhesComponent } from './enquete-detalhes.component';

describe('EnqueteDetalhesComponent', () => {
  let component: EnqueteDetalhesComponent;
  let fixture: ComponentFixture<EnqueteDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnqueteDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqueteDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
