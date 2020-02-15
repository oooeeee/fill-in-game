<template>
  <div class="main-app">
    Hello world in-app!
  </div>
</template>

<script>
import Bus from './bus'
import { common_state_store } from './shared'

export default {
  name: 'app',

  data: () => ({
    common_store: common_state_store,
  }),

  created() {
    Bus.$on('update_street', (street, need_clean) => this.get_street(street, need_clean))
  },

}
</script>
