import { Component, OnInit} from '@angular/core';
import {  User } from '../forms/forms.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  
  ngOnInit() {
    
    //this.dataSource.filterPredicate = this.filterBySubject();
}
applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toUpperCase();
}

filterBySubject() {
    let filterFunction = 
        (data: User, filter: string): boolean => {
          if (filter) {
            const subjects = data.name;
            for (let i = 0; i < subjects.length; i++) {
              if (subjects[i].indexOf(filter) != -1) {
                return true;
              }
            }
            return false;
          } else {
            return true;
          }
       };
  
}

}