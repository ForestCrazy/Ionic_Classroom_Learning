import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContrlifelseifelsePage } from './contrlifelseifelse.page';

describe('ContrlifelseifelsePage', () => {
  let component: ContrlifelseifelsePage;
  let fixture: ComponentFixture<ContrlifelseifelsePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrlifelseifelsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContrlifelseifelsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
