import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { OAService } from '../../services/oa.service';
import { NativeService } from '../../providers/NativeService';
import { App } from 'ionic-angular/components/app/app';
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the NewAgencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-agency',
  templateUrl: 'new-agency.html',
})
export class NewAgencyPage {
  tasks: any = [];
  agency: any = { user: null, startDate: new Date(), endDate: new Date(), events: [] }
  
  selectedItem: any = [];

  constructor(public navCtrl: NavController, 
    private modalCtrl: ModalController,
    private oa: OAService,
    private app: App,
    private events: Events,
    private nativeService: NativeService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewAgencyPage');
  }

  deleteTask(task) {
    let index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  selectMan() {
    let modal = this.modalCtrl.create('ManSearchPage', { selectedItems: this.selectedItem });
    modal.onDidDismiss((data) => {
      if (data) {
        this.selectedItem = data;
        this.fillAgencyEmp(data);
      }
    });
    modal.present();
  }

  fillAgencyEmp(data) {
    let names = [];
    let ids   = [];
    data.forEach(element => {
      names.push(element.ObjName);
      ids.push(element.ObjID);
    });

    this.agency.user = {
      EmpNames: names.join(','),
      EmpIDs: ids.join(',')
    };
  }

  openCatalog() {
    let modal = this.modalCtrl.create('CatalogPage', this.tasks);
    modal.onDidDismiss((data) => {
      if (data && data.length > 0) {
        // data.forEach(element => {
        //   this.tasks.push(element.name);
        // });
        this.tasks = data;
      }
    });
    modal.present();
  }

  commit() {
    let formlist = [];
    this.tasks.forEach(element => {
      formlist.push(element.FormID);
    });

    this.oa.addDelegate({ EmpCode: this.agency.user.EmpIDs, 
                          startDate: this.agency.startDate, 
                          endDate: this.agency.endDate, 
                          formlist: formlist.join('|') }, (data, error) => {
      // console.log(data);
      // console.log('1111111');
      // console.log(error);
      if (error) {
        this.nativeService.showToast(error.message || error);
      } else {
        this.nativeService.showToast('提交成功！');
        this.events.publish('agency:sent');
        this.app.getRootNavs()[0].pop();
      }
    });
  }

}
