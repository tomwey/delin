import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeService } from '../../providers/NativeService';
import { OAService } from '../../services/oa.service';
import { Utils } from '../../providers/Utils';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the NewSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-schedule',
  templateUrl: 'new-schedule.html',
})
export class NewSchedulePage {

  formData: any = {
    topic: '',
    time: Utils.dateFormat(new Date(), 'yyyy-MM-ddTHH:mm:ss+08:00'),
    content: '',
  };
  constructor(
    public navCtrl: NavController,
    private nativeServ: NativeService,
    private oa: OAService,
    private viewCtrl: ViewController,
    public navParams: NavParams) {

      if (this.navParams.data.item) {
        this.formData.topic = this.navParams.data.item.ScheduleTopic;
        this.formData.time  = this.navParams.data.item.ScheduleTime;
        this.formData.content = this.navParams.data.item.ScheduleContent;
      }

      console.log(this.formData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewSchedulePage');
  }

  commit() {
    if (!this.formData.topic) {
      this.nativeServ.showToast('主题不能为空');
      return;
    }

    this.oa.addSchedule(this.formData, (data, error) => {
      this.viewCtrl.dismiss(1);
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
