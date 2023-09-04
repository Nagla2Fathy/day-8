import { Component } from '@angular/core';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo: string = 'amazon';
  headerLinks: string[] = ['Home', 'Products',  'About', 'contact us'];

  isLogin:boolean=true;
  //'ar-SA'
  constructor(private productserviece :TvService) {
    this.productserviece.changeLanguage();
  }



}
