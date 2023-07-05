import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerzonalizaComponent } from './perzonaliza.component';

describe('PerzonalizaComponent', () => {
  let component: PerzonalizaComponent;
  let fixture: ComponentFixture<PerzonalizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerzonalizaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerzonalizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
