import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  emps = [
    {empID:10101, empName:"Henry Anderson", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/henryandersonimage.jpg"},
    // {empID:10102, empName:"Tom Cruise", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/tomcruiseimage.jpg"},
    // {empID:10103, empName:"Adam Driver", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/adamdriverimage.jpg"},
    // {empID:10104, empName:"Reggie Fils-Aime", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/reggiefilsaimeimage.jpg"},
    {empID:10105, empName:"Gabriel Iglesias", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/gabrieliglesiasimage.jpg"},
    {empID:10106, empName:"Jordan Peele", empSalary:80000, empDesignation:"Software Engineer Lead", empImg:"../../assets/jordanpeeleimage.jpg"},
    // {empID:10107, empName:"Mark Hamil", empSalary:65000, empDesignation:"Marketing Director", empImg:"../../assets/markhamilimage.jpg"},
    // {empID:10108, empName:"Chris Rock", empSalary:55000, empDesignation:"Assistant Marketing Director", empImg:"../../assets/chrisrockimage.jpg"},
    {empID:10109, empName:"Scott Wozniak", empSalary:30000, empDesignation:"Software Engineer Intern", empImg:"../../assets/scottwozniakimage.jpg"},
    {empID:10110, empName:"Bill Gates", empSalary:200000, empDesignation:"Chief Executive Officer", empImg:"../../assets/billgatesimage.jpg"}
  ];

  getEmployeesInfo(){
    return this.emps;
  }

  sortID()
  {
    let newemps = this.emps.sort((a, b) => a.empID - b.empID);
    this.emps = newemps;
  }

  sortNameA()
  {
    let newemps = this.emps.sort((a, b) => (a.empName < b.empName ? -1 : 1));
    this.emps = newemps;
  }

  sortNameZ()
  {
    let newemps = this.emps.sort((a, b) => (a.empName > b.empName ? -1 : 1));
    this.emps = newemps;
  }
}
