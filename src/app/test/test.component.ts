import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {map} from 'rxjs/operators';
export interface User {
  id: boolean;
  name: string;
  email: string;
  phone: string;
  create_at: string;
  update_at: string;
  user_id: number;
  is_admin: boolean;
  is_ecp: boolean;
  status: string;
}

  const ELEMENT_DATA: User[] =[
    { 
      id: false,
       name: "iivanov",
        email: "asidorov@vtb.ru",
         phone: "79991234567",
          create_at: "1681721695",
           update_at: "1681724695",
            user_id: 2,
             is_admin: false,
              is_ecp: false,
               status: "Активен" 
               }, 
   { 
    id: false,
     name: "petrov",
      email: "petrov@vtb.ru",
       phone: "79991234599",
        create_at: "1681711695",
         update_at: "1681764695",
          user_id: 1,
           is_admin: true,
            is_ecp: true,
             status: "Заблокирован" 
            },
            { 
              id: false,
               name: "petrov",
                email: "petrov@vtb.ru",
                 phone: "79991234599",
                  create_at: "21.12.2021",
                   update_at: "10.09.2015",
                    user_id: 1,
                     is_admin: false,
                      is_ecp: false,
                       status: "Заблокирован" 
                      },
   ]



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Input()
  filter1 = false;
    displayedColumns: string[] = ['id', 'name','email','phone','is_admin','create_at','update_at','status','is_ecp'];
  dataSource = ELEMENT_DATA; 
  dataSource2 = ELEMENT_DATA; 
  isSelected = false;
  rowSelected:any;
  ACTIVE = "Активен";
  NOTACTIVE = "Заблокирован";
  events: string[] = [];
    filterEmail: string = "";
    filterName: string = "";
    filterPhone: string = "";
    filterStatus: string = "";
    filterCreate_at: string = "";
    filterUpdate_at: string = "";
    filterIs_admin: boolean = false ;
    Is_adminSelected: boolean = false;
    
    

  ngOnChanges(changes: SimpleChanges): void {
       // this.dataSource.filterPredicate = this.filterBySubject();  
  } 

onKey(event: any) { // without type info
  this.dataSource=this.dataSource2;
  console.log(event.target.value);
 this.filterEmail=event.target.value
}
onKey2(event: any) { // without type info
  this.dataSource=this.dataSource2;
  console.log(event.target.value);
  this.filterName=event.target.value;
}
onKey3(event: any) { // without type info
  this.dataSource=this.dataSource2;
  console.log(event.target.value);
  this.filterPhone=event.target.value; 
}
onKey4(event: any) { // without type info
  this.dataSource=this.dataSource2;
  console.log(event.value);
  if(event.value =="true")
  {this.filterIs_admin = true;
  this.Is_adminSelected = true;}
  else if(event.value =="false")
  {this.filterIs_admin = false;
  this.Is_adminSelected = true;}
  else this.Is_adminSelected = false; 
}
onKey5(event: any) {
  this.dataSource=this.dataSource2;
  console.log(event.target.value);
  this.filterCreate_at=event.target.value;
}
onKey6(event:any){
  this.dataSource=this.dataSource2;
  console.log(event.target.value);
  this.filterUpdate_at=event.target.value;
}
onKey1(event: any) {
  this.dataSource=this.dataSource2;
  this.filterIs_admin=event.value;
}
highlight(row: any){
  this.rowSelected=row.id;
}
addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  this.events.push(`${type}: ${event.value}`);
}
addEvent1(type: string, event: MatDatepickerInputEvent<Date>) {
  console.log(event.value)
  this.events.push(`${type}: ${event.value}`);
}
  

 accept() {
  if(this.filterEmail != "") {
    this.dataSource=this.dataSource.filter(user => user.email.includes(this.filterEmail)); 
  }
  (this.filterName != "") 
    this.dataSource=this.dataSource.filter(user => user.name.includes(this.filterName)); 
    (this.filterPhone != "") 
    this.dataSource=this.dataSource.filter(user => user.phone.includes(this.filterPhone)); 
    (this.filterStatus !="")
    this.dataSource=this.dataSource.filter(user => user.status.includes(this.filterStatus)); 
    (this.filterCreate_at !="")
    this.dataSource=this.dataSource.filter(user => user.create_at.includes(this.filterCreate_at)); 
    (this.filterUpdate_at !="")
    this.dataSource=this.dataSource.filter(user => user.update_at.includes(this.filterUpdate_at)); 
    (this.Is_adminSelected == true)
    this.dataSource=this.dataSource.filter(user => user.is_admin ==this.filterIs_admin); 
  }
  @ViewChild('name1') fullNameInput: any;
  @ViewChild('name2') fullNameInput2: any;
  @ViewChild('name3') fullNameInput3: any;
  clear(){
    this.fullNameInput.nativeElement.value = '';
    this.fullNameInput2.nativeElement.value = '';
    this.fullNameInput3.nativeElement.value = '';
    this.Is_adminSelected = false;
    this.dataSource=this.dataSource2;
  }
}