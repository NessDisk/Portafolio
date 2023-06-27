import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCompComponent } from './link-comp.component';

describe('LinkCompComponent', () => {
  let component: LinkCompComponent;
  let fixture: ComponentFixture<LinkCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
