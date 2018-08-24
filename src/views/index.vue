<template>
  <div class="index" v-show="componentList.length>0" :class="{'main1':bgColor[0].temp,'main2':bgColor[1].temp,'main3':bgColor[2].temp}">
    <div class="row">
      <div class="one">
        <component :is="componentList[0].componentName" :data="componentList[0].componentData"></component>
      </div>
      <div class="two">
        <component :is="componentList[1].componentName" :data="componentList[1].componentData"></component>
      </div>
    </div>
    <div class="row">
      <div class="three">
        <component :is="componentList[2].componentName" :data="componentList[2].componentData"></component>
      </div>
    </div>
    <div class="button-group">
      <a href="javascript:void(0)" @click="toggleTemplate(1)">模板1</a>
      <a href="javascript:void(0)" @click="toggleTemplate(2)">模板2</a>
      <a href="javascript:void(0)" @click="toggleTemplate(3)">模板3</a>
      <a href="javascript:void(0)" @click="toggleBg(0)">换肤1</a>
      <a href="javascript:void(0)" @click="toggleBg(1)">换肤2</a>
      <a href="javascript:void(0)" @click="toggleBg(2)">换肤3</a>
    </div>
  </div>
</template>
<script>
import funcOne from "@/components/func-one.vue";
import funcTwo from "@/components/func-two.vue";
import funcThree from "@/components/func-three.vue";
export default {
  components: {
    "func-one": funcOne,
    "func-two": funcTwo,
    "func-three": funcThree
  },
  data() {
    return {
      componentList: [
        { componentName: "", componentData: "" },
        { componentName: "", componentData: "" },
        { componentName: "", componentData: "" }
      ],
      bgColor: [{
      temp: false
    }, {
      temp: false
    }, {
      temp: false
    }]
    };
  },
  mounted() {
    this.setSkin();
    this.getData("http://192.168.0.153:8092/json/data.json");
  },
  methods: {
    /** 
     * 从数据库获取先前存好的皮肤设置
     * 然后设置给当前页
    */
    setSkin() {
      this.$store.dispatch("query").then(() => {
        setTimeout(() => {
          this.bgColor = this.$store.getters.getSkinSign;
        }, 300);
      });
    },
    /**
     * 切换模板
     */
    toggleTemplate(num) {
      let url;
      if (num == 1) {
        url = "http://192.168.0.153:8092/json/data.json";
      } else if (num == 2) {
        url = "http://192.168.0.153:8092/json/data2.json";
      } else if (num == 3) {
        url = "http://192.168.0.153:8092/json/data3.json";
      }
      this.getData(url);
    },
    /**
     * 切换皮肤
     */
    toggleBg(num) {
      for (let i = 0; i < this.bgColor.length; i++) {
        this.bgColor[i].temp = false;
      }
      this.bgColor[num].temp = true;
      this.$store.commit("saveSkinSigntoSql", this.bgColor);
    },
    /**
     * 模拟切换模板数据也变化
     */
    getData(url) {
      this.$axios.get(url).then(
        res => {
          this.componentList = res.data.data;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin bgColor($color) {
  background: $color;
}
.row {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50vh;
  background: #ddd;
  .modular {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: center;
    color: #fff;
  }

  .one {
    @extend .modular;
    @include bgColor(#008cff);
  }
  .two {
    @extend .modular;
    @include bgColor(#ea2000);
  }
  .three {
    @extend .modular;
    @include bgColor(#000);
  }
}

.main1 {
  .one {
    @include bgColor(#00ff6a);
  }
  .two {
    @include bgColor(#ffd000);
  }
  .three {
    @include bgColor(#ff0055);
  }
}
.main2 {
  .one {
    @include bgColor(#d400ff);
  }
  .two {
    @include bgColor(#ff5e00);
  }
  .three {
    @include bgColor(#00b7ff);
  }
}
.main3 {
  .one {
    @include bgColor(#73ff00);
  }
  .two {
    @include bgColor(#00f7ff);
  }
  .three {
    @include bgColor(#00ff80);
  }
}

.button-group {
  position: absolute;
  bottom: 10px;
  right: 0;
  a {
    color: #008cff;
  }
}
</style>
