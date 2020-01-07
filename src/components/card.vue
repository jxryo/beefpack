<template>
    <div>
      <Row style="background:rgba(255, 255, 255, 0.5);padding:20px">
        <Col span="11">
          <Card :bordered="false" style="height: 400px;width: 600px;position: relative;left:23%;">
            <p slot="title">小笼包</p>
            <div class="img_c"></div>
            <p class="hidden_words">
              食材
              制作所需材料
              制作所需材料(5张)
              1.瘦肉（四两），肥肉（一两），面粉（九两），滚水（半杯），椰菜或绍菜叶（数片）。
              2.调味料：盐、酒（各半茶匙），生抽、生粉（各两茶匙），姜茸（一茶匙），清水（四汤匙），麻油、胡椒粉（各少许）。
              3.沾汁料：姜丝（半汤匙），食醋（两汤匙）。
              步骤<
              1.瘦肉及肥肉一同剁烂，加入调味料搅至起胶状，分别做成小肉丸；
              2.面粉筛匀放入大碗中，慢慢加入滚水，迅速拌匀成软粉团，以少许面粉爽手；
              将粉团搓成长条形，再分切小圆粒，碾成薄圆形粉皮，放入肉丸做成小笼包形状。
              3.放入笼屉隔水蒸七至八分钟，拌匀沾汁一同上桌，趁热进食。
            </p>
          </Card>
        </Col>
      </Row>
    </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
    export default {
        name: "card",
      components:{mavonEditor}
    }
</script>

<style scoped>

  .img_c{
    width: 100px;
    height: 100px;
    background: url("../assets/bgp/xlb.jpg") no-repeat;
    background-size: 100%;
  }
  .hidden_words{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


</style>
