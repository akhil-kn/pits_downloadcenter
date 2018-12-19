import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCenterComponent } from './download-center.component';

describe('DownloadCenterComponent', () => {
  let component: DownloadCenterComponent;
  let fixture: ComponentFixture<DownloadCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
