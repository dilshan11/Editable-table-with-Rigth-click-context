import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpaipcdocComponent } from './ipaipcdoc.component';

describe('IpaipcdocComponent', () => {
  let component: IpaipcdocComponent;
  let fixture: ComponentFixture<IpaipcdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpaipcdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpaipcdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
