import {Injectable } from "@angular/core";
import { ApiService } from "../providers/api-service";
import { UserService } from "./user-service";

@Injectable()
export class OAService {
    constructor(private api: ApiService, private users: UserService) {}

    /**
     * 获取流程大类
     * @param callback callback(success, error)
     */
    getCatalogs(callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetOAFunctionListResult', { empcode: user.EmpCode })
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

    /**
     * 获取某个类别下面的表单
     * @param catalogID 类别ID
     * @param callback 网络请求结束的回调
     */
    getForms(catalogID, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetOAElecFormListResult', 
                { empcode: user.EmpCode, functionid: catalogID })
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

    /**
     * 获取表单字段
     * @param formID 表单ID
     * @param callback 请求返回回调
     */
    getFormFields(formID, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetOAFormFieldsListResult', 
                { empcode: user.EmpCode, formid: formID })
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