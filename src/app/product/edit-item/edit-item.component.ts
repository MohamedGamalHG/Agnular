import { Component, OnInit ,NgZone} from '@angular/core';
import { ActivatedRoute, ParamMap ,Route,Router} from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit{

  id:any;
  product:any;

  updateform:FormGroup;

  constructor(
    private service:CrudService,
    private router:Router,
    private activateroute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private ngZone:NgZone
    )
  {
      //this.productService = service;
      //this.id = this.route.paramMap.subscribe((params:ParamMap)=> params.get('id'))
      this.id = this.activateroute.snapshot.paramMap.get('id');
      this.service.GetProduct(this.id).subscribe(item =>
        {
          console.log('data get it from edit componenet ' + item)
          this.updateform.setValue({
            title:item['product']['title'],
            price:item['product']['price'],
            details:item['product']['details']

          })
        });
        this.updateform = this.formBuilder.group({
          title:[''],
          price:[''],
          details:['']
    })
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  updateSubmit():any{
    this.service.UpdateProduct(this.id,this.updateform.value)
    .subscribe(
      ()=>{console.log('data updated saved')
      this.ngZone.run(()=>this.router.navigateByUrl('/'))
    },
    (err)=>{console.log(err)});
  }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((params:ParamMap)=>{
  //     this.id = params.get('id');
  //   });

  //   this.product = this.productService.getProductById(Number(this.id));
  //   //this.product = this.product.map((item:any)=>{return {id:item[0],titel:item[1],price:item[2],details:item[3]}})
  //   console.log(this.product);
  // }




}
