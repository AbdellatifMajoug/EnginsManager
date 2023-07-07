import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnginComponent } from './update-engin.component';

describe('UpdateEnginComponent', () => {
  let component: UpdateEnginComponent;
  let fixture: ComponentFixture<UpdateEnginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEnginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEnginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
