import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit{

  departments:any[]
  constructor()
  {
    this.departments=[{
      did:1001,
      dname:'Consulting'
    },
    {
      did:1002,
      dname:'Tax'
    },
    {
      did:1101,
      dname:'HR'
    },
    {
      did:1067,
      dname:'Audit'
    },
    {
      did:1032,
      dname:'Enabling Areas'
    },
  ]
  }

  public getDepartments(){
    return this.departments
  }
  ngOnInit(): void {
    
  }
}