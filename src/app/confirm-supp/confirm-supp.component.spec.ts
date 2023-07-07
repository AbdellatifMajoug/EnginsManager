import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSuppComponent } from './confirm-supp.component';

describe('ConfirmSuppComponent', () => {
  let component: ConfirmSuppComponent;
  let fixture: ComponentFixture<ConfirmSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSuppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
