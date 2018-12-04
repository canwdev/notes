<template>
  <div class="container" id="app">
    <div class="panel panel-default">
      <div class="panel-heading">用户注册</div>
      <div class="panel-body">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">Model</div>
      <div class="panel-body">
        <pre v-if="model" v-html="prettyJSON(model)"></pre>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">Schema</div>
      <div class="panel-body">
        <pre v-if="model" v-html="prettyJSON(schema)"></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import Util from "../../assets/util.js";

Vue.use(VueFormGenerator);

export default {
  components: {
    VueFormGenerator: VueFormGenerator.component
  },
  data() {
    return {
      model: {
        name: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "用户名",
            id: "name",
            model: "name",
            readonly: false,
            featured: true,
            required: true,
            disabled: false,
            placeholder: "请输入用户名",
            validator: VueFormGenerator.validators.string
          },
          {
            type: "input",
            inputType: "password",
            id: "password",
            label: "密码",
            model: "password",
            min: 6,
            required: true,
            placeholder: "请输入密码",
            hint: "最少6个字符",
            validator: VueFormGenerator.validators.string
          }
        ]
      },

      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true
      }
    };
  },
  methods: {
    prettyJSON: Util.prettyJSON
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url(/vfg.css);
</style>
