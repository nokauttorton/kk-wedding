<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <w-page-block :backgroundImage="true" v-scrollfadeanimation>
      <div class="flex justify-center">
        <div class="title-block white-border">
          <div class="page-title-big text-center mb-5" @click="rotate">Свадьба</div>
          <div class="page-title-big text-center mb-7" @click="rotate">Коли и Кати</div>
        </div>
      </div>
      <div class="counter-wrapper" @click="rotate">
        <w-counter/>
      </div>
    </w-page-block>
    
    <w-page-block color="rgba(116, 0, 83, 0.7)" v-scrollfadeanimation>
      <div class="page-title-large text-center mb-5">{{ personalTitle }}!</div>
      <div class="page-title-large text-center mb-7">Мы женимся!</div>
      <div class="paragraph-wrapper flex justify-center mb-7">
        <div class="page-title-middle text-center paragraph w-7">
          Мы счастливы пригласить вас на нашу свадьбу. 
          Для нас очень важно, чтобы вы смогли разделить с нами самое счастливое мгновение в нашей жизни. 
          Порадуйте нас своим присутствием
        </div>
      </div>
      <div class="page-title-middle text-center mb-7">1 июля 2023 года</div>
      <div class="page-title-middle hearts flex justify-center mb-7">
        <span @click="rotate" class="mr-5 heart-rotate">&hearts;</span>
        <span @click="rotate" class="mr-5 heart-rotate">&hearts;</span>
        <span @click="rotate" class="heart-rotate">&hearts;</span>
      </div>
      <div class="page-title-middle text-center" @click="rotate">С любовью, Коля и Катя</div>
    </w-page-block>

    <w-page-block color="white" v-scrollfadeanimation>
      <div class="flex about-us">
        <div class="wp-5 flex justify-center align-center relative photo-block">
          <img src="../assets/we.png" class="we" @click="rotate"/>
          <img src="../assets/stars.gif" class="stars" width="300" height="525"/>
        </div>
        <div class="wp-5 about-paragraph">
          <div class="page-title-large text-center mt-10 mb-7" @click="rotate">Наша история</div>
          <div class="paragraph-wrapper flex justify-center">
            <div class="page-title-middle text-center paragraph w-5 mb-5 lh-6">
              Мы познакомились летом 2017 года в приложении для знакомств. 
              Спустя неделю после знакомства мы пошли на первое свидание в парк Эрмитаж на концерт джазовой музыки. 
            </div>
          </div>
        </div>
      </div>
    </w-page-block>

    <w-page-block color="white" v-scrollfadeanimation>
      <div class="flex our-event">
        <div class="wp-5 shedule-block justify-center">
          <div class="page-title-large text-center mt-10 mb-7" @click="rotate">Во сколько</div>
          <div class="page-title-normal">
            <ul class="ml-12">
                <li class="list-item">15:00 Сбор гостей</li>
                <li class="list-item">16:00 Церемония</li>
                <li class="list-item">17:00 Банкет</li>
            </ul>
          </div>
        </div>
        <div class="wp-5 flex column align-center place-block">
          <div class="place-side-block"></div>
          <div class="page-title-large text-center text-black mt-10 mb-7" @click="rotate">Где</div>
          <a href="https://loftprovans.ru/" class="page-title-middle text-black mt-15" :style="{'text-decoration': 'none'}">Лофт Прованс</a>
          <a href="https://yandex.ru/maps/org/loft_provans/223105516174/?clid=1537599&ll=37.654942%2C55.809272&z=12"
          class="page-title-middle text-black mt-10">г.Москва, 1-й Рижский переулок 2с1</a>
          <img src="../assets/provance.jpg" class="venue mt-15" @click="rotate"/>
        </div>
      </div>
    </w-page-block>

    <w-page-block color="rgba(225, 188, 55, 1)" :centered="false" v-scrollfadeanimation>
      <div class="suggestions-block flex justify-center">
        <div class="page-title-large text-center wp-10 pt-10 mb-25" @click="rotate">Пожелания</div>
        <div class="suggestions flex nowrap row">
          <div class="suggestion white-border" v-for="suggestion in suggestions" :key="suggestion.title">
            <div class="page-title-middle">{{ suggestion.title }}</div>
            <div class="page-title-small" v-html="suggestion.text"></div>
          </div>
        </div>
        <div class="page-title-middle suggestions-description text-center mt-25">Будем рады, если при выборе наряда вы поддержите цветовую гамму нашей свадьбы <br/>(но это необязательно, главное, чтобы вам было удобно!)</div>
        <div class="colors flex mt-10">
          <div class="color flex column nowrap" v-for="color in colors" :key="color.color">
            <div class="color-circle mb-5" :style="{'background-color': color.color}"></div>
            <div class="page-title-small text-center text-black">{{ color.hex || color.rgba }}</div>
          </div>
        </div>
      </div>
    </w-page-block>

    <w-page-block color="white" :centered="false" v-scrollfadeanimation>
      <div class="contacts-block flex justify-center">
        <div class="contact-text">
          <div class="page-title-large text-center wp-10 pt-10 mb-25" @click="rotate">Контакты</div>
          <div class="page-title-middle text-center mt-25">По любым вопросам вы можете связаться с нами или нашим организатором</div>
          <div class="contact-persons">
            <div class="contact-person" v-for="contact in contacts" :key="contact.photo">
              <img :src="getImgUrl(contact.photo)" height="200" width="200" :alt="contact.name" class="person-photo"/>
              <p class="page-title-small text-blue">{{ contact.name }}</p>
              <p class="page-title-small text-blue">{{ contact.phoneNumber }}</p>
              <a class="page-title-small text-blue" :href="getTelegramLink(contact.telegramTag)">{{ contact.telegramTag }}</a>
            </div>
          </div>
        </div>
      </div>
    </w-page-block>
  </div>
