import { PageRouterService } from 'src/app/services/page-router.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public modalController: ModalController, private pageRouter: PageRouterService) { }

  isBackDropVisible: boolean = false;
  postMenuPath = 'post-item-menu';
  searchMenuPath = 'search-item-menu';

  ngOnInit() {
  }

  async showFooterAlert() {
    const modal = await this.modalController.create({
      component: FooterComponent,
      cssClass: 'custom-css-for-modal-footer-in-dashboard',
      swipeToClose: true,
      mode: 'ios',
    });

    modal.onWillDismiss().then((data) => {
    this.isBackDropVisible = false;
  });

    this.isBackDropVisible = true;
    return await modal.present();
  }

  goTo(path: string) {
    this.pageRouter.goTo(path);
  }

}
