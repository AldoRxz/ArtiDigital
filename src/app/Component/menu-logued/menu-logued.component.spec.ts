import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLoguedComponent } from './menu-logued.component';

describe('MenuLoguedComponent', () => {
  let component: MenuLoguedComponent;
  let fixture: ComponentFixture<MenuLoguedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLoguedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLoguedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
