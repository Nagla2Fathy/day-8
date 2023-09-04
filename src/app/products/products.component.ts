import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit
{

  language: string = 'en-Us';
  private searchValue: string = '';
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allProducts!:any[];
  pageSize:number=20;
  currentPage:number=1;
  totalMovies!:number;
  constructor(private myProductServies :TvService )
  {

  }
  // myProductServies:TvService= new TvService() ;
  toggleDescripion(productId:number)
  {
    for (const product of this.allProducts) {
      if (product.id==productId)
      {
        product.overview=!product.overview
      }
    }

  }
  ngOnInit(): void {
  this.myProductServies.getAllProducts ().subscribe({
    next: (response) => {
      console.log(response);
      this.allProducts = response.results;
      this.totalMovies=response.total_results


    },
  });


  }

  set setSearchValue(value: string) {
    this.searchValue = value;
    this.searchMovies(value);

  }
  searchMovies(productName: string) {
    this.myProductServies.searchAllproducts(productName).subscribe({
      next: (data) => {
        this.allProducts=data.results;


      },
    });
  }
  changeLanguage() {
    this.language= this.myProductServies.changeLanguage()
    this.myProductServies.getAllProducts().subscribe({
      next: (response) => {
        this.allProducts = response.results;
      },
    });
   }


   changePage(pageInfo:PageEvent){
    this.currentPage=pageInfo.pageIndex+1;
    this.myProductServies.getAllProducts(this.currentPage).subscribe({
      next: (response) => {

        this.allProducts = response.results;
        this.totalMovies=response.total_results
      },
    });


   }
}


