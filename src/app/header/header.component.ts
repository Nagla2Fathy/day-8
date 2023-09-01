import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo: string = 'amazon';
  headerLinks: string[] = ['Home', 'Products',  'About', 'contact us'];
  language: string = 'en-Us';
  isLogin:boolean=true;
  //'ar-SA'
  constructor() {}

  changeLanguage() {
    this.language = this.language == 'en-Us' ? 'ar-SA' : 'en-Us';
  }

}
