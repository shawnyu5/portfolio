import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonButtonComponent } from './neon-button.component';

describe('NeonButtonComponent', () => {
  let component: NeonButtonComponent;
  let fixture: ComponentFixture<NeonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeonButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
