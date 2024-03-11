<script setup lang="ts">
import type { BaseErrMsgProps } from '@/share/interface';

const props = defineProps<BaseErrMsgProps>();
</script>
<template>
  <div v-if="isError">{{ errMsg }}</div>
</template>
