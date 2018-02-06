import { Component, Input } from '@angular/core';

/**
 * Generated class for the ErrorEmptyMessageBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'error-empty-message-box',
  templateUrl: 'error-empty-message-box.html'
})
export class ErrorEmptyMessageBoxComponent {

  @Input() needShow: boolean = false;
  // @Input() data: any[] = [];
  // @Input() error: Error = null;
  private _data: any[];
  private _error: any;

  @Input() emptyMessage: string = '暂无数据';
  message: string;

  constructor() {
  }

  @Input()
  set data(data: any[]) {
    this._data = data;
    this._handleMessage();
  }

  @Input()
  set error(error: Error) {
    this._error = error;
    this._handleMessage();
  }

  private _handleMessage() {
    if (this._error) {
      this.needShow = true;
      this.message = this._error.message || this._error;
    } else {
      if (this._data && this._data.length > 0) {
        this.needShow = false;
        this.message = '';
      } else {
        this.needShow = true;
        this.message = this.emptyMessage || '暂无数据';
      }
    }
  }

}
