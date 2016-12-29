/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PosterListComponent } from './poster-list.component';

describe('PosterListComponent', () => {
  let component: PosterListComponent;
  let fixture: ComponentFixture<PosterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
