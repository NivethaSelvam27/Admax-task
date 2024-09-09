import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktologinComponent } from './backtologin.component';

describe('BacktologinComponent', () => {
  let component: BacktologinComponent;
  let fixture: ComponentFixture<BacktologinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacktologinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacktologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
