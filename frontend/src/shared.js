import Bus from './bus'
export const ComplexityHard = "Hard";
export const ComplexityMedium = "Medium";
export const ComplexityEasy = "Easy";

export const common_state_store = {
  state: {
    commands_count: 0,
    active_command: 0,
    complexities: [ComplexityEasy, ComplexityMedium, ComplexityHard],
    game_finished: false,
    questions: [
      {
        "complexity": ComplexityHard,
        "text": "Во времена Великой Отечественной Войны партизаны и бойцы советской армии вели боевые действия различными способами, в том числе использовали бутылки с зажигательной смесью. При производстве этих бутылок на них обязательно наклеивали этикетку.",
        "answers": [
          {"text": "огнеопасно", "right": true},
          {"text": "инструкция по применению", "right": false},
          {"text": "детям в руки не брать", "right": false},
        ],
      },
      {
        "complexity": ComplexityMedium,
        "text": "Назовите фортификационное сооружение на территории Советского Союза, которое первым приняло удар фашистской Германии.",
        "answers": [
          {"text": "Петропавловская крепость", "right": true},
          {"text": "Брестская крепость", "right": false},
          {"text": "Североморская застава", "right": false},
        ],
      },
      {
        "complexity": ComplexityEasy,
        "text": "Сила тяги, которую развивает тяжелый танк равна 5 000 ньютонов, а легкий 2 000. Смогут ли два легких танка перетянуть один тяжелый?",
        "answers": [
          {"text": "да", "right": true},
          {"text": "нет", "right": false},
        ],
      },
    ],
  },
  _remember_answer(question_index, answer_index){
    this.state.questions[question_index].answer = {'command': this.state.active_command, 'answer_index': answer_index}
    this._check_that_game_is_finished()
    this._next_command()
  },
  _next_command() {
    var active_command = this.state.active_command + 1
    if (active_command > this.state.commands_count) {
      this.state.active_command = 1
    } else {
      this.state.active_command = active_command
    }
  },
  _check_that_game_is_finished() {
    var without_answer = this.state.questions.filter(question => (!question.answer))
    if (!without_answer.length) {
      Bus.$emit("game_finished")
      this.state.game_finished = true
    }
  }
}

Bus.$on('set_commands_count', (commands_count) => {common_state_store.state.commands_count = commands_count;common_state_store.state.active_command = 1})
Bus.$on('remember_answer', (question_index, answer_index) => common_state_store._remember_answer(question_index, answer_index))
