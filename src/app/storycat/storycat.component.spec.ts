import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorycatComponent } from './storycat.component';

describe('StorycatComponent', () => {
  let component: StorycatComponent;
  let fixture: ComponentFixture<StorycatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorycatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
