export const ComplexityHard = "Hard";
export const ComplexityMedium = "Medium";
export const ComplexityEasy = "Easy";


export const common_state_store = {
  state: {
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
}
