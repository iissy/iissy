<template>
  <div style="flex: 1;min-height: 100%;">
    <ProjectMangeHeader title="工作项属性" desc="工作项属性用于配置工作项需要的显示字段，可以用多种属性类型来进行配置，不同项目可以共用同一个属性。"/>
    <div style="padding: 0 20px 20px 20px;">
      <Search style="margin: 20px 0;" placeholder="搜索工作项属性"/>
      <div id="project-main">
        <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;">
          <div class="table">
            <div class="table-row-header">
              <div class="th">属性名称</div>
              <div class="th">属性类型</div>
              <div class="th">使用到的项目</div>
              <div class="th op" style="display: flex;">操作</div>
            </div>
            <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
              <div class="td flex-row">
                <div style="flex: 0 0 auto;">{{ item.name }}</div>
                <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
                  <div style="border-radius: 20px!important;color: #cecece;padding: 0 6px 0 6px;border: solid 1px #cecece;font-size: 12px;height: 20px;flex: 0 0 auto;align-items: center;display: flex;" v-if="item.built_in">系统</div>
                </div>
              </div>
              <div class="td">{{ item.type | taskFieldType }}</div>
              <div class="td">所有项目</div>
              <div class="td op align-items-center" style="display: flex;">
                <div style="width: 30px;height: 2px;" v-if="item.built_in">
                  <div style="width: 100%;height: 100%;background-color: #e0e0e0;"></div>
                </div>
                <div style="font-weight: bolder;" v-else class="flex-row iop">
                  <div style="flex: 0 0 25px;" class="edit">
                    <svg t="1619924166378" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4971" width="14" height="14"><path d="M791.672471 90.352941l144.865882 144.926118a120.470588 120.470588 0 0 1 0 170.345412l-61.379765 61.379764a60.235294 60.235294 0 0 1-85.172706 0l-230.098823-230.098823a60.235294 60.235294 0 0 1 0-85.172706l61.44-61.31953a120.470588 120.470588 0 0 1 170.345412 0zM15.058824 951.597176V769.204706a30.117647 30.117647 0 0 1 51.440941-21.263059l212.449882 212.389647a30.117647 30.117647 0 0 1-21.323294 51.440941H75.354353a60.235294 60.235294 0 0 1-60.235294-60.235294z" fill="#4A4A4A" p-id="4972"></path><path d="M485.821971 225.847946m42.592785 42.592785l230.043631 230.043632q42.592785 42.592785 0 85.18557l-293.080953 293.080953q-42.592785 42.592785-85.18557 0l-230.043631-230.043632q-42.592785-42.592785 0-85.18557l293.080953-293.080953q42.592785-42.592785 85.18557 0Z" fill="#4A4A4A" p-id="4973"></path><path d="M548.901885 793.226434l-146.561773 146.561773a60.235294 60.235294 0 0 1-64.826218 13.45932A133.722353 133.722353 0 0 1 548.859293 793.183842zM87.110911 624.559006l146.51918-146.51918a133.722353 133.722353 0 0 1-159.850722 211.302806A60.054588 60.054588 0 0 1 87.110911 624.559006l146.51918-146.51918z" fill="#4A4A4A" p-id="4974"></path><path d="M296.710006 730.231706m-94.555983-94.555983a133.722353 133.722353 0 1 0 189.111965 189.111965 133.722353 133.722353 0 1 0-189.111965-189.111965Z" fill="#4A4A4A" p-id="4975"></path></svg>
                  </div>
                  <div style="flex: 0 0 25px;margin-left: 10px;" class="del">
                    <svg t="1619924410274" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7191" width="14" height="14"><path d="M799.232 874.402909c0 34.397091-27.973818 62.370909-62.370909 62.370909H287.232c-34.443636 0-62.370909-27.927273-62.370909-62.370909V212.014545h574.370909v662.341819zM349.602909 99.979636c0-7.168 5.632-12.8 12.846546-12.8h299.985454a12.567273 12.567273 0 0 1 12.8 12.8v37.608728H349.602909v-37.608728z m636.834909 37.608728h-236.776727v-37.608728A87.412364 87.412364 0 0 0 662.388364 12.8H362.449455a87.412364 87.412364 0 0 0-87.179637 87.179636v37.608728H37.608727a37.562182 37.562182 0 1 0 0 75.217454h111.988364v661.597091a137.588364 137.588364 0 0 0 137.588364 137.588364h449.62909a137.588364 137.588364 0 0 0 137.588364-137.588364V212.014545h111.988364c20.805818 0 37.608727-16.802909 37.608727-37.608727 0-20.805818-16.756364-36.770909-37.608727-36.770909zM512.046545 823.994182c20.805818 0 37.608727-16.756364 37.608728-37.608727V386.420364a37.562182 37.562182 0 1 0-75.217455 0v399.965091c0 20.805818 16.802909 37.608727 37.608727 37.608727m-175.19709 0c20.805818 0 37.608727-16.756364 37.608727-37.608727V386.420364a37.562182 37.562182 0 1 0-75.217455 0v399.965091c0.791273 20.805818 17.594182 37.608727 37.608728 37.608727m350.394181 0c20.805818 0 37.655273-16.756364 37.655273-37.608727V386.420364a37.562182 37.562182 0 1 0-75.264 0v399.965091c0 20.805818 16.802909 37.608727 37.608727 37.608727" fill="#515151" p-id="7192"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../../utils/http";
import ProjectMangeHeader from '../../common/permission/header';
import Search from "../../common/form/search";

export default {
  data: function () {
    return {
      name: '',
      team: '',
      items: []
    };
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project_list();
  },
  methods: {
    project_list: function() {
      let self = this;
      http.post(this.urls.issue_type_field_list.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    }
  },
  components: {
    Search,
    ProjectMangeHeader
  }
};
</script>