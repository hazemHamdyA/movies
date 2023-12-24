<script setup lang="ts">
import { TabsTrigger, type TabsTriggerProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<TabsTriggerProps & { class?: string }>();

// 'inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-black transition-all
//  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
// data-[state=active]:bg-black data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300
// dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-black-50',
</script>

<template>
  <TabsTrigger v-bind="props" :class="cn(props.class)">
    <slot />
  </TabsTrigger>
</template>
