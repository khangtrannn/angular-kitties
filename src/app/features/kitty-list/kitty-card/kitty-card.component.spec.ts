import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittyCardComponent } from './kitty-card.component';

describe('KittyCardComponent', () => {
  let component: KittyCardComponent;
  let fixture: ComponentFixture<KittyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KittyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KittyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
