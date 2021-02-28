<template>
  <div class="tag">
      <router-link tag="a" v-for="(data, index) in datas" :key="index" v-text="data.name" :to="'/tag/'+data.id" :style="random()" style="margin-right: 10px;">
      </router-link>
  </div>
</template>

<script>
const colors = ['#404B6D', '#01B312', '#C64EAD', '#A960B3', '#6C5C46', '#BD99B9', '#7CB5D2', '#404C79', '#404C79'];
const size = ['14px', '16px', '18px', '20px']

export default {
    name: 'wordCloud',
    props: {
        datas: Array
    },
    methods: {
        /**
         * 获取一个随机大小，随机颜色的JSON数据
         * 9种颜色
         * 4种尺寸
        */
        random(){
            let color = colors[parseInt(Math.random() * 9)];
            let font_size = size[parseInt(Math.random() * 4)];
            return {
                'color': color,
                'font-size': font_size
            }
        }
    }
}
</script>

<style scoped>
.tag{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>