<template>
  <div class="pd-2">
    <div v-if="state.state.active_command">
      {{text}}
    </div>
    <div v-else>
      Сколько будет команд?
      <br/>
      <b-button v-for="(commands_count, idx) in [2, 3, 4]" v-bind:key="idx" @click.prevent="choose_commands_count(commands_count)">
        {{commands_count}}
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
      if (this.locked) return "Отвечает команда " + this.state.state.active_command
      return "Выбирает вопрос команда " + this.state.state.active_command
    },
  },

  created() {
    Bus.$on('lock_questions', () => {this.locked = true})
    Bus.$on('unlock_questions', () => {this.locked = false})
  },

  methods: {
    choose_commands_count(commands_count) {
      this.state.set_commands_count(commands_count)
    }
  },

}
</script>
