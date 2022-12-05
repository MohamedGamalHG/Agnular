import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UsersService } from 'src/app/service/users/users.service';
import {DataTableDirective} from 'angular-datatables';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
@ViewChild(DataTableDirective, {static: false})

export class UsersComponent implements OnInit,OnDestroy {


  datatableElement: any = DataTableDirective;
  min: any = 0;
  max: any = 0;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  allUsers:any = [];
  constructor(private service:UsersService){}
  ngOnInit(): void {
    this.users()
    this.dtOptions={
      pagingType:'full_numbers',
      searching:true,
      //paging:false,
      lengthChange:false
    }

    // $.fn.dataTable.ext.search.push((settings: any, data: string[], dataIndex: any) => {
    //   const id = parseFloat(data[0]) || 0; // use data for the id column
    //   return (Number.isNaN(this.min) && Number.isNaN(this.max)) ||
    //       (Number.isNaN(this.min) && id <= this.max) ||
    //       (this.min <= id && Number.isNaN(this.max)) ||
    //       (this.min <= id && id <= this.max);
    // });
  }

  // filterById(): void {
  //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.draw();
  //   });
  // }



  users():void
  {
    this.service.getUser().subscribe((response: any) => {
      this.allUsers = response;
      this.dtTrigger.next(null);
      //console.log(response);
    });
    //console.log(this.allUsers)
   //return this.allUsers  =  this.service.getUser();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    $.fn.dataTable.ext.search.pop();
  }
}


