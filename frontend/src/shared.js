export const ComplexityHard = "Hard";
export const ComplexityMedium = "Medium";
export const ComplexityEasy = "Easy";


export const common_state_store = {
  state: {
    commands_count: 0,
    active_command: 0,
    complexities: [ComplexityEasy, ComplexityMedium, ComplexityHard],
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
  set_commands_count(commands_count) {
    this.state.commands_count = commands_count
    this.state.active_command = 1
  },
  remember_answer(question_index, answer_index){
    this.state.questions[question_index].answer = {'command': this.state.active_command, 'answer_index': answer_index}
    this.next_command()
  },
  next_command() {
    var active_command = this.state.active_command + 1
    if (active_command > this.state.commands_count) {
      this.state.active_command = 1
    } else {
      this.state.active_command = active_command
    }
  },
}
