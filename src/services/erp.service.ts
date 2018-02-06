import {Injectable } from "@angular/core";
import { ApiService } from "../providers/api-service";
import { UserService } from "./user-service";

@Injectable()
export class ERPService {
    constructor(private api: ApiService, private users: UserService) {}

    GetAchievementList(callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetAchievementList', { empcode : user.EmpCode })
                .then(data => {
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    GeAchievementDetail(achievementcode, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GeAchievementDetail', { empcode : user.EmpCode, achievementcode: achievementcode })
                .then(data => {
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

}