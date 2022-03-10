import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTdFormComponent } from './part-td-form.component';

describe('PartTdFormComponent', () => {
  let component: PartTdFormComponent;
  let fixture: ComponentFixture<PartTdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartTdFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
