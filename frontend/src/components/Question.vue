<template>
  <div class="pd-2 card" style="width: 18rem; min-height: 18rem">
    <div v-if="question_visible || state.state.game_finished">
      {{question_info.text}}
      <div v-if="state.state.game_finished">
        <b-alert show>Отвечала команда {{question_info.answer.team}}</b-alert>
        <span
          v-bind:class="{
            'badge': true,
            'badge-success': (answer.right),
            'badge-danger': (!answer.right && answer_index == question_info.answer.answer_index),
            'badge-secondary': (!answer.right && answer_index != question_info.answer.answer_index),
          }"
          v-for="(answer, answer_index) in question_info.answers"
          v-bind:key="answer_index"
        >
          {{answer.text}}
        </span>
      </div>
      <div v-else>
        <b-button
          variant="primary"
          v-for="(answer, answer_index) in question_info.answers"
          v-bind:key="answer_index"
          @click.prevent="set_answer(question_index, answer_index)"
        >
          {{answer.text}}
        </b-button>
      </div>
    </div>
    <div v-else
      class="alert"
      id="popover-button-variant"
      @click.prevent="show_question()"
      v-bind:style="{
        'background-image': question_info.img?'url('+question_info.img+')':false,
        'width': '100%',
        'min-height': '18rem',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
      }"
      v-bind:class="{
        'alert-success': question_info.complexity == state.state.complexities[0],
        'alert-warning': question_info.complexity == state.state.complexities[1],
        'alert-danger': question_info.complexity == state.state.complexities[2],
      }">
      <font-awesome-icon :icon="['fas', 'smile']"    v-if="question_info.complexity==state.state.complexities[0]"/>
      <font-awesome-icon :icon="['fas', 'meh']"      v-if="question_info.complexity==state.state.complexities[1]"/>
      <font-awesome-icon :icon="['fas', 'surprise']" v-if="question_info.complexity==state.state.complexities[2]"/>
      <font-awesome-icon :icon="['fas', 'check']" v-if="question_info.answer"/>
      <font-awesome-icon :icon="['fas', 'lock']" v-else-if="this.locked"/>
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
    Bus.$on('unlock_questions', () => {this.locked = false;this.question_visible = false})
  },

  methods: {
    show_question() {
      if (this.locked || this.question_info.answer ) return
      Bus.$emit("lock_questions", this.question_index)
      this.question_visible = true
    },
    set_answer(question_index, answer_index){
      Bus.$emit('remember_answer', question_index, answer_index)
      Bus.$emit('unlock_questions')
    }
  },
}
</script>
