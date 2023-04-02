export default {
    data() {
        return {
          guests: {
            'pK': 'Дорогие мама и папа',
            'mK': 'Дорогие мама, Миша и Алиса',
            'gT': 'Дорогая Тамара',
            'fK': 'Дорогой папа',
            'bA': 'Дорогой Артем',
            'OA': 'Дорогие Оля и Алина',
            'T': 'Дорогие Тарас и родные',
            'NV': 'Дорогие Нана и Вова',
            'Mk': 'Дорогая Маша',
            'A': 'Дорогая Аня',
            'K': 'Дорогой Крис',
            'Mb': 'Дорогой Максим',
            'IK': 'Дорогие Ваня и Катя',
            'P': 'Дорогой Петя',
          }
        }
    },
    methods: {
        rotate(el) {
          let classExist = false
          for (let idx = 0; idx <= 5; idx++) {
            classExist = el.target.classList[idx] === 'rotate'
            if (classExist) break
          }
          if (classExist) {
            el.target.classList.remove('rotate')
          } else {
            el.target.classList.add('rotate')
            setTimeout(() => el.target.classList.remove('rotate'), 2000);
          }
        }
    },
}