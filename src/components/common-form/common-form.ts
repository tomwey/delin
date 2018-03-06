import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CommonFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'common-form',
  templateUrl: 'common-form.html'
})
export class CommonFormComponent {

  /**
   * controls是一个控件对象数组，定义控件对象格式为：{ type: 1, name: '', value: '', defaultValue: '', required: true, placeholder: '', pattern: '' }
   */
  @Input() controls: any = [];
  @Output() onControlSelect: EventEmitter<any> = new EventEmitter();

  constructor() {
    
  }

  placeholderFromItem(item): string {
    return item.placeholder || `输入${item.name}`;
  }

  selectValueFromItem(item): string {
    if (!item.value) {
      return `请选择 (${item.type == 6 ? '多选' : '单选'})`;
    } else {
      let val = item.value.label || item.value;
      if (!val) return null;
      
      return val.split('|')[0];
    }
  }

  selectItem(item) {
    this.onControlSelect.emit(item);
  }

}
