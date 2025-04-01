import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePdvComponent } from './liste-pdv.component';

describe('ListePdvComponent', () => {
  let component: ListePdvComponent;
  let fixture: ComponentFixture<ListePdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListePdvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
