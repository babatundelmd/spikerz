import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRiskComponent } from './asset-risk.component';

describe('AssetRiskComponent', () => {
  let component: AssetRiskComponent;
  let fixture: ComponentFixture<AssetRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetRiskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
