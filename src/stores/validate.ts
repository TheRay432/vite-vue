import { defineStore } from 'pinia';

export const useValidateStore = defineStore('validate', () => {
  const isValidate = ref(false);
  const isError = ref(false);

  function setValidate(): void {
    isValidate.value = true;
  }
  function resetValidate(): void {
    isValidate.value = false;
  }
  function setError(): void {
    isError.value = true;
  }
  function resetError(): void {
    isError.value = false;
  }

  return { isValidate, setValidate, resetValidate, isError, setError, resetError };
});
