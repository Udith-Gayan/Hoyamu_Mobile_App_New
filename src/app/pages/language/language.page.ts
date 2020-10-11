
import { Component, OnInit } from '@angular/core';
import { PageRouterService } from 'src/app/services/page-router.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(private pageRouter: PageRouterService) { }

  ngOnInit() {
  }

  onEnglishSelected() {
    this.pageRouter.goTo('dashboard');
  }

  onSinhalaSelected() {
    this.pageRouter.goTo('dashboard');
  }

}
