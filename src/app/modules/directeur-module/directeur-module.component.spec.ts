import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecteurModuleComponent } from './directeur-module.component';

describe('DirecteurModuleComponent', () => {
  let component: DirecteurModuleComponent;
  let fixture: ComponentFixture<DirecteurModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirecteurModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirecteurModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
