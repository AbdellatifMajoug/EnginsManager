import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAffectaionComponent } from './ajout-affectaion.component';

describe('AjoutAffectaionComponent', () => {
  let component: AjoutAffectaionComponent;
  let fixture: ComponentFixture<AjoutAffectaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAffectaionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutAffectaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
