<template>

  <div class="input_artical">
    <Form :model="formItem" :label-width="80">
      <FormItem label="title">
        <Input v-model="formItem.title" placeholder="Enter something..."/>
      </FormItem>
      <FormItem label="Text">
        <Input v-model="formItem.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="Enter something..."/>
      </FormItem>
      <form-item>
        <input type="file" accept="image/*" @change="upload_image($event)"/>
      </form-item>
      <FormItem>
        <Button type="primary" v-on:click="upload">发布</Button>
        <Button style="margin-left: 8px" v-on:click="go_back">返回</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  let formData = new FormData;
  let URL_ROOT = {
    'base_url': 'http://localhost:8080/',
  };
  import axios from 'axios';

  export default {
    name: "write_artical",
    data() {
      return {
        formItem: {
          content: '',
          imageId: '',
          title: '',
          userId: ''
        },
        image_data: null
      }
    }, methods: {
      go_back: function () {
        this.$router.push('/');
      },
      upload: function () {
        axios.get(URL_ROOT.base_url + 'user/me').then(res => {
          this.formItem.userId = res.data.data.id;
        });
        axios.post(URL_ROOT.base_url + 'uploader', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'


          }
        }).then(res => {

          this.formItem.imageId = res.data.data.id;
          axios.post(URL_ROOT.base_url + 'article',this.formItem).then(res => {
            alert('上传成功')


          }).catch(error => {
            console.log(error)


          })
        }).catch(error => {

        })
      },
      upload_image: function (event) {
        event.preventDefault();
        formData.append('file', this.image_data);
        this.image_data = event.target.files[0];

      }
    }
  }
</script>

<style scoped>
  .input_artical {
    padding-top: 8%;
    padding-left: 25%;
    padding-right: 25%;
  }
</style>
