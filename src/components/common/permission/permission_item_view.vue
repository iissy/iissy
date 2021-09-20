<template>
  <div style="margin-top: 30px;">
    <div style="font-size: 16px;">{{ title }}</div>
    <div style="color: #909090;">{{ desc }}</div>
    <div class="table" style="margin-top: 15px;">
      <div class="perm-row-header">
        <div class="th">以下成员域拥有此操作权限</div>
      </div>
      <div v-for="g in exist" :key="g.uuid" class="perm-row">
        <div class="td">{{ g.name }}</div>
        <div v-if="!g.read_only" class="td" style="flex: 0 0 60px;cursor: pointer;" @click="setDel(g.permission)">
          <b-icon icon="x" scale="1.5"></b-icon>
        </div>
      </div>
      <div class="perm-row flex-row" v-if="!exist || exist.length === 0">
        <div class="td justify-content-center align-items-center" style="text-align: center;padding-left: 0;">暂未添加成员</div>
      </div>
      <div class="perm-row">
        <div class="content">
          <div ref="permBody" class="select" :class="{open: visible}">
            <b-form-input @click="show" placeholder="搜索角色、用户组、部门、成员"/>
            <div style="position: absolute;" ref="layer" class="group per-box">
              <div v-for="item in items" :key="item.uuid">
                <div v-if="item.groups && item.groups.length > 0" style="color: #909090;" class="domain-group-header">
                  {{ item.title }}
                </div>
                <div style="background-color: #ffffff;">
                  <div class="domain-item" v-for="g in item.groups" :key="g.uuid" @click="setAdd(g.param, g.type)">
                    <span>{{ g. name }}</span>
                    <span v-if="item.isMember" style="margin-left: 5px;color: #909090;font-size: 12px;">({{ g.email }})</span>
                    <span v-if="!!g.desc" style="margin-left: 5px;color: #909090;font-size: 12px;">({{ g.desc }})</span>
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
export default {
  data: function () {
    return {
      visible: false,
    };
  },
  props: {
    title: String,
    desc: String,
    exist: Array,
    items: Array
  },
  methods: {
    setAdd: function (u, t) {
      let self = this;
      self.visible = false;
      self.$emit("add", u, t);
    },
    setDel: function (p) {
      this.$emit("del", p);
    },
    show () {
      let self = this;
      if (self.visible === true) {
        self.hide();
      } else {
        self.visible = true
        document.addEventListener('click', self.hidePanel, false)
      }
    },
    hide () {
      let self = this;
      self.visible = false
      document.removeEventListener('click', self.hidePanel, false)
    },
    hidePanel (e) {
      let self = this;
      if(self.$refs.permBody) {
        if (!self.$refs.permBody.contains(e.target)) {
          self.hide();
        }
      } else {
        self.hide();
      }
    }
  }
};
</script>

<style scoped>
.content {
  margin: 10px;
}
.content .select {
  width: 300px;
  height: 38px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
}
/*transform(缩放、旋转、平移)，显示的是最终效果，没有动画过程*/
/*transition是对元素本身的属性(比如：width、height)设置动画效果*/
.content .select:after {
  content: '';
  display: block;
  width: 7px;
  height: 7px;
  border-left: 2px #ccc solid;
  border-bottom: 2px #ccc solid;
  position: absolute;
  bottom: initial;
  top: 14px;
  right: 10px;
  transform: rotate(-45deg);
  /*transition: transform .3 ease-out,top .3s ease-out;*/
}
.content .select input {
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  width: 100%;
  color:#b0b0b0;
  padding-left: 5px;
  height: 100%;
}
/*设置下拉框收起时的高度过渡动画*/
.content .select .group {
  overflow-y: auto;
  width: 100%;
  top: 40px;
  left: 0;
  max-height: 0;
  margin: 0;
  padding: 0;
  background-color: #ff0000;
  opacity: 0;
  transition: opacity .5s cubic-bezier(0.17, 0.51, 0.51, 0.9);
}
.content .select .group .domain-group-header { padding: 0 15px;line-height: 34px;background-color: #f0f0f0; }
.content .select .group .domain-item { padding: 0 15px;line-height: 34px;cursor: pointer;overflow: hidden;text-overflow: ellipsis;white-space: nowrap; }
.content .select .domain-item:hover { background-color: rgba(51,143,229,0.1); }

/*下拉框展开时调用动画slide-down*/
/*transform-origin设置缩放下拉框的基点位置*/
.content .select.open .group {
  max-height: 272px;
  z-index: 999;
  opacity: 1;
}
/*设置展开时下拉箭头的旋转动画*/
.content .select.open:after {
  transform: rotate(-225deg);
  top: initial;
  bottom: 14px;
  transition: all .3s ease-in-out;
}

div.perm-row-header { flex: 0 0 auto;display: flex;border-bottom: 1px solid #eef2f7;border-top: 1px solid #eef2f7;background-color: #f8f8f8;font-weight: bolder; }
div.perm-row { flex: 0 1 auto;display: flex;border-bottom: 1px solid #eef2f7; }
</style>