/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XdComponent } from './xd.component';

describe('XdComponent', () => {
  let component: XdComponent;
  let fixture: ComponentFixture<XdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
