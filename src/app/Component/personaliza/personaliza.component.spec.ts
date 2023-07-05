import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizaComponent } from './personaliza.component';

describe('PersonalizaComponent', () => {
  let component: PersonalizaComponent;
  let fixture: ComponentFixture<PersonalizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalizaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
