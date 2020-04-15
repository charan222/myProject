import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLinkComponent } from './form-link.component';

describe('FormLinkComponent', () => {
  let component: FormLinkComponent;
  let fixture: ComponentFixture<FormLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
