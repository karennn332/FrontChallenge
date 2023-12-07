import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionBalanceComponent } from './seccion-balance.component';

describe('SeccionBalanceComponent', () => {
  let component: SeccionBalanceComponent;
  let fixture: ComponentFixture<SeccionBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeccionBalanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeccionBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
