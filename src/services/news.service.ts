import {Injectable } from "@angular/core";
import { ApiService } from "../providers/api-service";
import { UserService } from "./user-service";

@Injectable()
export class NewsService {
    constructor(
        private api: ApiService, 
        private users: UserService) {}

    /**
     * 获取新闻大类别
     */
    getNewsCatalogs() {
        return new Promise((resolve, reject) => {
            this.users.currentUser().then(user => {
                let empCode = user.EmpCode;
                this.api.post('GetColumnList', { empcode: empCode, productid: 'OA' }, '加载中...')
                    .then(data => resolve(data.DataList))
                    .catch(error => reject(error));
            });
        });
    }

    /**
     * 获取新闻列表
     */
    getNewsList(columnID = 'OA01') {
        return new Promise((resolve, reject) => {
            this.users.currentUser().then(user => {
                let empCode = user.EmpCode;
                this.api.post('GetContentList', { empcode: empCode, columnid: columnID }, '加载中...')
                    .then(data => resolve(data))
                    .catch(error => reject(error));
            });
        });
    }

    /**
     * 获取新闻详情
     */
    getNewsDetail(newsID, callback) {
        return new Promise((resolve, reject) => {
            this.users.currentUser().then(user => {
                let empCode = user.EmpCode;
                this.api.post('GetContentDetail', { empcode: empCode, contentid: newsID }, '加载中...')
                    .then(data => {
                        if (callback) {
                            callback(data, null)
                        }
                    })
                    .catch(error => {
                        if (callback) {
                            callback(null, error);
                        }
                    });
            });
        });
    }

    /**
     * 获取首页Banner
     * @param productID 产品ID
     * @param callback 
     */
    getBanners(productID = 'OA', callback) {
        this.users.currentUser().then(user => {
            this.api.post('GetCPRecommendListResult', { empcode: user.EmpCode, productid: productID })
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