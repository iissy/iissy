<template>
    <div>
      <div class="app-row">
        <Menu tagIndex="81"></Menu>
        <div class="rightMain">
          <Header title="团队配置中心"></Header>
          <div class="app-main-container">
            <div class="app-main-content">
              <div>
                <div v-for="d in departmentTree" v-bind:key="d.id">
                  <div>
                    <div>{{d.name}}</div>
                    <div style="margin-left: 20px;" v-for="c in d.children" v-bind:key="c.id">
                      <div>{{c.name}}</div>
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
    import Header from '../../components/header';
    import Menu from '../../components/menu';
    import http from '../../util/httper';

    export default {
        data: function () {
            return {
              departmentTree: {}
            };
        },
        components: {
            Header,
            Menu
        },
        created: function () {
          let self = this;
          let url = '/api/ding/get_department_list';
          http.get(url).then(function (response) {
            self.departmentTree = response;
          });
        },
        methods: {
        }
    };
</script>