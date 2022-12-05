import { Component ,OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/product';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {

  //products:Product[]=[];
  products:any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  allUsers:any = [];

  constructor(private service:CrudService){}
  ngOnInit(): void {
    this.service.GetProducts().subscribe((item:any) => {
      console.log(item);
      this.products = item;
    })

    this.Allproducts()
    this.dtOptions={
      pagingType:'full_numbers',
      searching:true,
      //paging:false,
      lengthChange:false
  }
  }

  delete(id:any,index:any)
  {
    console.log(id);
    this.service.DeleteProduct(id).subscribe(res=>{
      this.products.splice(index,1);
    })
  }


  // ngOnInit(): void {
  //   this.service.GetProducts().subscribe((item:any) => {
  //     console.log(item);
  //     this.products = item;
  //   })





  Allproducts()
  {
    this.service.GetProducts().subscribe((response: any) => {
      this.products = response;
      this.dtTrigger.next(null);
      //console.log(response);
    });
  }

}
