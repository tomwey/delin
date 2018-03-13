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

    /**
     * 获取我的事项
     * @param status 0 表示待办; 1 表示流程中; 3 表示被退回
     * @param callback 回调函数
     */
    getOAFormInstanceList(status, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetOAFormInstanceListByEmpCode', 
                { empcode: user.EmpCode, status: status })
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
     * 获取流程详情
     * @param instID 流程ID
     * @param callback 回调函数
     */
    getOAFormInstanceDetail(instID, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetFormInstanceDetail', 
                { empcode: user.EmpCode, forminstanceid: instID })
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
     * 流程签核
     * @param params 流程签核数据 { forminstanceid: '', signtype: '', advice: '' }
     * @param callback 请求回调
     */
    signFormInstance(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            this.api.post('SignFormInstance', params)
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
     * 添加流程
     * @param params 流程签核数据 { formid: '', formfieldsvalue: 'json数组再encode' }
     * @param callback 请求回调
     */
    addFormInstance(params, callback) {
        this.users.currentUser().then(user => {
            params.applyby = user.EmpCode;
            params.orderby = user.EmpCode;
            
            this.api.post('AddForminstance', params)
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
     * 获取委托事项
     * @param type 0 表示我委托的 1表示委托我的
     * @param callback 请求回调
     */
    getDelegateEvents(type, callback) {
        this.users.currentUser().then(user => {
            console.log(user);
            this.api.post('QueryDelegate', { empcode: user.EmpCode, status: type })
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    /**
     * 添加委托
     * @param params 委托数据
     * @param callback 
     */
    addDelegate(params, callback) {
        this.users.currentUser().then(user => {
            // console.log(user);
            this.api.post('AddDelegate', { 
                delegateby: user.EmpCode, 
                delegateto: params.EmpCode,
                begintime: params.startDate,
                endtime: params.endDate,
                formlist: params.formlist,
             }, '提交中...')
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    /**
     * 添加日程
     * @param params 日程数据
     */
    addSchedule(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            params.time = params.time.replace('+08:00', '').replace('T', ' ');//gsub('+08:00', 'Z');
            // console.log(params);
            this.api.post('AddOASchedule', params, '提交中...')
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    /**
     * 获取某天的日程列表
     * @param dateStr 日期，格式为：yyyy-MM-dd，例如：2018-01-01
     * @param callback 请求回调
     */
    getScheduleList(dateStr, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetOAScheduleResult', { empcode: user.EmpCode, date: dateStr })
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    /**
     * 获取某个部门下面的子部门或者人员
     * @param dept 部门ID或者部门名称，如果为null则查询本人所在部门下的所有子部门或人员
     * @param callback 请求回调
     */
    getDepartmentList(dept = null, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetDepartmentSubList', { empcode: user.EmpCode, depmsg: dept })
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    /**
     * 查询某个员工的详细信息
     * @param empID 员工ID
     * @param callback 
     */
    getEmpDetail(empID, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetOAEmployeeResult', { empcode: user.EmpCode, queryempcode: empID || user.EmpCode })
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    /**
     * 获取工作日志列表
     * @param callback 
     */
    getWorkLogs(callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetOADailyLogList', { empcode: user.EmpCode })
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    /**
     * 创建日志时获取编号
     * @param callback 
     */
    getWorkLogCode(callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetDailyLogCode', { empcode: user.EmpCode })
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    /**
     * 创建日志
     * @param params 日志数据 { dailylogcode: '', dailylogdate: '', dailylogcreatedate: '', dailylogcontent: '' }
     * @param callback 
     */
    createWorkLog(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            this.api.post('AddDailyLog', params)
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    /**
     * 获取日志详情
     * @param logCode 日志code
     * @param callback 
     */
    getWorkLogDetail(logCode, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetDailyLogModel', { empcode: user.EmpCode, dailylogcode: logCode })
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    /**
     * 编辑工作日志
     * @param params 日志数据 { dailylogcode: '', dailylogdate: '', dailylogcreatedate: '' }
     * @param callback 
     */
    updateWorkLog(params, callback) {
        this.users.currentUser().then(user => {
            params.empcode = user.EmpCode;
            this.api.post('UpdateDailyLog', params)
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    /**
     * 发送日志
     * @param logCode 日志code
     * @param callback 
     */
    sendWorkLog(logCode, callback) {
        this.users.currentUser().then(user => {
            this.api.post('SendDailyLog', { empcode: user.EmpCode, dailylogcode: logCode })
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    /**
     * 删除日志
     * @param logCode 日志code
     * @param callback 
     */
    deleteWorkLog(logCode, callback) {
        this.users.currentUser().then(user => {
            this.api.post('DeleteDailyLog', { empcode: user.EmpCode, dailylogcode: logCode })
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    AddCarRecord(lng,lat, callback) {
        this.users.currentUser().then(user => {
            this.api.post('AddCarRecord', { empcode: user.EmpCode, lng: lng, lat: lat })
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    GetSystemTime(showLoading: boolean, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetSystemTime', { empcode: user.EmpCode }, 
            '加载中...', 
            showLoading)
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    GetOACardRecordListResult(date, callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetOACardRecordListResult', { empcode: user.EmpCode, date: date })
                .then(data => {
                    console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

    ChangePassword(newpwd, oldpwd, callback) {
        this.users.currentUser().then(user => {
            this.api.post('ChangePassword', { empcode: user.EmpCode, newpwd: newpwd, oldpwd: oldpwd })
                .then(data => {
                    // console.log(data);
                    if (callback) {
                        callback(data, null);
                    }
                })
                .catch(error => {
                    // console.log(error);
                    if (callback) {
                        callback(null, error);
                    }
                });
        });
    }

}