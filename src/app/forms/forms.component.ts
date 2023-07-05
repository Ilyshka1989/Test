import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';


export interface RootObject {
  page: Page;
  users: User[];
  data: Datum[];
}

export interface Datum {
  user_id: number;
  is_admin: boolean;
  is_ecp: boolean;
  status: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: number;
  create_at: number;
  update_at: number;
  user_id: number;
  is_admin: boolean;
  is_ecp: boolean;
  status: string;
}

export interface Page {
  total: number;
  current: number;
  size: number;
}
  


 
  const ELEMENT_DATA: User[] =[
    { id: 1, name: "iivanov", email: "asidorov@vtb.ru", phone: 79991234567, create_at: 1681721695, update_at: 1681724695, user_id: 2, is_admin: false, is_ecp: false, status: "ACTIVE"  }, 
   { id: 2, name: "petrov", email: "petrov@vtb.ru", phone: 79991234599, create_at: 1681711695, update_at: 1681764695, user_id: 1, is_admin: true, is_ecp: false, status: "ACTIVE" },
   ]



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
  
  
  export class FormsComponent{ displayedColumns: string[] = ['id', 'name','email','phone','is_admin','create_at','update_at','status','is_ecp'];
  dataSource = ELEMENT_DATA}