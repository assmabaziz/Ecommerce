import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptAuthComponent } from './cmpt-auth.component';

describe('CmptAuthComponent', () => {
  let component: CmptAuthComponent;
  let fixture: ComponentFixture<CmptAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmptAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmptAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
