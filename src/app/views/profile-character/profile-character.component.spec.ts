import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCharacterComponent } from './profile-character.component';

describe('ProfileCharacterComponent', () => {
  let component: ProfileCharacterComponent;
  let fixture: ComponentFixture<ProfileCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
