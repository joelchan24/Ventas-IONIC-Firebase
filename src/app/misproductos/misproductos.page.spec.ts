import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisproductosPage } from './misproductos.page';

describe('MisproductosPage', () => {
  let component: MisproductosPage;
  let fixture: ComponentFixture<MisproductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisproductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
