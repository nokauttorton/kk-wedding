<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <w-page-block :backgroundImage="true" v-scrollfadeanimation>
      <div class="page-title-big text-center mb-5">Свадьба</div>
      <div class="page-title-big text-center mb-7">Коли и Кати</div>
      <div class="counter-wrapper">
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
        <span class="mr-5">&hearts;</span>
        <span class="mr-5">&hearts;</span>
        <span>&hearts;</span>
      </div>
      <div class="page-title-middle text-center">С любовью, Коля и Катя</div>
    </w-page-block>
    <w-page-block color="white" v-scrollfadeanimation>
      <div class="flex hp-10">
        <div class="wp-5 flex justify-center align-center">
          <img src="../assets/we.png" width="386" height="525"/>
        </div>
        <div class="wp-5 about-paragraph">
          <div class="page-title-large text-center mt-10 mb-7">Наша история</div>
          <div class="paragraph-wrapper flex justify-center">
            <div class="page-title-middle text-center paragraph w-5 mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat.
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
              dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui facilisi.
            </div>
            <div class="page-title-middle text-center paragraph w-5 mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat.
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
              dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui facilisi.
            </div>
            <div class="page-title-middle text-center paragraph w-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat.
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
              dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui facilisi.
            </div>
          </div>
        </div>
      </div>
    </w-page-block>
    <w-page-block color="rgba(191, 218, 224, 0.7)" v-scrollfadeanimation>
      <div class="page-title-large text-center mb-7">Событие</div>
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
        personalTitle: ''
      }
    },
    mounted() {
      this.personalTitle = this.guests[this.$route.params.guest] || 'Дорогой гость'
    }
}
</script>

<style lang="scss" scoped>
.page-title-small,
.page-title-middle,
.page-title-large,
.page-title-big {
  color: white;
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
  height: 100%;
  background-color: rgba(77, 47, 116, 0.7);
}
</style>
