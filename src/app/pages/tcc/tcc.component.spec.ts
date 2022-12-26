import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TccComponent } from './tcc.component';

describe('TccComponent', () => {
  let component: TccComponent;
  let fixture: ComponentFixture<TccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
