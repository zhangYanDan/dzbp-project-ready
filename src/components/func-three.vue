<template>
  <div class="func-three">
    <header>{{data.name}}</header>
    <section>
      <ul>
        <li v-for="(item,index) in data.list" :key="index">{{item.name}}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "func-three",
  props: {
    api: {
      type: String,
      default: ""
    },
    data:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.data)
  }
};
</script>

<style scoped lang="scss">
.demo3 {
  font-size: 40px;
  color: #999;
  text-align: center;
  display: flex;
  align-items: center;
}
</style>
