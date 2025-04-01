import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptableModuleComponent } from './comptable-module.component';

describe('ComptableModuleComponent', () => {
  let component: ComptableModuleComponent;
  let fixture: ComponentFixture<ComptableModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComptableModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptableModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
