<script setup lang="ts">
import { InputLength, InputType } from '@/share/enum';
import type { BaseInputProps } from '@/share/interface';
import { useValidateStore } from '@/stores/validate';

const props = withDefaults(defineProps<BaseInputProps>(), {
  /** input長度 */
  inputLength: InputLength.Normal,
  /** 預設顯示文字 */
  placeholder: '請輸入欄位',
  /** input類型 */
  inputType: InputType.Text,
});
const model = defineModel<string>();
/** 是否錯誤 */
const isError = ref(false);
/** 錯誤訊息 */
const errMsg = ref<string | undefined>('');
const store = useValidateStore();
/** 離開焦點事件 */
function handleBlur(): void {
  console.log(123);

  props.rules && props.rules.length ? doValidate() : '';
}
/** 執行驗證 */
function doValidate(): void {
  props.rules?.forEach((rule) => {
    const ruleErrMsg = rule()?.errMsg;
    if (errMsg) {
      isError.value = true;
      errMsg.value = ruleErrMsg;
    }
  });
}
watch(
  () => store.isValidate,
  () => {
    if (store.isValidate) {
      doValidate();
    }
    isError.value ? store.setError() : '';
  }
);
</script>

<template>
  <div class="flex flex-col">
    <input
      class="px-4 py-2 rounded-md border border-gray-300 outline-none focus:ring-blue-500 focus:border-blue-300 relative"
      :class="{
        small: inputLength === InputLength.Small,
        normal: inputLength === InputLength.Normal,
        large: inputLength === InputLength.Large,
      }"
      :type="inputType"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      v-model="model"
      autocomplete="off"
      @blur="handleBlur"
    />
    <BaseErrMsg :err-msg="errMsg" :is-error="isError" />
  </div>
</template>

<style scoped>
.small {
  @apply w-32;
}
.normal {
  @apply w-64;
}
.large {
  @apply w-96;
}
</style>
