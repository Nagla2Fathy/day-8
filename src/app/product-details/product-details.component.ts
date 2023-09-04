import { Component  ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectedproduct:any;
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
//  myProductServies:TvService= new TvService() ;
 allProducts!:any[];
  constructor(public route:ActivatedRoute ,private myProductServies :TvService)
  {

  }

  ngOnInit(): void {
    let productId= parseInt(this.route.snapshot.paramMap.get('id')!)

    this.myProductServies.getProductId(productId).subscribe({next:(data)=>{

      this.selectedproduct=data ;

    }})
    // {
    //   console.log(this.selectedproduct())
    // }
  }


}
