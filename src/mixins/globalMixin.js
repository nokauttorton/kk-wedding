export default {
    data() {
        return {
            guests: {
                'parentsK': 'Дорогие мама и папа'
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