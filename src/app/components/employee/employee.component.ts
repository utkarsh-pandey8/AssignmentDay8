import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:any[]
  constructor()
  {
    this.employees=[{
      eid:101,
      ename:'Utkarsh',
      dept:'Consulting'
    },
    {
      eid:121,
      ename:'Mohit',
      dept:'Tax'
    },
    {
      eid:114,
      ename:'Shreya',
      dept:'HR'
    },
    {
      eid:187,
      ename:'Ravi',
      dept:'Audit'
    },
  ]
  }

  public getEmployees(){
    return this.employees
  }
  
  ngOnInit(): void {
    
  }
}
