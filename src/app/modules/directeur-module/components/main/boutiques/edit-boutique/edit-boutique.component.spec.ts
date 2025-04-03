import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoutiqueComponent } from './edit-boutique.component';

describe('EditBoutiqueComponent', () => {
  let component: EditBoutiqueComponent;
  let fixture: ComponentFixture<EditBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBoutiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
