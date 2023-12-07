import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecciontarjetaComponent } from './secciontarjeta.component';

describe('SecciontarjetaComponent', () => {
  let component: SecciontarjetaComponent;
  let fixture: ComponentFixture<SecciontarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecciontarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecciontarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
