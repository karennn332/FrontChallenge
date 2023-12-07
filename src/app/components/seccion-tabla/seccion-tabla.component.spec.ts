import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTablaComponent } from './seccion-tabla.component';

describe('SeccionTablaComponent', () => {
  let component: SeccionTablaComponent;
  let fixture: ComponentFixture<SeccionTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeccionTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeccionTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
