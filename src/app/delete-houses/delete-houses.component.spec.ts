import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteHousesComponent } from './delete-houses.component';

describe('DeleteHousesComponent', () => {
  let component: DeleteHousesComponent;
  let fixture: ComponentFixture<DeleteHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteHousesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
