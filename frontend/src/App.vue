<template>
  <div class="main-app">
    Hello world in-app!
    <div class="d-flex flex-wrap">
      <Question v-for="(question, index) in state.state.questions" v-bind:key="index" :question_info="question" />
    </div>
  </div>
</template>

<script>
import Bus from './bus'
import { common_state_store } from './shared'
import Question from './components/Question'

export default {
  name: 'app',
  components: {
    Question,
  },
  data: () => ({
    state: common_state_store,
  }),

  created() {
    Bus.$on('update_street', (street, need_clean) => this.get_street(street, need_clean))
  },

}
</script>
