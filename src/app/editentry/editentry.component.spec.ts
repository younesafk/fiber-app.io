import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditentryComponent } from './editentry.component';

describe('EditentryComponent', () => {
  let component: EditentryComponent;
  let fixture: ComponentFixture<EditentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
