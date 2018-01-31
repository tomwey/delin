import { Component } from '@angular/core';
import { Input, Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from '@angular/core/src/event_emitter';

/**
 * Generated class for the CommFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'comm-form',
  templateUrl: 'comm-form.html'
})
export class CommFormComponent {

  /**
   * controls是一个控件对象数组，定义控件对象格式为：{ type: 1, name: '', value: '', defaultValue: '', required: true, placeholder: '', pattern: '' }
   */
  @Input('controls') controls: any = [];
  @Output('onControlSelect') onControlSelect = new EventEmitter();
  constructor() {

  }

  placeholderFromItem(item) {
    return item.placeholder || `输入${item.name}`;
  }

  selectItem(item) {
    this.onControlSelect.emit(item);
  }

}
