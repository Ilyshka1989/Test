import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


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
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})

  export class FormsComponent implements OnChanges
  {
    displayedColumns: string[] = ['id', 'name','email','phone','is_admin','create_at','update_at','status','is_ecp'];
  dataSource = ELEMENT_DATA; 
  dataSource2 = ELEMENT_DATA; 
  isSelected = false;
  rowSelected:any;
  ACTIVE = "Активен";
NOTACTIVE = "Заблокирован";
events: string[] = [];


addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  this.events.push(`${type}: ${event.value}`);
}
addEvent1(type: string, event: MatDatepickerInputEvent<Date>) {
  this.events.push(`${type}: ${event.value}`);
}
  


  ngOnChanges(changes: SimpleChanges): void {
       // this.dataSource.filterPredicate = this.filterBySubject();  
  } 

onKey(event: any) { // without type info
  this.dataSource=this.dataSource2;
  console.log(event.target.value);
  this.dataSource=this.dataSource.filter(user => user.email.includes(event.target.value)); 
}
onKey2(event: any) { // without type info
  this.dataSource=this.dataSource2;
  console.log(event.target.value);
  this.dataSource=this.dataSource.filter(user => user.name.includes(event.target.value));
}
onKey3(event: any) { // without type info
  this.dataSource=this.dataSource2;
  console.log(event.target.value);
  this.dataSource=this.dataSource.filter(user => user.phone.includes(event.target.value)); 
}
onKey4(event: any) { // without type info
  this.dataSource=this.dataSource2;
  console.log(event.value);
  this.dataSource=this.dataSource.filter(user => user.status === (event.value)); 
}
onKey5(event: any) {
  this.dataSource=this.dataSource2;
  console.log(event.value);
  this.dataSource=this.dataSource.filter(user => user.create_at.includes(event.target.value))
}
onKey6(event:any){
  this.dataSource=this.dataSource2;
  console.log(event.target.value);
  this.dataSource=this.dataSource.filter(user => user.update_at.includes(event.target.value))
}
highlight(row: any){
  this.rowSelected=row.id;
}

 onSubmit(): void {}

}

  