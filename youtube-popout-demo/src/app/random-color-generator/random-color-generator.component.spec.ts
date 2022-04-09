import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomColorGeneratorComponent } from './random-color-generator.component';

describe('RandomColorGeneratorComponent', () => {
  let component: RandomColorGeneratorComponent;
  let fixture: ComponentFixture<RandomColorGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomColorGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomColorGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
