<template>
  <div >
    <top_bar/>
    <div class="bg">
      <div class="paper">
        <!--      <Form :model="setting" :label-width="100">-->
        <!--        <FormItem label="Automatic switching">-->
        <!--          <Switch v-model="setting.autoplay">-->
        <!--            <span slot="open">On</span>-->
        <!--            <span slot="close">Off</span>-->
        <!--          </Switch>-->
        <!--        </FormItem>-->
        <!--        <FormItem label="Circular indicator">-->
        <!--          <Switch v-model="setting.radiusDot">-->
        <!--            <span slot="open">On</span>-->
        <!--            <span slot="close">Off</span>-->
        <!--          </Switch>-->
        <!--        </FormItem>-->
        <!--        <FormItem label="Automatic switching speed">-->
        <!--          <Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>-->
        <!--        </FormItem>-->
        <!--        <FormItem label="Indicator position">-->
        <!--          <RadioGroup v-model="setting.dots" type="button">-->
        <!--            <Radio label="inside">interior</Radio>-->
        <!--            <Radio label="outside">exterior</Radio>-->
        <!--            <Radio label="none">Don't show</Radio>-->
        <!--          </RadioGroup>-->
        <!--        </FormItem>-->
        <!--        <FormItem label="Switch the arrow">-->
        <!--          <RadioGroup v-model="setting.arrow" type="button">-->
        <!--            <Radio label="hover">Hover displayed when</Radio>-->
        <!--            <Radio label="always">Always show</Radio>-->
        <!--            <Radio label="never">Don't show</Radio>-->
        <!--          </RadioGroup>-->
        <!--        </FormItem>-->
        <!--        <FormItem label="Indicator trigger mode">-->
        <!--          <RadioGroup v-model="setting.trigger" type="button">-->
        <!--            <Radio label="click">Click</Radio>-->
        <!--            <Radio label="hover">Hover</Radio>-->
        <!--          </RadioGroup>-->
        <!--        </FormItem>-->
        <!--      </Form>-->
        <Carousel
          v-model="value3"
          :autoplay="setting.autoplay"
          :autoplay-speed="setting.autoplaySpeed"
          :dots="setting.dots"
          :radius-dot="setting.radiusDot"
          :trigger="setting.trigger"
          :arrow="setting.arrow">
          <CarouselItem>
            <div class="demo-carousel">1</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carouse2">2</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carouse3">3</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carouse4">4</div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
  import top_bar from "./top_bar";

  export default {
    name: "zmd",
    components: {top_bar},
    data() {
      return {
        value3: 0,
        setting: {
          autoplay: false,
          autoplaySpeed: 2000,
          dots: 'inside',
          radiusDot: false,
          trigger: 'click',
          arrow: 'hover'
        }
      }
    }
  }
</script>

<style scoped>
  .bg{
    background: url("../assets/bgp/bg.png");
    width: 100%;
    height: 700px;
  }
  .paper {
    height: auto;
    width: 600px;
    position: relative;
    left: 430px;

  }

  .demo-carousel {
    background: url("../assets/bgp/cat.jpg") no-repeat;
    height: 400px;
    width: 600px;
    background-size: 100%;
    /*position: relative;*/
    /*left: 430px;*/
  }

  .demo-carouse2 {
    background: url("../assets/bgp/game_bg.png") no-repeat;
    height: 400px;
    width: 600px;
    background-size: 100%;
    /*  position: relative;*/
    /*  left: 430px;*/
    /*}*/
  }

  .demo-carouse3 {
    background: url("../assets/bgp/land.jpg") no-repeat;
    height: 400px;
    width: 600px;
    background-size: 100%;
    /*position: relative;*/
    /*left: 430px;*/
  }

  .demo-carouse4 {
    background: url("../assets/bgp/piano.jpg") no-repeat;
    height: 400px;
    width: 600px;
    background-size: 100%;
    /*position: relative;*/
    /*left: 430px;*/
  }
</style>
