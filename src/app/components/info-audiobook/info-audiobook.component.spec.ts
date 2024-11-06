import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAudiobookComponent } from './info-audiobook.component';

describe('InfoAudiobookComponent', () => {
  let component: InfoAudiobookComponent;
  let fixture: ComponentFixture<InfoAudiobookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAudiobookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoAudiobookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
