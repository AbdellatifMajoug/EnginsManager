import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosAffectationComponent } from './infos-affectation.component';

describe('InfosAffectationComponent', () => {
  let component: InfosAffectationComponent;
  let fixture: ComponentFixture<InfosAffectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosAffectationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
