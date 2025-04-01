import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsDeVentesComponent } from './points-de-ventes.component';

describe('PointsDeVentesComponent', () => {
  let component: PointsDeVentesComponent;
  let fixture: ComponentFixture<PointsDeVentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointsDeVentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointsDeVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
