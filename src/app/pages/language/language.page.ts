import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEnglishSelected() {
    this.router.navigate(['/dashboard']);
  }

  onSinhalaSelected() {
    this.router.navigate(['/dashboard']);
  }

}
