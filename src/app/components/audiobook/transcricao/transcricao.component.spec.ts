import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscricaoComponent } from './transcricao.component';

describe('TranscricaoComponent', () => {
  let component: TranscricaoComponent;
  let fixture: ComponentFixture<TranscricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranscricaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
