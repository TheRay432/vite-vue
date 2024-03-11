import { ErrMsg } from '../class';

/** 驗證是否為空 */
export function getRequiredValidate(errMsg: string, inputValue: string) {
  return () => {
    console.log('check inputValue:', inputValue);
    if (!inputValue) {
      return new ErrMsg(errMsg);
    }
    return null;
  };
}
