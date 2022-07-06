import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent {
  employees:any = []
  filtby:string = "sortbyid";
  byID:boolean = true;
  byNA:boolean = false;
  byNZ:boolean = false;
  constructor(empService:EmployeeService){
    this.employees = empService.getEmployeesInfo();
    //console.log(this.employees);
  }

  sortID()
  {
    // let newemps = this.employees.sort((a, b) => a.empID - b.empID);
    // this.employees = newemps;
    this.filtby = "sortbyid";
    this.byID = true;
    this.byNA = false;
    this.byNZ = false;
    console.log(this.filtby);
  }

  sortNameA()
  {
    // let newemps = this.employees.sort((a, b) => (a.empName < b.empName ? -1 : 1));
    // this.employees = newemps;
    this.filtby = "sortbynamea";
    this.byID = false;
    this.byNA = true;
    this.byNZ = false;
    console.log(this.filtby);
  }

  sortNameZ()
  {
    // let newemps = this.employees.sort((a, b) => (a.empName > b.empName ? -1 : 1));
    // this.employees = newemps;
    this.filtby = "sortbynamez";
    this.byID = false;
    this.byNA = false;
    this.byNZ = true;
    console.log(this.filtby);
  }
}
