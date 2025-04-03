import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoutiquesComponent } from './list-boutiques.component';

describe('ListBoutiquesComponent', () => {
  let component: ListBoutiquesComponent;
  let fixture: ComponentFixture<ListBoutiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBoutiquesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBoutiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
