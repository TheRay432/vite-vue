<script setup lang="ts">
import { getRequiredValidate } from './share/validate';
/** 輸入值 */
const inputValue = ref('');
const testFunc = () => {
  console.log('check submit', inputValue.value);
};
</script>

<template>
  <BaseForm @submit-event="testFunc">
    <div class="flex items-baseline">
      <BaseInput
      :name="'nickname'"
      :rules="getRequiredValidate($t('aaa'))"
      :placeholder="'請輸入暱稱'"
      v-model="inputValue"
    />
    <button>送出</button>
    </div>
  </BaseForm>
</template>

<style scoped></style>
