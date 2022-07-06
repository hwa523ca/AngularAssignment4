import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees-cards',
  templateUrl: './employees-cards.component.html',
  styleUrls: ['./employees-cards.component.css']
})
export class EmployeesCardsComponent {
  employees:any = [];
  errorMsg:string = '';
  byID:boolean = true;
  byNA:boolean = false;
  byNZ:boolean = false;

  constructor(empService:EmployeeService){
    // this.employees = empService.getEmployeesInfo();
    empService.getEmployeesInfo().subscribe(res => this.employees=res,
      error => this.errorMsg=error)
  }

  sortID()
  {
    // let newemps = this.employees.sort((a, b) => a.empID - b.empID);
    // this.employees = newemps;
    this.byID = true;
    this.byNA = false;
    this.byNZ = false;
  }

  sortNameA()
  {
    // let newemps = this.employees.sort((a, b) => (a.empName < b.empName ? -1 : 1));
    // this.employees = newemps;
    this.byID = false;
    this.byNA = true;
    this.byNZ = false;
  }

  sortNameZ()
  {
    // let newemps = this.employees.sort((a, b) => (a.empName > b.empName ? -1 : 1));
    // this.employees = newemps;
    this.byID = false;
    this.byNA = false;
    this.byNZ = true;
  }
}
