<template>
  <div>
    <div class="pd-2 card" style="width: 18rem; min-height: 18rem">
      <div
        class="alert"
        style="width: 100%; min-height: 18rem"
        v-bind:class="{
          'alert-success': question_info.complexity == state.state.complexities[0],
          'alert-warning': question_info.complexity == state.state.complexities[1],
          'alert-danger': question_info.complexity == state.state.complexities[2],
        }">
      </div>
      {{question_info}}
    </div>
  </div>
</template>

<script>
import { common_state_store } from '../shared'

export default {
  props: {
    question_info: { type: Object, required: true },
  },

  data: () => ({
    state: common_state_store,
  }),
}
</script>
