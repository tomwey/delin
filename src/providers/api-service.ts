import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { GlobalData } from './GlobalData';
import { NativeService } from './NativeService';

// import CryptoJS from 'crypto-js';

/*
  Generated class for the ApiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
// 正式服务器和账号
const API_HOST: string = "http://139.129.167.27:8080/OAIService.svc";
const API_KEY:  string = "666AA4DF3533497D973D852004B975BC";

// 测试账号和测试服务器
// const API_HOST: string = "http://0.0.0.0:8888/api/v1";
// const API_KEY:  string = "1e3bb5a6e93148d7a6aa20ce181c1c46";

export const APP_VERSION = '3.5';

@Injectable()
export class ApiService {

  count: number = 0;//记录未完成的请求数量

  constructor(
    public http: Http,
    public globalData: GlobalData,
    public nativeService: NativeService,
  ) {
    // console.log('Hello ApiService Provider');
  }

  // 处理GET请求
  get(uri, params) {
    let url = API_HOST + '/' + uri;

    // 获取时间戳
    let i = new Date().getTime();

    // 组装参数
    let searchParams = new URLSearchParams();
    
    // 设置安全参数
    searchParams.set('i', i.toString());
    searchParams.set('ak', this.generateAccessKey(i));

    // 合并传进来的参数
    for (let param in params) {
      searchParams.set(param, params[param]);
    }

    // searchParams.set('av', this.nativeService.getAppVersion2());
    // searchParams.set('is_ios', this.nativeService.isIos() === true ? '1' : '0');

    // 参数签名
    searchParams.set('sign', ApiService.signParams(params));

    return this.http.get(url, new RequestOptions({ search: searchParams }))
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  } // end get 

  // 处理POST请求
  post(uri, params, loadingText: string = '加载中...'): Promise<any> {
    let url = API_HOST + '/' + uri;

    // 参数签名
    // params.sign = ApiService.signParams(params);

    // 组装参数
    // let i  = new Date().getTime();
    // let ak = this.generateAccessKey(i);

    // params.i  = i;
    // params.ak = ak; 

    // params.av = this.nativeService.getAppVersion2();
    // params.is_ios = this.nativeService.isIos() === true ? '1' : '0';
    this.showLoading(loadingText);

    // 封装请求
    let headers = new Headers({ 'Content-Type': 'application/text' });
    let requestOptions = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(url, this.encryptedParams(params), requestOptions)
        .toPromise()
        .then(resp => {
          // result = this.handleSuccess(resp);
          this.hideLoading();
          // resolve(this.handleSuccess(resp));

          let body = resp.json();
          // console.log(`result: ${JSON.stringify(body)}`);
          if (body.status == 101) {
            // if (body.total) {
            //   resolve({ total: body.total, data: body.Model });
            // } else {
            //   resolve(body.Model || {});
            // }
            resolve(body);
          } else {
            reject(body.resultdes);
          }

        })
        .catch(error => {
          this.hideLoading();
          let errorMsg = this.handleError(error);
          this.nativeService.showToast(errorMsg);
          reject(errorMsg);
        });
    });
  } // end post

  // 上传文件
  upload(uri, body: FormData) {
      let url = API_HOST + '/' + uri;

      // 组装参数
      let i  = new Date().getTime();
      let ak = this.generateAccessKey(i);

      body.append('i', i.toString());
      body.append('ak', ak);

      // let headers = new Headers({'Content-Type': 'multipart/form-data'});
      return this.http.post(url, body, null)
      .toPromise()
      .then((data) => {
        this.handleSuccess(data);
      })
      .catch(error => this.handleError(error));
  }

  // FormData提交
  post2(uri, body: FormData) {
    let url = API_HOST + '/' + uri;

      // 组装参数
      let i  = new Date().getTime();
      let ak = this.generateAccessKey(i);

      body.append('i', i.toString());
      body.append('ak', ak);

      // let headers = new Headers({'Content-Type': 'multipart/form-data'});
      return this.http.post(url, body, null)
        .toPromise()
        .then(this.handleSuccess)
        .catch(this.handleError);
  }

  // 生成MD5
  private generateAccessKey(i): string {
    return '';//Md5.hashStr(API_KEY + i.toString(), false).toString();
  } // end generate access key

  // 加密参数
  private encryptedParams(params): string {
    let keys = Object.keys(params).sort();
    // console.log(`keys:${keys}`);
    if ( keys.length == 0 ) return null;

    let arr = [];
    keys.forEach(key => {
      let value = params[key];
      arr.push(`${key}=${value}`);
    })
    let string = arr.join('&');
    return string;//encrypted.toLowerCase();
  }

  // 处理请求成功的回调
  private handleSuccess(resp: Response) {
    // this.hideLoading();
    // console.log(this);
    let body = resp.json();
    console.log(`result: ${JSON.stringify(body)}`);
    if (body.status == 101) {
      if (body.total) {
        return { total: body.total, data: body.Model };
      }
      return body.Model || {};
    } else {
      // this.nativeService.alert(body.resultdes || '请求失败,请稍后再试!');
      return Promise.reject(body.resultdes);
    }
  } // end handle success

  static signParams(params: any): string {
    if (!params) return null;
    // console.log(params);
    let signStr = '';
    let keys = Object.keys(params).sort();
    // console.log(`keys:${keys}`);
    if ( keys.length == 0 ) return null;

    keys.forEach(key => {
      let value = params[key];
      // console.log(value + ':' + JSON.stringify(value));
      signStr += value + ':';
    })

    signStr += API_KEY;

    return '';//Md5.hashStr(signStr, false).toString();
  }

  // 处理请求失败的回调
  private handleError(error: Response | any) {
    let errMsg: string;
    if ( error instanceof Response ) {
      const body = error.json() || '';
      const err  = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return errMsg;
  } // end handle error 

  private showLoading(loadingText) {
    // console.log('show loading: ' + this.count);
    if (++this.count === 1) {//一旦有请求就弹出loading
      this.globalData.showLoading && this.nativeService.showLoading(loadingText);
    }
  }

  private hideLoading() {
    // console.log('hide loading: ' + this.count);

    if (--this.count === 0) {//当正在请求数为0,关闭loading
      this.nativeService.hideLoading();
      this.globalData.showLoading = true;

      // this.count = 0;
    }
  }

}
