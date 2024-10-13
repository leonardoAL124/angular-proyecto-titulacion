import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditCompComponent } from './form-edit-comp.component';

describe('FormEditCompComponent', () => {
  let component: FormEditCompComponent;
  let fixture: ComponentFixture<FormEditCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
