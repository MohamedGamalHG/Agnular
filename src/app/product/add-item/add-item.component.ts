import { Component ,OnInit,NgZone} from '@angular/core';
import {Route, Router} from "@angular/router";
import { CrudService } from 'src/app/service/crud.service';
import {FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{


  productForm:FormGroup;
  constructor(
    private service:CrudService,
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone
    ){
      this.productForm = this.formBuilder.group({
          title:[''],
          price:[''],
          details:[''],
      })
    }

  ngOnInit(): void {

  }

  name:string = '';
  email:string  = '';

  OnSubmit():any{
    this.service.AddProduct(this.productForm.value)
    .subscribe(
      ()=>{console.log('data saved')
      this.ngZone.run(()=>this.router.navigateByUrl('/'))
    },
    (err)=>{console.log(err)});
  }
}
