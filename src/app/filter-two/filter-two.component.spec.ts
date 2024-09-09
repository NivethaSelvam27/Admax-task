import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTwoComponent } from './filter-two.component';

describe('FilterTwoComponent', () => {
  let component: FilterTwoComponent;
  let fixture: ComponentFixture<FilterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
