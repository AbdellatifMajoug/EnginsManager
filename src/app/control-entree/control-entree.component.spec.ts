import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEntreeComponent } from './control-entree.component';

describe('ControlEntreeComponent', () => {
  let component: ControlEntreeComponent;
  let fixture: ComponentFixture<ControlEntreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlEntreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
