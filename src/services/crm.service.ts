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

    /**
     * 获取需要转移的客户的基本信息
     * @param customerCode 客户编号
     * @param callback 
     */
    getCRMCustomerChangeMessage(customerCode, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetCRMCustomerChangeMessage', { customercode: customerCode, empcode: user.EmpCode })
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
     * 添加客户转移信息
     * @param params 客户转移信息
     * @param callback 
     */
    addCRMCustomerChange(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            this.api.post('AddCRMCustomerChange', params)
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

    updateCRMCustomerChange(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            this.api.post('UpdateCRMCustomerChangeModel', params)
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

    deleteCRMCustomerChange(crmcustomerchangeid, callback) {
        this.users.currentUser().then(user => {
            this.api.post('DeleteCRMCustomerChange', { empcode: user.EmpCode, crmcustomerchangeid:crmcustomerchangeid })
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

    getCRMCustomerChangeModel(crmcustomerchangeid, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetCRMCustomerChangeModel', { empcode: user.EmpCode, crmcustomerchangeid:crmcustomerchangeid })
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
     * 获取客户转移列表
     * @param callback 
     */
    getCRMCustomerChangeListResult(callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetCRMCustomerChangeListResult', { empcode: user.EmpCode })
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

    AddIntentCustomer(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            this.api.post('AddIntentCustomer', params)
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

    UpdateIntentCustomer(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            this.api.post('UpdateIntentCustomer', params)
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

    DeleteIntentCustomer(code, callback) {
        this.users.currentUser().then(user => {
            this.api.post('DeleteIntentCustomer', { empcode : user.EmpCode, intentcustomercode: code })
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

    GetCRMIntentCustomerList(callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetCRMIntentCustomerList', { empcode : user.EmpCode })
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