import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEstrategiaComponent } from './crear-estrategia.component';

describe('CrearEstrategiaComponent', () => {
  let component: CrearEstrategiaComponent;
  let fixture: ComponentFixture<CrearEstrategiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEstrategiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEstrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
