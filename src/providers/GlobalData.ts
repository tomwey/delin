/**
 * Created by tomwey on 2018/1/16.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalData {
    // 设置http请求是否显示loading,注意：设置为true,接下来的请求会不显示loading,请求执行完成会自动设置为false
    private _showLoading: boolean = true;

    get showLoading(): boolean {
        return this._showLoading;
    }

    set showLoading(value: boolean) {
        this._showLoading = value;
    }
}