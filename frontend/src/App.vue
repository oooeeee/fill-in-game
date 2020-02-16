<template>
  <div class="main-app">
    <TeamHeader/>
    <div class="d-flex flex-wrap" v-if="state.state.active_team">
      <Question v-for="(question, index) in state.state.questions" v-bind:key="index" :question_info="question" :question_index="index"/>
    </div>
  </div>
</template>

<script>
import { common_state_store } from './shared'
import Question from './components/Question'
import TeamHeader from './components/TeamHeader'

export default {
  name: 'app',
  components: {
    Question,
    TeamHeader,
  },
  data: () => ({
    state: common_state_store,
  }),
}
</script>
