import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departmentdata():string[]{
    return ['HR','DAS-IT','BAS-IT','SAP']
  }

  constructor() { }
}
