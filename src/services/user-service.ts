import {Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { ApiService } from "../providers/api-service";

@Injectable()
export class UserService {

    user: any = null;

    constructor(
        private storage: Storage,
        private api: ApiService,
    ) {

    }

    login(loginname, pwd): Promise<any> {
        return new Promise((resolve, reject) => {
            this.api.post('EmpLogin', { loginname: loginname, pwd: pwd }, '登录中...')
                .then(data => {
                    this.storage.set('logined.user', JSON.stringify(data.Model));
                    resolve(data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    }

    logout() {
        return this.storage.remove('logined.user');
    }

    currentUser(): Promise<any> {
        if (this.user) {
            return new Promise(resolve => {
                resolve(this.user);
            });
        } else {
            return new Promise(resolve => {
                this.storage.get('logined.user')
                    .then(data => {
                        this.user = JSON.parse(data);
                        resolve(this.user);
                    });
            });
        }
    }
}