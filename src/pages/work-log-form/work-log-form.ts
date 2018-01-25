import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OAService } from '../../services/oa.service';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NativeService } from '../../providers/NativeService';
import { UserService } from '../../services/user-service';

/**
 * Generated class for the WorkLogFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-log-form',
  templateUrl: 'work-log-form.html',
})
export class WorkLogFormPage {

  title: string = null;
  log: any = {
    ID: '',
    create_time: '',
    time: '',
    content: '',
    author: '',
  };
  constructor(
    public navCtrl: NavController, 
    private oa: OAService,
    private users: UserService,
    private viewCtrl: ViewController,
    private nativeServ: NativeService,
    public navParams: NavParams
  ) {
    if (this.navParams.data && this.navParams.data.log) {
      this.title = '编辑日志';
      this.log = this.navParams.data.log;

      this.users.currentUser().then(user => {
        this.log.author = user.EmpName;
      })
      // this.log.time = this.navParams.data.log.time;
      // this.log.content = this.navParams.data.log.content;
    } else {
      this.title = '新建日志';

      this.loadLogCode();
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad WorkLogFormPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  loadLogCode() {
    this.oa.getWorkLogCode((data, error) => {
      // console.log(data);
      this.log.ID          = data.OADailyLogCode;
      this.log.create_time = data.CreateDate;
      this.log.author      = data.EmpName;
    });
  }

  save() {

    

      if (this.navParams.data && this.navParams.data.log) {
        let params = { dailylogcode: this.log.ID, 
          dailylogdate: this.log.time, 
          // dailylogcreatedate: this.log.create_time, 
          dailylogcontent: this.log.content };

        this.oa.updateWorkLog(params, (data, error) => {
          // console.log(data);
          // console.log(error);
          if (error) {
            this.nativeServ.showToast(error.message || error);
          } else {
            this.viewCtrl.dismiss(1);
          }
        });
      } else {
        let params = { dailylogcode: this.log.ID, 
          dailylogdate: this.log.time, 
          dailylogcreatedate: this.log.create_time, 
          dailylogcontent: this.log.content };

        this.oa.createWorkLog(params, (data, error) => {
          // console.log(data);
          // console.log(error);
          if (error) {
            this.nativeServ.showToast(error.message || error);
          } else {
            this.viewCtrl.dismiss(1);
          }
        });
      }
  }

}
