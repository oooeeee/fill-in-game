import Bus from './bus'
export const ComplexityHard = "Hard";
export const ComplexityMedium = "Medium";
export const ComplexityEasy = "Easy";

export const common_state_store = {
  state: {
    teams_count: 0,
    active_team: 0,
    complexities: [ComplexityEasy, ComplexityMedium, ComplexityHard],
    game_finished: false,
    questions: [
      {
        "img": "/molotov.jpg",
        "complexity": ComplexityHard,
        "text": "Во времена Великой Отечественной Войны партизаны и бойцы советской армии вели боевые действия различными способами, в том числе использовали бутылки с зажигательной смесью. При производстве этих бутылок на них обязательно наклеивали этикетку.",
        "answers": [
          {"text": "огнеопасно", "right": false},
          {"text": "инструкция по применению", "right": true},
          {"text": "детям в руки не брать", "right": false},
        ],
      },
      {
        "img": "/brest.jpg",
        "complexity": ComplexityMedium,
        "text": "Назовите фортификационное сооружение на территории Советского Союза, которое первым приняло удар фашистской Германии.",
        "answers": [
          {"text": "Петропавловская крепость", "right": false},
          {"text": "Брестская крепость", "right": true},
          {"text": "Североморская застава", "right": false},
        ],
      },
      {
        "img": "/nm.jpg",
        "complexity": ComplexityEasy,
        "text": "Сила тяги, которую развивает тяжелый танк равна 5 000 ньютонов, а легкий 2 000. Смогут ли два легких танка перетянуть один тяжелый?",
        "answers": [
          {"text": "да", "right": true},
          {"text": "нет", "right": false},
        ],
      },
      {
        "img": "/ww2.webp",
        "text": "Сколько дней и ночей длилась Великая Отечественная война?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "1418 дней", "right": true},
          {"text": "1000 дней", "right": false},
          {"text": "900 дней", "right": false},
        ],
      },
      {
        "img": "/9may.jpg",
        "text": "Когда состоялся первый парад Победы на Красной площади в честь разгрома фашистской Германии?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "9 мая 1945 года", "right": false},
          {"text": "24 июня 1945 года", "right": true},
          {"text": "22 июня 1941 года", "right": false},
        ],
      },
      {
        "img": "/heroes.jpg",
        "text": "Скольким городам присвоено звание «Город-герой»?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "один город", "right": false},
          {"text": "12 городов", "right": true},
          {"text": "7 городов", "right": false},
        ],
      },
      {
        "img": "/1-6-388x220.jpg",
        "text": "Немецкие войска на захват этого города потратили 250 дней, а советские войска его освободили в 1944 году за 5 дней, о каком городе идет речь?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "Севастополь", "right": true},
          {"text": "Ленинград", "right": false},
          {"text": "Москва", "right": false},
        ],
      },
      {
        "img": "/9may.jpg",
        "text": "Какое название получил парад, состоявшийся 24 июня 1945 года на Красной площади?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "Первый Парад", "right": false},
          {"text": "Парад Победы", "right": true},
          {"text": "Парад Цветов", "right": false},
        ],
      },
      {
        "img": "/voina.jpg",
        "text": "Какую песню можно назвать своеобразным гимном защиты Отечества? Слова В.И. Лебдева-Кумача, композитор А.В. Александров. 27 июня 1941 года на Белорусском вокзале была исполнена впервые, прозвучала сразу 5 раз. С октября 1941 года стала самой популярной песней.",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "«День Победы»", "right": false},
          {"text": "«Катюша»", "right": false},
          {"text": "«Священная война»", "right": true},
        ],
      },
      {
        "img": "/hqdefault.jpg",
        "text": "Сколько дней продолжалась героическая оборона Ленинграда?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "около 900 дней", "right": true},
          {"text": "около 500 дней", "right": false},
          {"text": "около 100 дней", "right": false},
        ],
      },
      {
        "img": "katya.webp",
        "text": "Как ласково называлось новое секретное оружие нашей армии?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "«Марфуша»", "right": false},
          {"text": "«Катюша»", "right": true},
          {"text": "«Победа»", "right": false},
        ],
      },
      {
        "text": "Назовите верховного главнокомандующего советских войск в великой Отечественной войне?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "И.В.Сталин", "right": true},
          {"text": "В.И. Ленин", "right": false},
          {"text": "Г.К.Жуков", "right": false},
        ],
      },
      {
        "img": "/1737434013e6.jpg",
        "text": "Какой продукт в годы Великой Отечественной войны на севере спас от смерти много солдат, детей, женщин, стариков?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "мясо белого медведя", "right": false},
          {"text": "тюленье сало", "right": true},
          {"text": "рыбий жир", "right": false},
        ],
      },
      {
        "img": "/e59f5735-75db-4da8-8aa1-8ccfbbc451e9.jpg",
        "text": "Когда началась Великая Отечественная война?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "22 июня 1941 года", "right": true},
          {"text": "9 мая 1945 года", "right": false},
          {"text": "29 февраля 1939 года", "right": false},
        ],
      },
      {
        "img": "4oyw8RG2qFS8_iurii-levitan.jpg",
        "text": "Чей голос прозвучал по Всесоюзному радио, оповещая о начале ВОВ?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "И. В. Сталин", "right": false},
          {"text": "Юрий Борисович Левитан", "right": true},
          {"text": "Тима Белорусских", "right": false},
        ],
      },
      {
        "img": "/brest.jpg",
        "text": "Сколько дней длилась оборона Брестской крепости?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "900 дней", "right": false},
          {"text": "5 дней", "right": false},
          {"text": "30 дней", "right": true},
        ],
      },
      {
        "text": "Юная санитарка, боец Брестской крепости, пионер-герой ВОВ?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "Валя Зенкина", "right": true},
        ],
      },
      {
        "img": "/69392945_482375179014600_7562506439734853632_n.jpg",
        "text": "Какого размера был паёк для жителей Ленинграда в самые тяжёлые дни блокады?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "75 гр. хлеба", "right": false},
          {"text": "125 гр. хлеба", "right": true},
          {"text": "250 гр. хлеба", "right": false},
        ],
      },
      {
        "img": "/Hermitage1.jpg",
        "text": "В какой город были эвакуированы в 1941 году сокровища Эрмитажа?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "Москва", "right": false},
          {"text": "Самара", "right": false},
          {"text": "Свердловск", "right": true},
        ],
      },
      {
        "img": "/metronome.jpg",
        "text": "Звук, какого прибора стал сигналом тревоги вражеских авианалётов?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "Метроном", "right": true},
          {"text": "Радио", "right": false},
          {"text": "Велосипед", "right": false},
        ],
      },
      {
        "text": "Кто руководил обороной Москвы в 1941 году?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "Георгий Константинович Жуков", "right": true},
        ],
      },
      {
        "text": "Какое событие является коренным переломом в ВОВ?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "Сталинградская битва", "right": true},
        ],
      },
      {
        "img": "/8vA78_duGXw.jpg",
        "text": "Сколько дней продолжалась Сталинградская битва?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "5", "right": false},
          {"text": "15", "right": false},
          {"text": "200", "right": true},
        ],
      },
      {
        "img": "/t-34-85-tank-ww2-war-art.jpg",
        "text": "Лучший танк Советской армии во время ВОВ?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "Танк «Т-34»", "right": true},
          {"text": "Танк «Т-90»", "right": false},
          {"text": "«Тигр»", "right": false},
        ],
      },
      {
        "img": "/oruzhie-voennaya-texnika-moshh-ec688a4.jpg",
        "text": "Немецкий тяжёлый танк времён ВОВ?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "Танк «Т-34»", "right": false},
          {"text": "Танк «Т-90»", "right": false},
          {"text": "«Тигр»", "right": true},
        ],
      },
      {
        "text": "Первый российский город, из которого были изгнана фашистская армия?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "Ельня", "right": true},
        ],
      },
      {
        "text": "Название города, который фашистские войска пытались захватить в течение 250 дней, а Советская армия освободила за 5 дней?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "Севастополь", "right": true},
        ],
      },
      {
        "text": "Когда водружено Советское знамя над зданием Рейхстага?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "30 апреля 1945 года", "right": true},
        ],
      },
      {
        "text": "Дата подписания акта о безоговорочной капитуляции Фашистской Германии?",
        "complexity": ComplexityMedium,
        "answers": [
          {"text": "8 мая 1945 года", "right": true},
        ],
        }
    ],
  },
  _remember_answer(question_index, answer_index){
    this.state.questions[question_index].answer = {'team': this.state.active_team, 'answer_index': answer_index}
    this._check_that_game_is_finished()
    this._next_team()
  },
  _next_team() {
    var active_team = this.state.active_team + 1
    if (active_team > this.state.teams_count) {
      this.state.active_team = 1
    } else {
      this.state.active_team = active_team
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

Bus.$on('set_teams_count', (teams_count) => {common_state_store.state.teams_count = teams_count;common_state_store.state.active_team = 1})
Bus.$on('remember_answer', (question_index, answer_index) => common_state_store._remember_answer(question_index, answer_index))
