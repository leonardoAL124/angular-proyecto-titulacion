import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApiComponent } from './list-api.component';

describe('ListApiComponent', () => {
  let component: ListApiComponent;
  let fixture: ComponentFixture<ListApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
