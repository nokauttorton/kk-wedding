<template>
  <div class="flex row">
      дней: {{ counter.days }},
      времени: {{ counter.hours }}:{{ counter.minutes }}:{{ counter.seconds }}
  </div>
</template>
  
<script>
  export default {
    name: 'w-counter',
    data() {
        return {
            weddingDate: 'July 1 2023 15:00:00 GMT+03:00',
            interval: null,
            counter: {}
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
          
        }
      }
    },
    mounted() {
      this.interval = setInterval(() => this.counter = this.timeRemaining(), 1000, this)
    },
    beforeDestroy() {
      clearInterval(this.interval)
    }
  }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .counter {
    
  }
</style>
  