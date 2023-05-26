<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <w-page-block :backgroundImage="true" v-scrollfadeanimation>
      <div class="flex justify-center">
        <div class="title-block">
          <div class="page-title-big text-center mb-5" @click="rotate">Свадьба</div>
          <div class="page-title-big text-center mb-7" @click="rotate">Коли и Кати</div>
        </div>
      </div>
      <div class="counter-wrapper" @click="rotate">
        <w-counter/>
      </div>
    </w-page-block>
    
    <w-page-block color="rgba(116, 0, 83, 0.85)" v-scrollfadeanimation>
      <div class="page-title-large text-center mb-5">{{ personalTitle }}!</div>
      <div class="page-title-normal text-center mb-7">Мы женимся!</div>
      <div class="paragraph-wrapper flex justify-center mb-7">
        <div class="page-title-middle text-center paragraph w-7 prl-3">
          {{ getPersonalText() }}
        </div>
      </div>
      <div class="page-title-middle text-center mb-3 prl-3">1 июля 2023 года</div>
      <div class="page-title-middle text-center mb-7 prl-3">в 15:00</div>
      <div class="page-title-middle hearts flex justify-center mb-7">
        <span @click="rotate" class="mr-5 heart-rotate">&hearts;</span>
        <span @click="rotate" class="mr-5 heart-rotate">&hearts;</span>
        <span @click="rotate" class="heart-rotate">&hearts;</span>
      </div>
      <div class="page-title-middle text-center prl-3" @click="rotate">С любовью, Коля и Катя</div>
    </w-page-block>

    <w-page-block color="white" v-scrollfadeanimation>
      <div class="flex about-us">
        <div class="wp-5 flex justify-center align-center relative photo-block">
          <div class="about-side-block"></div>
          <img src="../assets/we.png" class="we" @click="el => rotateWithStars(el)"/>
          <img v-if="showStars" src="../assets/stars.gif" class="stars" width="300" height="525"/>
        </div>
        <div class="wp-5 about-paragraph">
          <div class="page-title-large text-center mt-10 mb-7" @click="rotate">Про нас</div>
          <div class="paragraph-wrapper flex justify-center">
            <div class="page-title-middle text-center paragraph w-5 mb-5 lh-6 prl-3">
              Мы познакомились летом 2017 года в приложении для знакомств. 
              Спустя неделю мы пошли на первое свидание в парк Эрмитаж на концерт джазовой музыки.
              Нас объединяет музыка, работа в сфере информационных технологий, любовь к кошкам и вкусной еде:)
              Нашу свадьбу хотим сделать про нас, поэтому на празднике будет музыкальный ведущий и много творческих номеров.
            </div>
          </div>
        </div>
      </div>
    </w-page-block>

    <w-page-block color="white" v-scrollfadeanimation>
      <div class="flex our-event">
        <div class="wp-5 shedule-block justify-center">
          <div class="page-title-normal text-center font-weight-normal mt-10 mb-7" @click="rotate">Во сколько</div>
          <div class="page-title-normal">
            <ul class="ml-12">
                <li class="list-item">15:00 Сбор гостей</li>
                <li class="list-item">16:00 Церемония</li>
                <li class="list-item">17:00 Банкет</li>
                <li class="list-item">20:30 Торт</li>
                <li class="list-item">21:00 Дискотека</li>
                <li class="list-item">23:00 The end</li>
            </ul>
          </div>
        </div>
        <div class="wp-5 flex column align-center place-block">
          <div class="place-side-block"></div>
          <div class="page-title-normal text-center text-black font-weight-normal mt-10 mb-7" @click="rotate">Где</div>
          <a href="https://loftprovans.ru/" target="_blank" class="page-title-middle text-black mt-15" :style="{'text-decoration': 'none'}">Лофт Прованс</a>
          <a href="https://yandex.ru/maps/org/loft_provans/223105516174/?clid=1537599&ll=37.654942%2C55.809272&z=12" target="_blank"
          class="page-title-middle text-black mt-10">г.Москва, 1-й Рижский переулок 2с1</a>
          <img src="../assets/provance.jpg" class="venue mt-15" @click="rotate"/>
        </div>
      </div>
    </w-page-block>

    <w-page-block color="rgba(188, 153, 27, 1)" :centered="false" v-scrollfadeanimation>
      <div class="suggestions-block flex justify-center">
        <div class="page-title-large text-center wp-10 pt-10 mb-5" @click="rotate">Пожелания</div>
        <div class="suggestions">
          <div class="suggestion white-border" v-for="suggestion in suggestions" :key="suggestion.title">
            <div class="page-title-middle mb-3">{{ suggestion.title }}</div>
            <div class="page-title-small" v-html="suggestion.text"></div>
          </div>
        </div>
        <div class="page-title-middle suggestions-description text-center mt-5 prl-3">Будем рады, если при выборе наряда вы поддержите цветовую гамму нашей свадьбы.
          <br/>(но это необязательно, главное, чтобы вам было удобно!).
          <br/>Наведите на кружок, чтобы узнать цвет свадьбы
        </div>
        <div class="colors flex">
          <div class="color flex column nowrap" v-for="color in colors" :key="color.color">
            <div class="color-circle" :style="{'background-color': color.color}" @click="openMobileTooltipToggle(color)">
              <p class="text-center text-black" :style="mobileTooltipStyle(color)">{{ color.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </w-page-block>

    <w-page-block color="white" :centered="false" v-scrollfadeanimation>
      <div class="contacts-block flex justify-center">
        <div class="contact-text">
          <div class="page-title-large text-center wp-10 pt-10 mb-15" @click="rotate">Контакты</div>
          <div class="page-title-middle text-center prl-10">По любым вопросам вы можете связаться с нами или нашими организаторами</div>
          <div class="contact-persons">
            <div class="contact-person" v-for="contact in contacts" :key="contact.photo">
              <img :src="getImgUrl(contact.photo)" height="200" width="200" :alt="contact.name" class="person-photo"/>
              <p class="page-title-small text-blue" v-html="contact.name"/>
              <p class="page-title-small text-blue">{{ contact.phoneNumber }}</p>
              <a class="page-title-small text-blue" target="_blank" :href="getTelegramLink(contact.telegramTag)">{{ contact.telegramTag }}</a>
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
        showStars: false,
        suggestions: [
          {
            title: 'Стоп-слово',
            text: 'Будем благодарны, если вы воздержитесь от криков «Горько!» на празднике. <br/>Для нас поцелуй — знак выражения чувств, он не может быть по заказу.'
          },
          {
            title: 'Цветы',
            text: 'Пожалуйста не дарите нам цветы, <br/>мы не сможем о них позаботиться.'
          },
          {
            title: 'Подарки',
            text: 'Подарки оставляем на ваше усмотрение. <br/> Будем рады и подарку в конверте:)'
          },
          {
            title: 'Сюрпризы',
            text: 'Торжество планируется в формате квартирника.<br/> Поэтому нам будет приятно, если вы подготовите творческий подарок. <br/> Позднее с вами по этому поводу свяжется наш ведущий.'
          }
        ],
        colors: [
          {
            color: 'rgba(12, 27, 106, 1)',
            hex: '#0C1B6A',
            title: 'темно-синий',
            openMobileTooltip: false
          },
          {
            color: 'rgba(116, 0, 83, 1)',
            rgba: 'rgba(116, 0, 83, 1)',
            title: 'малиновый',
            openMobileTooltip: false
          },
          {
            color: 'rgba(137, 123, 175, 1)',
            rgba: 'rgba(137, 123, 175, 1)',
            title: 'лиловый',
            openMobileTooltip: false
          },
          {
            color: 'rgba(245, 212, 92, 1)',
            hex: '#F5D45C',
            title: 'желтый',
            openMobileTooltip: false
          },
          {
            color: 'rgba(191, 218, 224, 1)',
            hex: '#BFDAE0',
            title: 'голубой',
            openMobileTooltip: false
          },
          {
            color: 'rgba(243, 222, 196, 1)',
            hex: '#F3DEC4',
            title: 'бежевый',
            openMobileTooltip: false
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
            photo: 'organizers.png',
            name: '<div style="margin-bottom: 16px;">Организаторы</div>Ксения +79162311414',
            phoneNumber: 'Максим +79151581414',
            telegramTag: ''
          },
        ]
      }
    },
    methods: {
      getImgUrl(pic) {
        return require('../assets/' + pic);
      },
      rotateWithStars(el) {
        this.showStars = !this.showStars
        this.rotate(el)
      },
      getTelegramLink(tag) {
        if (tag) {
          return `https://t.me/${tag.replace('@', '')}`
        }
        return 'javascript:void'
      },
      openMobileTooltipToggle(item) {
        if (!item.openMobileTooltip) {
          this.closeAllColorsTooltips()
        }
        item.openMobileTooltip = !item.openMobileTooltip
      },
      closeAllColorsTooltips() {
        this.colors.forEach(color => {
            color.openMobileTooltip = false
        })
      },
      mobileTooltipStyle(item) {
        return  item.openMobileTooltip ? 'display: block; visibility: visible;' : ''
      },
      getPersonalText() {
          const guestFromQuery = this.$route.query?.guest
          if (!guestFromQuery) return 'Мы счастливы пригласить тебя на нашу свадьбу.'
          const officials = ['pK', 'mK', 'gT', 'OA', 'NV', 'IK', 'T', 'O', 'YaK']
          const textPersonal = 'Мы счастливы пригласить тебя на нашу свадьбу. Для нас очень важно твое присутствие в самое счастливое мгновение в нашей жизни.'
          const textOfficial = 'Мы счастливы пригласить вас на нашу свадьбу. Для нас очень важно, чтобы вы смогли разделить с нами самое счастливое мгновение в нашей жизни. Порадуйте нас своим присутствием.'
          return officials.includes(guestFromQuery) ? textOfficial : textPersonal
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
  margin-top: 20px;
}

.paragraph-wrapper {
  width: 100%;
}

.about-side-block {
  background-color: rgba(77, 47, 116, 0.5);
  position: absolute;
  height: 40%;
  width: 85%;
  right: 5%;
  top: 5%;
}

.hearts {
  font-size: 50px;
  color: #0C1B6A;
}

.about-paragraph {
  background-color: rgba(77, 47, 116, 0.85);
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
  background-color: rgba(167, 208, 217, 1);
}

.place-block {
  position: relative;
  text-align: center;
  align-items: center;

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
    left: 3%;
    top: 17%;
  }
}
.suggestions-block {
  .suggestions {
    .suggestion {
      text-align: center;
      margin: 0 25px 30px;
      padding: 15px;
    }
  }
  .colors {
    width: fit-content;
    padding: 20px;
    // background-color: white;
    .color {
      padding: 10px;
      margin: 0 10px;
      .color-circle {
        align-self: center;
        height: 64px;
        width: 64px;
        border-radius: 50%;
        position: relative;

        p {
          &::before {
            content: "";
            position: absolute;
            transform: rotate(45deg);
            background-color: white;
            border-right: black solid 1px;
            border-bottom: black solid 1px;
            bottom: -6px;
            left: 58px;
            padding: 5px;
            z-index: 1;
          }

          display: none;
          visibility: hidden;
          position: absolute;
          white-space: nowrap;
          z-index: 2;
          bottom: 100%;
          background-color: white;
          border-radius: 10px;
          border: black solid 1px;
          padding: 10px 15px 10px 15px;
        }
      }
    }
  }
}

.contact-text {
  height: 50vh;
  width: 100%;
  background-color:#0C1B6A;
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
