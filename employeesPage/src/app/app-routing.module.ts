import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { EmployeesCardsComponent } from './employees-cards/employees-cards.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [
  {path: 'List', component: EmployeesListComponent},
  {path: 'Cards', component: EmployeesCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [EmployeesListComponent, EmployeesCardsComponent]