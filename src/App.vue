<script setup lang="ts">
import { getRequiredValidate } from './share/validate';
const test = ref(456);
/** 輸入值 */
const inputValue = ref('');
const testFunc = () => {
  console.log('check submit', inputValue.value);
};
</script>

<template>
  <BaseForm @submit-event="testFunc">
    <BaseInput
      :name="'nickname'"
      :rules="getRequiredValidate($t('aaa'))"
      :placeholder="'請輸入暱稱'"
      v-model="inputValue"
    />
    <button>送出</button>
  </BaseForm>
</template>

<style scoped></style>
