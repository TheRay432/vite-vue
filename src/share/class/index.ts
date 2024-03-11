/** 驗證失敗訊息類別 */
export class ErrMsg {
  /** 驗證失敗欄位 */
  isError = true;
  /** 失敗訊息 */
  errMsg = '';

  constructor(errMsg: string) {
    this.errMsg = errMsg;
  }
}
