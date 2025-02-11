<template>
  <div class="w-9/12 bg-red-700 min-w-min pr-4 pt-5">
    <AddNewCustomer />
  </div>
</template>

<script>
import AddNewCustomer from '@/components/AddNewCustomer.vue'
export default {
  name: 'MainBody',
  components: {
    AddNewCustomer
  }
}
</script>
