import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittyCardSkeletonComponent } from './kitty-card-skeleton.component';

describe('KittyCardSkeletonComponent', () => {
  let component: KittyCardSkeletonComponent;
  let fixture: ComponentFixture<KittyCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KittyCardSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KittyCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
