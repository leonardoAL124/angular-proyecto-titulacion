import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePokComponent } from './table-pok.component';

describe('TablePokComponent', () => {
  let component: TablePokComponent;
  let fixture: ComponentFixture<TablePokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
