<template>

  <div class="input_artical">
    <Form :model="formItem" :label-width="80">
      <FormItem label="title">
        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
      </FormItem>
<!--      <FormItem label="Select">-->
<!--        <Select v-model="formItem.select">-->
<!--          <Option value="beijing">New York</Option>-->
<!--          <Option value="shanghai">London</Option>-->
<!--          <Option value="shenzhen">Sydney</Option>-->
<!--        </Select>-->
<!--      </FormItem>-->
<!--      <FormItem label="DatePicker">-->
<!--        <Row>-->
<!--          <Col span="11">-->
<!--            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>-->
<!--          </Col>-->
<!--          <Col span="2" style="text-align: center">-</Col>-->
<!--          <Col span="11">-->
<!--            <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>-->
<!--          </Col>-->
<!--        </Row>-->
<!--      </FormItem>-->
<!--      <FormItem label="Radio">-->
<!--        <RadioGroup v-model="formItem.radio">-->
<!--          <Radio label="male">Male</Radio>-->
<!--          <Radio label="female">Female</Radio>-->
<!--        </RadioGroup>-->
<!--      </FormItem>-->
      <FormItem label="菜品">
        <CheckboxGroup v-model="formItem.checkbox">
          <Checkbox label="西式"/>
          <Checkbox label="中式"/>
        </CheckboxGroup>
      </FormItem>
<!--      <FormItem label="Switch">-->
<!--        <i-switch v-model="formItem.switch" size="large">-->
<!--          <span slot="open">On</span>-->
<!--          <span slot="close">Off</span>-->
<!--        </i-switch>-->
<!--      </FormItem>-->
<!--      <FormItem label="Slider">-->
<!--        <Slider v-model="formItem.slider" range></Slider>-->
<!--      </FormItem>-->
      <FormItem label="Text">
        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."/>
      </FormItem>
      <FormItem>
        <Button type="primary">发布</Button>
        <Button style="margin-left: 8px" v-on:click="go_back">返回</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
    export default {
        name: "write_artical",
      data () {
        return {
          formItem: {
            input: '',
            select: '',
            radio: 'male',
            checkbox: [],
            switch: true,
            date: '',
            time: '',
            slider: [20, 50],
            textarea: ''
          }
        }
      },methods:{
          go_back:function () {
            this.$router.push('/');
          }
      }

    }
</script>

<style scoped>
  .input_artical{
    padding-top: 8%;
    padding-left: 25%;
    padding-right: 25%;
  }
</style>
