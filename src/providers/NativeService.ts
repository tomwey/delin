/**
 * Created by tomwey on 2018/1/16.
 */
import {Injectable} from "@angular/core";
import { ToastController, LoadingController, Platform, Loading, AlertController } from 'ionic-angular';
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {Toast} from "@ionic-native/toast";
import {Network} from "@ionic-native/network";
import {CallNumber} from "@ionic-native/call-number";
import { Diagnostic } from '@ionic-native/diagnostic';

import { Storage } from '@ionic/storage';

declare var LocationPlugin;

@Injectable()
export class NativeService {
    private loading: Loading;

    private isShowLocationAlert: boolean = false;

    constructor(
        private platform: Platform,
        private toastCtrl: ToastController,
        private alertCtrl: AlertController,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen,
        private toast: Toast,
        private network: Network,
        private cn: CallNumber,
        private diagnostic: Diagnostic,
        private storage: Storage,
        private loadingCtrl: LoadingController
    ) {}

    /**
     * 状态栏
     */
    statusBarStyle(): void {
        if (this.isMobile()) {
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#488aff');//3261b3
        }
    }

    /**
     * 隐藏启动页面
     */
    splashScreenHide(): void {
        this.isMobile() && this.splashScreen.hide();
    }

    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    getNetworkType(): string {
        if (!this.isMobile()) {
        return 'wifi';
        }
        return this.network.type;
    }

    /**
     * 判断是否有网络
     */
    isConnecting(): boolean {
        return this.getNetworkType() != 'none';
    }

    /**
     * 获得用户当前坐标
     * @return {Promise<T>}
     */
    getUserLocation(checkAuth: boolean = false): Promise<any> {
        return new Promise((resolve, reject) => {
          if (this.isMobile()) {
            this.diagnostic.isLocationAvailable().then(() => {
              this.diagnostic.isLocationEnabled().then(res => {
                if (res) { // 已经开启了手机的定位服务
                  // 获取授权
                  this.diagnostic.isLocationAuthorized().then(auth => {
                    // alert('auth: ' + auth.toString());
                    if (auth) { // 已经授权，直接获取位置
                      this.getLocation(checkAuth).then(data => resolve(data))
                        .catch(error => reject(error));
                    } else { // 请求授权
                      this._requestLocationAuth(checkAuth).then(() => {
                        // 授权成功
                        this.getLocation(checkAuth).then(data => resolve(data))
                          .catch(error => reject(error));
                      }).catch(error => reject(error));
                    }
                  }).catch(error => reject(error));
                } else {
                  reject('未开启手机定位服务');
                }
              }).catch(error => reject('检查定位是否打开出错'));
            }).catch(error => reject('设备不支持定位功能'));
          } else {
            console.log('非手机环境,即测试环境返回固定坐标');
            resolve({lng: 104.350912, lat: 30.670543});
          }
        });
      }

      private _requestLocationAuth(checkAuth): Promise<any> {
        return new Promise((resolve, reject) => {
          this.diagnostic.getLocationAuthorizationStatus()
            .then(r => {
              if (r === 'not_determined' || r === 'NOT_REQUESTED') {
              // 请求授权
                let mode = this.isIos() ? 'when_in_use': 'always';
                this.diagnostic.requestLocationAuthorization(mode)
                  .then(resp => {
                  // alert(resp);
    
                    if (resp == 'DENIED_ALWAYS' || resp === 'denied' || resp === 'DENIED') {//拒绝访问状态,必须手动开启
                  // observer.next(false);
                      reject('未开启定位');
                      this._showAlertOpenLocationSettings(true);
                    } else {
                      // 授权成功，去获取位置
                      resolve(true);
                    }
                }).catch(error => reject(error));
              } else if ( r === 'denied' || r === 'DENIED_ALWAYS' ||  r === 'DENIED') {
                reject('未开启定位');
                if (this.isIos()) {
                  this._showAlertOpenLocationSettings(checkAuth);
                } else {
                  this.storage.get('auth.requested').then(data => {
                    if (!data) {
                        this.diagnostic.requestLocationAuthorization('always')
                        .then(resp => {
                        // alert(resp);
                        this.storage.set('auth.requested', '1');
    
                        if (resp == 'DENIED_ALWAYS' || resp === 'denied' || resp === 'DENIED') {//拒绝访问状态,必须手动开启
                      // observer.next(false);
                          reject('未开启定位');
                          this._showAlertOpenLocationSettings(true);
                        } else {
                          // 授权成功，去获取位置
                          resolve(true);
                        }
                      }).catch(error => reject(error));
                    } else {
                      this._showAlertOpenLocationSettings(checkAuth);
                    }
                  }).catch(error => reject(error));
                }
              } else {
                resolve(true);
              }
    
            })
            .catch(error => reject(error));
        });
      }

