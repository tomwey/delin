import {Injectable } from "@angular/core";
import { ApiService } from "../providers/api-service";
import { UserService } from "./user-service";

@Injectable()
export class TestService {
    constructor(private api: ApiService, private users: UserService) {}

    test(uri, params) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            console.log('------------- start request: ' + uri);
            this.api.post(uri, params)
                .then(data => {
                    console.log(data);
                    console.log('------------- end request: ' + uri);
                })
                .catch(error => {
                    console.log(error);
                    console.log('------------- end request: ' + uri);
                });
        });
    }
}