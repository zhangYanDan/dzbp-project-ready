<template>
    <div class="func-one">
        <header>{{data.name}}</header>
        <section>{{data.content}}</section>
    </div>
</template>

<script>
/** 
 * vue文件方法声明顺序
 *  - components   
    - props    
    - data     
    - created
    - mounted
    - activited
    - update
    - beforeRouteUpdate
    - metods   
    - filter
    - computed
    - watch
*/
export default {
  name: "func-one",
  props:{
    api:{
      type:String,
      default:''
    },
    data:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {
      show: true
    };
  },
  mounted(){
      console.log(this.data)
  }
};
</script>

<style scoped lang="scss">
</style>
