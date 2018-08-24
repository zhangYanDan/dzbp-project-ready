<template>
  <div class="func-two">
    <header>{{data.name}}</header>
    <section>
      <ul>
        <li v-for="(item,index) in data.list" :key="index">
          <span>{{item.title}}</span>
          <span>{{item.time}}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "func-two",
  props: {
    api: {
      type: String,
      default: ""
    },
    data: {
      type: Object,
      default: ""
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
.demo2 {
  font-size: 40px;
  color: #999;
  text-align: center;
  display: flex;
  align-items: center;
}
</style>
