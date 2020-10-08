import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerovillainComponent } from './herovillain.component';

describe('HerovillainComponent', () => {
  let component: HerovillainComponent;
  let fixture: ComponentFixture<HerovillainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerovillainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerovillainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
