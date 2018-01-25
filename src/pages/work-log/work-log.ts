import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ActionSheetController } from 'ionic-angular';
import { OAService } from '../../services/oa.service';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { NativeService } from '../../providers/NativeService';

/**
 * Generated class for the WorkLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-log',
  templateUrl: 'work-log.html',
})
export class WorkLogPage {

  dataList: any = [];
  needShowErrorEmptyBox: boolean = false;
  errorEmptyMsg: string = '暂无日志';

  constructor(public navCtrl: NavController, 
    private actionSheetCtrl: ActionSheetController,
    private app: App,
    private oa: OAService,
    private modalCtrl: ModalController,
    private nativeService: NativeService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad WorkLogPage');
    this.loadData();
  }

  loadData() {
    this.needShowErrorEmptyBox = false;

    this.oa.getWorkLogs((data, error) => {
      if (data && data.DataList) {
        this.dataList = data.DataList;
      } else {
        this.dataList = [];
      }
      // console.log(this.dataList);

      this.needShowErrorEmptyBox = this.dataList.length === 0;
      if (error) {
        this.errorEmptyMsg = error.message || error;
      } else {
        if (this.dataList.length === 0) {
          this.errorEmptyMsg = '暂无日志';
        }
      }
    });
  }

  openItem(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '发送',
          handler: () => {
            // console.log('Destructive clicked');
            this.sendLog(item);
          }
        },{
          text: '查看',
          handler: () => {
            // console.log('Archive clicked');
            this.viewLog(item);
          }
        },
        {
          text: '编辑',
          handler: () => {
            // console.log('Destructive clicked');
            this.editLog(item);
          }
        },{
          text: '删除',
          role: 'destructive',
          handler: () => {
            // console.log('Archive clicked');
            this.deleteLog(item);
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    }).present();
  }

  sendLog(item) {
    this.oa.sendWorkLog(item.DailyLogCode, (data, error) => {
      if (error) {
        this.nativeService.showToast(error.message || error);
      } else {
        this.nativeService.showToast('日志发送成功');

        this.loadData();
      }
    });
  }

  viewLog(item) {
    this.oa.getWorkLogDetail(item.DailyLogCode, (data, error) => {
      if (error) {
        this.nativeService.showToast(error.message || error);
      } else {
        // let arr = data.Model;
        // console.log(data);
        let temp = [];
        if (data.Model) {
          temp.push({ label: '日志编号', value: data.Model.DailyLogCode });
          temp.push({ label: '创建人', value: data.Model.EmpName });
          temp.push({ label: '创建日期', value: data.Model.DailyLogCreateDateStr });
          temp.push({ label: '日志时间', value: data.Model.DailyLogDateStr });
          temp.push({ label: '日志内容', value: data.Model.DailyLogContent });
        }
        
        if (temp.length > 0) {
          this.app.getRootNavs()[0].push('ItemDetailPage', { title: '日志详情', data: temp });
        } else {
          this.nativeService.showToast('日志详情数据为空');
        }
        
      }
    })

  }

  newLog() {
    // this.app.getRootNavs()[0].push('WorkLogFormPage');
    this.openForm(null);
  }

  editLog(log) {
    // this.app.getRootNavs()[0].push('WorkLogFormPage', { log: { time: '2018-01-02', content: 'test' } });
    this.openForm(log);
  }

  openForm(log) {
    let item;
    if (log) {
      item = {
        ID: log.DailyLogCode,
        create_time: log.DailyLogCreateDateStr,
        time: log.DailyLogDateStr,
        content: log.DailyLogContent,
        author: log.EmpName,
      };
    } else {
      item = null;
    }
    
    let modal = this.modalCtrl.create('WorkLogFormPage', {log: item});
    modal.onDidDismiss((data) => {
      if (data) {
        this.loadData();
      }
    });
    modal.present();
  }

  deleteLog(item) {
    this.oa.deleteWorkLog(item.DailyLogCode, (data, error) => {
      if (error) {
        this.nativeService.showToast(error.message || error);
      } else {
        this.nativeService.showToast('日志删除成功');

        this.loadData();
      }
    });
  }

  logStateDesc(state) {
    if (state == 1) {
      return '未发送';
    } else if (state == 2) {
      return '审核中';
    } else if (state == 3) {
      return '已通过';
    } else if (state == 4) {
      return '未通过';
    } else {
      return '';
    }
  }
}
