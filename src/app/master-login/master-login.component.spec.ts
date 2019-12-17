import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterLoginComponent } from './master-login.component';

describe('MasterLoginComponent', () => {
  let component: MasterLoginComponent;
  let fixture: ComponentFixture<MasterLoginComponent>;

  beforeEach(() => {
    const routerOutletStub = { activatedRouteData: { animation: {} } };

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MasterLoginComponent],
      providers: [{ provide: RouterOutlet, useValue: routerOutletStub }]
    });

    fixture = TestBed.createComponent(MasterLoginComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
