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

declare var LocationPlugin;

@Injectable()
export class NativeService {
    private loading: Loading;

    constructor(
        private platform: Platform,
        private toastCtrl: ToastController,
        private alertCtrl: AlertController,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen,
        private toast: Toast,
        private network: Network,
        private cn: CallNumber,
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
    getUserLocation() {
        return new Promise((resolve, reject) => {
            if (this.isMobile()) {
                LocationPlugin.getLocation(data => {
                    resolve({'lng': data.longitude, 'lat': data.latitude});
                    }, msg => {
                console.error('定位错误消息' + msg);
                    alert(msg.indexOf('缺少定位权限') == -1 ? ('错误消息：' + msg) : '缺少定位权限，请在手机设置中开启');
                    reject('定位失败');
                });
            } else {
                console.log('非手机环境,即测试环境返回固定坐标');
                resolve({'lng': 113.350912, 'lat': 23.119495});
            }});
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