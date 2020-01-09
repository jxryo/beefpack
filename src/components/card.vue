<template>
    <div>
      <Row style="background:rgba(255, 255, 255, 0.5);padding:20px" v-for="(artical,key) in this.artical_info">
        <Col span="11">
          <Card :bordered="false" style="width: 600px;position: relative;left:23%;">
            <p slot="title">{{artical.title}}</p>
            <img src="../assets/bgp/xlb.jpg" class="img_c">
            <p>
             {{artical.content}}
            </p>
          </Card>
        </Col>
      </Row>
    </div>
</template>

<script>
  let img_root='../assets/bgp/';
  import 'mavon-editor/dist/css/index.css'
    export default {
      name: "card",
      props:['artical_info_get'],
      data(){
        return{
          artical_info: this.artical_info_get
          // artical_info:[{
          //   title:'小笼包',
          //   content:'              食材\n' +
          //     '              制作所需材料\n' +
          //     '              制作所需材料(5张)\n' +
          //     '              1.瘦肉（四两），肥肉（一两），面粉（九两），滚水（半杯），椰菜或绍菜叶（数片）。\n' +
          //     '              2.调味料：盐、酒（各半茶匙），生抽、生粉（各两茶匙），姜茸（一茶匙），清水（四汤匙），麻油、胡椒粉（各少许）。\n' +
          //     '              3.沾汁料：姜丝（半汤匙），食醋（两汤匙）。\n' +
          //     '              步骤<\n' +
          //     '              1.瘦肉及肥肉一同剁烂，加入调味料搅至起胶状，分别做成小肉丸；\n' +
          //     '              2.面粉筛匀放入大碗中，慢慢加入滚水，迅速拌匀成软粉团，以少许面粉爽手；\n' +
          //     '              将粉团搓成长条形，再分切小圆粒，碾成薄圆形粉皮，放入肉丸做成小笼包形状。\n' +
          //     '              3.放入笼屉隔水蒸七至八分钟，拌匀沾汁一同上桌，趁热进食。',
          //   url:'../assets/bgp/xlb.jpg'
          // },{
          //   title: '嫩牛五方',
          //   content: '牛肉蛋白质含量高，而脂肪含量低，所以味道鲜美，受人喜爱，享有“肉中骄子”的美称。肯德基曾出过一款“嫩牛五方”的快餐类食品。',
          //   url: ''
          // }
          // ]
        }
      }
    }
</script>

<style scoped>

  .img_c{
    width: 400px;
    height: 400px;
    /*background: url("../assets/bgp/xlb.jpg") no-repeat;*/
    background-size: 100%;
  }
  .hidden_words{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p{
    word-wrap: break-word;
    word-break: break-all;
  }

</style>
