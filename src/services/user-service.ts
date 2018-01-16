import {Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { ApiService } from "../providers/api-service";

@Injectable()
export class UserService {
    constructor(
        private storage: Storage,
        private api: ApiService,
    ) {

    }

    login(loginname, pwd): Promise<any> {
        return new Promise((resolve, reject) => {
            this.api.post('EmpLogin', { loginname: loginname, pwd: pwd }, '登录中...')
                .then(data => {
                    this.storage.set('logined.user', JSON.stringify(data));
                    resolve(data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    }
}