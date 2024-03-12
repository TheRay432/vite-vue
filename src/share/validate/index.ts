import type { GenericValidateFunction } from 'vee-validate';
import { ErrMsg } from '../class';

/** 驗證是否為空 */

export function getRequiredValidate(errMsg: string) {
  return (value: any) => {
    const val: string = value;
    console.log('check inputValue:', value);
    if (!val) {
      return errMsg;
    }
    return true;
  };
}
