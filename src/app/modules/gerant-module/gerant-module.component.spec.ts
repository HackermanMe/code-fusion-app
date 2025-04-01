import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerantModuleComponent } from './gerant-module.component';

describe('GerantModuleComponent', () => {
  let component: GerantModuleComponent;
  let fixture: ComponentFixture<GerantModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GerantModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerantModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
