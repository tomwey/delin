import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, 
    private modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAgencyPage');
  }

  deleteTask(task) {
    let index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  selectMan() {
    
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

}
