import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRestaurantsComponent } from './liste-resto.component';
import { RestaurantService } from '../../../../../../services/restaurant/restaurant.service'; // Vérifiez ce chemin
import { MessageService } from 'primeng/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListRestaurantsComponent', () => {
  let component: ListRestaurantsComponent;
  let fixture: ComponentFixture<ListRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importez HttpClientTestingModule pour tester les requêtes HTTP
      declarations: [ListRestaurantsComponent],
      providers: [MessageService, RestaurantService] // Ajoutez les services nécessaires ici
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch restaurants on init', () => {
    const service = TestBed.inject(RestaurantService);
    spyOn(service, 'getAllRestaurants').and.callThrough(); // Espionne la méthode pour vérifier son appel

    component.ngOnInit(); // Appel de la méthode onInit pour déclencher la récupération
    expect(service.getAllRestaurants).toHaveBeenCalled(); // Vérifie si la méthode a été appelée
  });

  // Ajoutez d'autres tests selon vos besoins pour tester les autres méthodes
});