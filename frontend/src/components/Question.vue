<template>
  <div class="pd-2 card" style="width: 18rem; min-height: 18rem">
    <div v-if="question_visible">
      {{question_info.text}}
      <div v-for="(answer, answer_index) in question_info.answers" v-bind:key="answer_index">
        <span class="badge badge-primary">{{answer.text}}</span>
      </div>
    </div>
    <div v-else
      class="alert"
      style="width: 100%; min-height: 18rem"
      id="popover-button-variant"
      @click.prevent="show_question()"
      v-bind:class="{
        'alert-success': question_info.complexity == state.state.complexities[0],
        'alert-warning': question_info.complexity == state.state.complexities[1],
        'alert-danger': question_info.complexity == state.state.complexities[2],
      }">
      <font-awesome-icon :icon="['fas', 'lock']" v-if="this.locked"/>
      <font-awesome-icon :icon="['fas', 'check']" v-if="question_info.answered"/>
    </div>
  </div>
</template>

<script>
import Bus from '../bus'
import { common_state_store } from '../shared'

export default {
  props: {
    question_info: { type: Object, required: true },
    question_index: { type: Number, required: true },
  },

  data: () => ({
    state: common_state_store,
    locked: false,
    question_visible: false,
  }),

  created() {
    Bus.$on('lock_questions', (question_index) => {if (this.question_index != question_index) this.locked = true})
    Bus.$on('unlock_questions', () => {this.locked = false})
  },

  methods: {
    show_question() {
      if (this.locked) return
      Bus.$emit("lock_questions", this.question_index)
      this.question_visible = true
    },
  },
}
</script>
