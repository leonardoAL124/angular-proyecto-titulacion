import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCompComponent } from './form-add-comp.component';

describe('FormAddCompComponent', () => {
  let component: FormAddCompComponent;
  let fixture: ComponentFixture<FormAddCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
