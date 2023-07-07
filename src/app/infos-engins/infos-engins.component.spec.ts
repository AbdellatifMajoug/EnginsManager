import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosEnginsComponent } from './infos-engins.component';

describe('InfosEnginsComponent', () => {
  let component: InfosEnginsComponent;
  let fixture: ComponentFixture<InfosEnginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosEnginsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosEnginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
