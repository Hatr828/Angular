import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGreetingComponent } from './user-greeting.component';

describe('UserGreetingComponent', () => {
  let component: UserGreetingComponent;
  let fixture: ComponentFixture<UserGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
