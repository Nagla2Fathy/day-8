import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {


   //apiKey ='2a44fc4e2abe5580787838affda36a95' ;
   apiKey = '0c3547b1c1c7a21fc554b617bff38eb2'
   language: string = 'en-Us';

  constructor(private http:HttpClient) { }
  getAllProducts(pageNumber:number=1):Observable<any>{

    return this.http.get
    (`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=${this.language}&page=${pageNumber}`);
}

getProductId( ProductId:number):Observable<any> {

  return  this.http.get
(` https://api.themoviedb.org/3/tv/${ProductId}?api_key=${this.apiKey}&language=${this.language} `)

}

searchAllproducts(productName:string,pageNumber:number=1) :Observable<any>
{
  if(productName=='')
  {
    return this.getAllProducts()
  }
  else
  {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${productName}&language=${this.language}&page=${pageNumber}`)

  }
}
changeLanguage() {
  this.language = this.language == 'en-Us' ? 'ar-SA' : 'en-Us';
  return this.language;
}
}
