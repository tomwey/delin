import {Injectable } from "@angular/core";

@Injectable()
export class EmploySelectService {
    constructor() {}

    public selectedDept: any = null;
    public selectedEmp:  any = null;
}