      private _showAlertOpenLocationSettings(checkAuth) {
        if (!checkAuth) return;
        
        if (this.isShowLocationAlert) return;
        
        this.isShowLocationAlert = true;
    
        this.alertCtrl.create({
          title: '缺少定位权限',
          subTitle: '请在手机设置或app权限管理中开启',
          enableBackdropDismiss: false,
          buttons: [{text: '取消', handler: () => {
            this.isShowLocationAlert = false;
          }},
            {
              text: '去开启',
              handler: () => {
                this.isShowLocationAlert = false;
                this.diagnostic.switchToSettings();
              }
            }
          ]
        }).present();
      }
    
      private getLocation(checkAuth): Promise<any> {
        return new Promise((resolve, reject) => {
          LocationPlugin.getLocation(data => {
            // observer.next({'lng': data.longitude, 'lat': data.latitude});
            resolve({lng: data.longitude, lat: data.latitude});
          }, msg => {
            reject('获取位置失败');
            if (msg.indexOf('缺少定位权限') != -1) {
              // this.alertCtrl.create({
              //   title: '缺少定位权限',
              //   subTitle: '请在手机设置或app权限管理中开启',
              //   buttons: [{text: '取消'},
              //     {
              //       text: '去开启',
              //       handler: () => {
              //         this.diagnostic.switchToSettings();
              //       }
              //     }
              //   ]
              // }).present();
              this._showAlertOpenLocationSettings(checkAuth);
    
            } else if (msg.indexOf('WIFI信息不足') != -1) {
              // alert('定位失败,请确保连上WIFI或者关掉WIFI只开流量数据')
              alert('定位失败,请确保连上WIFI或者关掉WIFI只开流量数据');
            } else if (msg.indexOf('网络连接异常') != -1) {
              alert('网络连接异常,请检查您的网络是否畅通')
            } else {
              alert('位置错误,错误消息:' + msg);
              // this.logger.log(msg, '获取位置失败');
            }
          });
        });
      }

    /**
     * 是否真机环境
     */
    isMobile(): boolean {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    }

    /**
     * 是否android真机环境
     */
    isAndroid(): boolean {
        return this.isMobile() && this.platform.is('android');
    }

    /**
     * 是否ios真机环境
     */
    isIos(): boolean {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    }

    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    showToast(message: string = '操作完成', duration: number = 2000): void {
        if (this.isMobile()) {
        this.toast.show(message, String(duration), 'center').subscribe();
        } else {
        this.toastCtrl.create({
            message: message,
            duration: duration,
            position: 'middle',
            showCloseButton: false
        }).present();
        }
    };

    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    showLoading(content: string = ''): void {
        if (!this.loading) {//如果loading已经存在则不再打开
        let loading = this.loadingCtrl.create({
            content: content
        });
        loading.present();
        this.loading = loading;
        }
    };

    /**
     * 关闭loading
     */
    hideLoading(): void {
        setTimeout(() => {//延迟200毫秒可以避免嵌套请求loading重复打开和关闭
        this.loading && this.loading.dismiss();
        this.loading = null;
        }, 200);
    };

    /**
     * 拨打电话
     * @param number
     */
    callNumber(number: string): void {
        this.cn.callNumber(number, true)
        .then(() => console.log('成功拨打电话:' + number))
        .catch(err => this.alert('拨打电话失败'));
    }

    /**
     * 只有一个确定按钮的弹出框.
     * 如果已经打开则不再打开
     */
    alert = (() => {
        let isExist = false;
        return (title: string, subTitle: string = '', message: string = '', callBackFun = null): void => {
        if (!isExist) {
            isExist = true;
            this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            message: message,
            buttons: [{
                text: '确定', handler: () => {
                isExist = false;
                callBackFun && callBackFun();
                }
            }],
            enableBackdropDismiss: false
            }).present();
        }
        };
    })();
}