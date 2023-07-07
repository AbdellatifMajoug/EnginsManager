import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreeEnginComponent } from './entree-engin.component';

describe('EntreeEnginComponent', () => {
  let component: EntreeEnginComponent;
  let fixture: ComponentFixture<EntreeEnginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreeEnginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntreeEnginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
