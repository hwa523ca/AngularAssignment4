import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-cards',
  templateUrl: './employees-cards.component.html',
  styleUrls: ['./employees-cards.component.css']
})
export class EmployeesCardsComponent {
  employees = [
    {empID:10101, empName:"Henry Anderson", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/henryandersonimage.jpg"},
    {empID:10102, empName:"Tom Cruise", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/tomcruiseimage.jpg"},
    {empID:10103, empName:"Adam Driver", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/adamdriverimage.jpg"},
    {empID:10104, empName:"Reggie Fils-Aime", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/reggiefilsaimeimage.jpg"},
    {empID:10105, empName:"Gabriel Iglesias", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/gabrieliglesiasimage.jpg"}
  ]

  sortID()
  {
    let newemps = this.employees.sort((a, b) => a.empID - b.empID);
    this.employees = newemps;
  }

  sortNameA()
  {
    let newemps = this.employees.sort((a, b) => (a.empName < b.empName ? -1 : 1));
    this.employees = newemps;
  }

  sortNameZ()
  {
    let newemps = this.employees.sort((a, b) => (a.empName > b.empName ? -1 : 1));
    this.employees = newemps;
  }
}
