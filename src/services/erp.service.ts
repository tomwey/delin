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

    GetAddressListResult(callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetAddressListResult', { empcode : user.EmpCode })
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

    GetAddressListModel(addresslistid, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetAddressListModel', { addresslistid: addresslistid, empcode : user.EmpCode })
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

    AddAddressList(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            this.api.post('AddAddressList', params)
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

    UpdateAddressList(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            this.api.post('UpdateAddressList', params)
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

    DeleteAddressList(addresslistid, callback) {
        this.users.currentUser().then(user => {
            this.api.post('DeleteAddressList', { addresslistid: addresslistid, empcode : user.EmpCode })
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

    GetMaterielListResult(callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetMaterielListResult', { empcode : user.EmpCode })
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

    GetERPProductList(productname, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetERPProductList', { empcode : user.EmpCode, productname: productname })
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

    GetERPProductModel(productcode, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetERPProductModel', { empcode : user.EmpCode, productcode: productcode })
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

    GetProductBOM(productcode, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetProductBOM', { empcode : user.EmpCode, productcode: productcode })
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

    GetCreateOrderResult(callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetCreateOrderResult', { empcode : user.EmpCode })
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

    AddOrder(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            this.api.post('AddOrder', params)
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

    UpdateOrder(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            this.api.post('UpdateOrder', params)
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

    GetOrderList(callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetOrderList', { empcode : user.EmpCode })
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

    GetOrderModel(orderNo, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetOrderModel', { empcode : user.EmpCode, orderno: orderNo })
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

    DeleteOrder(orderNo, callback) {
        this.users.currentUser().then(user => {
            this.api.post('DeleteOrder', { empcode : user.EmpCode, orderno: orderNo })
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