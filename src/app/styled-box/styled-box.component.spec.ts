import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledBoxComponent } from './styled-box.component';

describe('StyledBoxComponent', () => {
  let component: StyledBoxComponent;
  let fixture: ComponentFixture<StyledBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyledBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyledBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
