import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchItemMenuPage } from './search-item-menu.page';

describe('SearchItemMenuPage', () => {
  let component: SearchItemMenuPage;
  let fixture: ComponentFixture<SearchItemMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchItemMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchItemMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
