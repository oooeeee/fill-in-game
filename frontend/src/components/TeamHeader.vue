<template>
  <div class="pd-2">
    <div v-if="state.state.game_finished">
      <b-alert show>
        Игра завершена.
        {{stats}}
      </b-alert>
      <div v-for="(question, question_index) in state.state.questions" v-bind:key="question_index">
        <b-badge show :variant='question.answers[question.answer.answer_index].right?"primary":"danger"'>
          На вопрос {{question_index}} отвечала команда {{question.answer.team}}
        </b-badge>
      </div>
    </div>
    <b-alert show v-else-if="state.state.active_team">
      {{text}}
    </b-alert>
    <div v-else>
      Сколько будет команд?
      <br/>
      <b-button v-for="(teams_count, idx) in [2, 3, 4]" v-bind:key="idx" @click.prevent="choose_teams_count(teams_count)">
        {{teams_count}}
      </b-button>
    </div>
  </div>
</template>

<script>
import Bus from '../bus'
import { common_state_store } from '../shared'

export default {
  data: () => ({
    state: common_state_store,
    locked: false,
  }),

  computed: {
    text() {
      if (this.locked) return "Отвечает команда " + this.state.state.active_team
      return "Выбирает вопрос команда " + this.state.state.active_team
    },
    stats() {
      if (!this.state.state.game_finished) return ''
      var results = {}
      this.state.state.questions.forEach(question => {
        results[question.answer.team] || (results[question.answer.team] = 0)
        results[question.answer.team] += question.answers[question.answer.answer_index].right?1:0
      })
      var by_points = {}
      Object.keys(results).forEach(team => {
        var points = results[team]
        by_points[points] || (by_points[points] = [])
        by_points[points].push(team)
      })
      var max_points = Object.keys(by_points).sort().reverse()[0]
      if (by_points[max_points].length == 1)
        return "Победила команда " + by_points[max_points]
      return "Победила дружба"
    }
  },

  created() {
    Bus.$on('lock_questions', () => {this.locked = true})
    Bus.$on('unlock_questions', () => {this.locked = false})
  },

  methods: {
    choose_teams_count(teams_count) {
      Bus.$emit('set_teams_count', teams_count)
    }
  },

}
</script>
