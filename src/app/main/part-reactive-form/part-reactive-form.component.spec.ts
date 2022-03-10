import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartReactiveFormComponent } from './part-reactive-form.component';

describe('PartReactiveFormComponent', () => {
  let component: PartReactiveFormComponent;
  let fixture: ComponentFixture<PartReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
