<template>
    <div v-if="started" class="counter flex">
        <div class="flex column align-items-center timer-block page-title-small">
          <div class="date" :class="classes">{{ counter.days }}</div>
          <span>Дней</span>
        </div>
        <div class="flex column align-items-center timer-block page-title-small">
          <div class="date" :class="classes">{{ counter.hours }}</div>
          <span>Часов</span>
        </div>
        <div class="flex column align-items-center timer-block page-title-small">
          <div class="date" :class="classes">{{ counter.minutes }}</div>
          <span>Минут</span>
        </div>
        <div class="flex column align-items-center timer-block page-title-small">
          <div class="date" :class="classes">{{ counter.seconds }}</div>
          <span>Секунд</span>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'w-counter',
    data() {
        return {
            weddingDate: 'July 1 2023 15:00:00 GMT+03:00',
            interval: null,
            counter: {},
            started: false
        }
    },
    methods: {
      timeRemaining() {
        const t = Date.parse(this.weddingDate) - Date.parse(new Date());
        let seconds = Math.floor( (t/1000) % 60 )
        let minutes = Math.floor( (t/1000/60) % 60 )
        let hours = Math.floor( (t/(1000*60*60)) % 24 )
        let days = Math.floor( t/(1000*60*60*24) )
        if (seconds < 10) seconds = '0' + `${seconds}`
        if (minutes < 10) minutes = '0' + `${minutes}`
        if (hours < 10) hours = '0' + `${hours}`
        // console.log('timeRemaining', t, seconds, minutes, hours, days)
        return {  
          'total': t,  
          'days': days,  
          'hours': hours,  
          'minutes': minutes,  
          'seconds': seconds  
        } 
      },
    },
    computed: {
      styles() {
        return {
          
        }
      },
      classes() {
        return {
          'date-shown': this.counter.days
        }
      }
    },
    mounted() {
      this.started = true
      this.interval = setInterval(() => {
        this.counter = this.timeRemaining()
      }, 1000, this)
    },
    beforeDestroy() {
      clearInterval(this.interval)
    }
  }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .counter {
    width: 100%;
    justify-content: center;
    transition: all 0.3s ease-in-out;
  }
  .date {
    min-height: 60px;
    min-width: 55px;
    text-align: center;
    font-size: 36px;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.5s ease-in-out;
  }
  .date-shown {
    opacity: 1;
    transform: translateY(0px);
  }
  .timer-block {
    margin-right: 80px;
    color: white;
    &:last-child {
      margin-right: 0;
    }
  }

  @media (min-width: 320px) { //mobile
    .timer-block {
      margin-right: 20px;
    }
    .date {
      margin-top: 60px;
    }
  }
  @media (min-width: 768px) { //tablet
    .timer-block {
      margin-right: 60px;
    }
  }

  @media (min-width: 1024px) { //laptop
    .timer-block {
      margin-right: 80px;
    }
  }
</style>
  