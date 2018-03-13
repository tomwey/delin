import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeService } from '../../providers/NativeService';
import { OAService } from '../../services/oa.service';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  account: any = { old_password: '', new_password: '', new_password2: '' };
  constructor(public navCtrl: NavController, 
    private nativeService: NativeService,
    private oa: OAService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PasswordPage');
  }

  commit() {
    if (!this.account.old_password) {
      this.nativeService.showToast('旧密码不能为空');
      return;
    }

    if (!this.account.new_password || this.account.new_password.length < 6) {
      this.nativeService.showToast('新密码至少为6位');
      return;
    }

    if (this.account.new_password != this.account.new_password2) {
      this.nativeService.showToast('两次输入密码不一致');
      return;
    }

    this.oa.ChangePassword(this.account.new_password, this.account.old_password, (data, error) => {
      if (error) {
        this.nativeService.showToast(error.message || error);
      } else {
        this.nativeService.showToast("密码修改成功！");
        this.navCtrl.pop();
      }
    });

  }

}
