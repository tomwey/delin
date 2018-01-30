import {Injectable } from "@angular/core";
import { ApiService } from "../providers/api-service";
import { UserService } from "./user-service";

@Injectable()
export class CRMService {
    constructor(private api: ApiService, private users: UserService) {}

    /**
     * 获取创建客户时下拉选基础选项
     * @param callback callback(success, error)
     */
    getCustomerUserBaseOptions(callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetCreateCustomerListResult', { empcode: user.EmpCode })
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
     * 新增客户
     * @param params 客户数据 { createtime: '', area: '', customernature: '客户性质',visitingcycle: '拜访周期', customername: '',customertype: '客户类别', customerhospital: '治疗医院', nation: '民族', amputationdate: '' }
     * @param callback 
     */
    addCustomer(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            this.api.post('AddCRMCustomer', params)
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
     * 获取客户列表
     * @param callback 
     */
    getCustomersList(callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetCRMCustomerList', { empcode: user.EmpCode })
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
     * 获取城市列表
     * @param callback 
     */
    getCitiesList(code, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetCRMCitys', { code: code, empcode: user.EmpCode })
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