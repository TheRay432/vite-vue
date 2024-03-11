<script setup lang="ts">
import { getRequiredValidate } from './share/validate';
import { useValidateStore } from './stores/validate';
/** 輸入值 */
const inputValue = ref('');
const inputValue2 = ref('');
const name = ref('');
const test = ref(null);
const arr = computed(() => [getRequiredValidate('test123123', inputValue.value)]);
const arr2 = computed(() => [getRequiredValidate('test123123', inputValue2.value)]);
const store = useValidateStore();
function testFunc(): void {
  store.setValidate();
  if (store.isError) return;
  console.log('成功');
}
</script>

<template>
  <BaseForm>
    <div class="flex items-baseline">
      <BaseInput :name="'nickname'" :rules="arr" :placeholder="'請輸入暱稱'" v-model="inputValue" />
      <BaseInput
        :name="'nickname2'"
        :rules="arr2"
        :placeholder="'請輸入暱稱'"
        v-model="inputValue2"
      />
      <button @click="testFunc">送出</button>
    </div>
  </BaseForm>

  名稱:{{ name }}
</template>

<style scoped></style>
