import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompaignComponent } from './create-compaign.component';

describe('CreateCompaignComponent', () => {
  let component: CreateCompaignComponent;
  let fixture: ComponentFixture<CreateCompaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCompaignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCompaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
