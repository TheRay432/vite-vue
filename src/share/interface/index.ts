import { ErrMsg } from '../class';
import { InputLength, InputType } from '../enum';

/** BaseInput元件-props */
export interface BaseInputProps {
  /** input長度 */
  inputLength?: InputLength;
  /** input類型 */
  inputType?: InputType;
  /** 欄位名稱 */
  name: string;
  /** 預設顯示文字 */
  placeholder?: string;
  /** 驗證規則 */
  rules?: (() => ErrMsg | null)[];
}

/** BaseErrMsg元件-props */
export interface BaseErrMsgProps {
  /** 是否錯誤 */
  isError: boolean;
  /** 錯誤訊息 */
  errMsg: string | undefined;
}
