import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahsboardAssistantComponent } from './dahsboard-assistant.component';

describe('DahsboardAssistantComponent', () => {
  let component: DahsboardAssistantComponent;
  let fixture: ComponentFixture<DahsboardAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DahsboardAssistantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DahsboardAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
