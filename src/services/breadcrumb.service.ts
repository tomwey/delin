import {Injectable } from "@angular/core";

@Injectable()
export class BreadcrumbService {
    constructor() {
        
    }

    public breadcrumbs: any = [
        {
            name: '通讯录',
            current: 1,
        }
    ];

    public from: any = null;
    
}