</template>

<script>
// @ is an alias to /src
// import WPageBlock from '@/components/w-page-block.vue';

export default {
    name: "MainPage",
    data() {
      return {
        personalTitle: '',
        suggestions: [
          {
            title: 'Стоп-слово',
            text: 'Будем благодарны, если вы воздержитесь от криков «Горько!» на празднике. <br/>Для нас поцелуй — знак выражения чувств, он не может быть по заказу.'
          },
          {
            title: 'Цветы',
            text: 'Будем благодарны, если вы воздержитесь от криков «Горько!» на празднике. <br/>Для нас поцелуй — знак выражения чувств, он не может быть по заказу.'
          },
          {
            title: 'Подарки',
            text: 'Будем благодарны, если вы воздержитесь от криков «Горько!» на празднике. <br/>Для нас поцелуй — знак выражения чувств, он не может быть по заказу.'
          },
          {
            title: 'Что-нибудь',
            text: 'Будем благодарны, если вы воздержитесь от криков «Горько!» на празднике. <br/>Для нас поцелуй — знак выражения чувств, он не может быть по заказу.'
          }
        ],
        colors: [
          {
            color: 'rgba(12, 27, 106, 1)',
            hex: '#0C1B6A'
          },
          {
            color: 'rgba(116, 0, 83, 0.7)',
            rgba: 'rgba(116, 0, 83, 0.7)'
          },
          {
            color: 'rgba(137, 123, 175, 0.7)',
            rgba: 'rgba(137, 123, 175, 0.7)'
          },
          {
            color: 'rgba(245, 212, 92, 1)',
            hex: '#F5D45C'
          },
          {
            color: 'rgba(191, 218, 224, 1)',
            hex: '#BFDAE0'
          },
          {
            color: 'rgba(237, 238, 192, 1)',
            hex: '#EDEEC0'
          }
        ],
        contacts: [
          {
            photo: 'Kate.png',
            name: 'Катя',
            phoneNumber: '+79032232537',
            telegramTag: '@blacksaturday'
          },
          {
            photo: 'Kolya.png',
            name: 'Коля',
            phoneNumber: '+79175791647',
            telegramTag: '@nokauttorton'
          },
          {
            photo: 'noPhotoPerson.png',
            name: '',
            phoneNumber: '',
            telegramTag: ''
          },
        ]
      }
    },
    methods: {
      getImgUrl(pic) {
        return require('../assets/' + pic);
      },
      getTelegramLink(tag) {
        if (tag) {
          return `https://t.me/${tag.replace('@', '')}`
        }
        return 'javascript:void'
      }
    },
    mounted() {
      this.personalTitle = this.guests[this.$route.query?.guest] || 'Дорогой гость'
    }
}
</script>

<style lang="scss" scoped>
.page-title-small,
.page-title-middle,
.page-title-normal,
.page-title-large,
.page-title-big {
  color: white;
}

.title-block {
  padding: 1% 5%;
  width: fit-content;
}

.counter-wrapper {
  min-height: 300px;
  margin-top: 20px;
}

.paragraph-wrapper {
  width: 100%;
}

.hearts {
  font-size: 50px;
  color: #0C1B6A;
}

.about-paragraph {
  background-color: rgba(77, 47, 116, 0.7);
}
.heart-rotate {
  cursor: pointer;
}

.stars {
  position: absolute;
  right: 17%;
  top: 10%;
}

.shedule-block {
  background-color: #A7D0D9;
}

.place-block {
  position: relative;
  text-align: center;

  a {
    &:hover {
      box-shadow: inset 4px #A7D0D9;
    }
  }
  .place-side-block {
    background-color: rgba(191, 218, 224, 0.7);
    position: absolute;
    height: 60%;
    width: 60%;
    left: 7%;
    top: 17%;
  }
}
.suggestions-block {
  .suggestions {
    .suggestion {
      text-align: center;
      margin: 0 25px;
      padding: 15px;
    }
  }
  .colors {
    width: fit-content;
    padding: 20px;
    background-color: white;
    .color {
      padding: 10px;
      margin: 0 10px;
      .color-circle {
        align-self: center;
        height: 64px;
        width: 64px;
        border-radius: 50%;
      }
    }
  }
}

.contact-text {
  height: 50vh;
  width: 100%;
  background-color: #0C1B6A;
  position: relative;
  .contact-persons {
    position: absolute;
    display: flex;
    width: 100%;
    .contact-person {
      text-align: center;
    }
  }
}
</style>
