import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppageComponent } from './apppage.component';

describe('ApppageComponent', () => {
  let component: ApppageComponent;
  let fixture: ComponentFixture<ApppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApppageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
