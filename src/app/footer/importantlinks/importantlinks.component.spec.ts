import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantlinksComponent } from './importantlinks.component';

describe('ImportantlinksComponent', () => {
  let component: ImportantlinksComponent;
  let fixture: ComponentFixture<ImportantlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantlinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportantlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
