import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListentriesComponent } from './listentries.component';

describe('ListentriesComponent', () => {
  let component: ListentriesComponent;
  let fixture: ComponentFixture<ListentriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListentriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListentriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
