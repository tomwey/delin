import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { HomePage } from '../home/home';
// import { UserService } from '../../services/user.service';
import { NativeService } from '../../providers/NativeService';
import { UserService } from '../../services/user-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  emp: any = {
    loginname: 'A1.827',
    pwd: '123321',
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private users: UserService,
    private nativeService: NativeService,
    private app: App,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    if (!this.emp.loginname) {
      this.nativeService.showToast('登录名不能为空');
      return;
    }

    console.log(this.emp);

    this.users.login(this.emp.loginname, this.emp.pwd)
      .then(data => {
        this.nativeService.showToast('登录成功');
        this.app.getRootNavs()[0].setRoot(HomePage);
      })
      .catch(error => {
        this.nativeService.showToast(error.message || error);
      });
  }

}
