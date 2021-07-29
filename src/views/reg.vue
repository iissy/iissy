<template>
  <div id="master">
    <div style="width: 100%;height: 100%;" class="flex-row align-items-center justify-content-center">
      <div style="position: relative;width: 1000px;height: 600px;background-color: #f0f0f0;overflow: hidden;" class="flex-row align-items-center justify-content-center">
        <div style="position: absolute;width: 800px;height: 600px;">
          <div style="position: absolute;color: rgba(255, 206, 86, 0.3);top: 60px;left: 180px;">
            <b-icon icon="circle-fill" scale="12"/>
          </div>
          <div style="position: absolute;color: rgba(75, 192, 192, 0.3);top: 50px;left: 20px;">
            <b-icon icon="circle-fill" scale="20"/>
          </div>
          <div style="position: absolute;color: rgba(0, 128, 0, 0.1);top: 280px;left: 790px;">
            <b-icon icon="circle-fill" scale="14"/>
          </div>
          <div style="position: absolute;color: rgba(0, 191, 255, 0.1);top: 480px;left: 100px;">
            <b-icon icon="circle-fill" scale="18"/>
          </div>
          <div style="position: absolute;color: rgba(255, 99, 132, 0.3);top: 480px;left: 650px;">
            <b-icon icon="circle-fill" scale="32"/>
          </div>
          <div style="position: absolute;color: rgba(153, 102, 255, 0.3);top: 450px;left: 430px;">
            <b-icon icon="circle-fill" scale="18"/>
          </div>
        </div>
        <div style="position: absolute;width: 900px;height: 500px;background-color: #ffffff;border-radius: 5px;padding: 30px;" class="flex-column">
          <div class="flex-row" style="height: 100%;">
            <div style="flex: 1 1 50%;padding: 0 30px 0 0;" class="flex-column">
              <div style="font-size: 18px;font-weight: 600;flex: 0 0 auto;" class="flex-row">请完善你的信息，免费创建试用团队</div>
              <div v-if="first_part" style="flex: 1;">
                <div class="flex-row align-items-center" style="padding: 30px 0;">
                  <div style="flex: 1 1 70%;">
                    <input type="text" v-model="s_mobile" class="reg-input" placeholder="请输入手机号码" autocomplete="off"/>
                  </div>
                  <div style="flex: 1 1 30%;text-align: right;">
                    <b-button variant="outline-primary" style="height: 40px;outline: none;box-shadow: none;">发送验证码</b-button>
                  </div>
                </div>
                <div class="flex-row align-items-center">
                  <input type="text" v-model="s_code" class="reg-input" placeholder="请输入 6 位数字验证码" autocomplete="off"/>
                </div>
                <div style="margin-top: 60px;color: #909090;" class="flex-row align-items-center justify-content-center">
                  <b-button variant="primary" style="height: 40px;width: 100%;outline: none;box-shadow: none;" @click="reg_next">提交验证</b-button>
                </div>
              </div>
              <div v-if="second_part" style="flex: 1;">
                <div class="flex-row align-items-center" style="padding: 15px 0;">
                  <input type="text" v-model="s_email" class="reg-input" placeholder="请输入您的邮箱" autocomplete="off"/>
                </div>
                <div class="flex-row align-items-center" style="padding: 15px 0;">
                  <input type="password" v-model="s_password" class="reg-input" placeholder="密码应为8-32位，必须同时包含数字字母" autocomplete="off"/>
                </div>
                <div class="flex-row align-items-center" style="padding: 15px 0;">
                  <input type="text" v-model="s_team_name" class="reg-input" placeholder="请输入团队名称" autocomplete="off"/>
                </div>
                <div style="margin-top: 60px;color: #909090;" class="flex-row align-items-center justify-content-center">
                  <b-button variant="primary" style="height: 40px;width: 100%;outline: none;box-shadow: none;" @click="create_team">创建团队</b-button>
                </div>
              </div>
              <div style="color: #909090;flex: 0 0 80px;">
                演示版，请输入合法的手机号码，邮箱等即可通过注册
              </div>
            </div>
            <div style="flex: 1 1 50%;border-left: 1px solid #e8e8e8;" class="flex-column justify-content-center">
              <div style="flex: 0 0 auto;">
                <div class="flex-row align-items-center">
                  <div style="flex: 0 0 auto;margin-left: 20px;">
                    <svg t="1604535926297" class="icon" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5606" width="25" height="25"><path d="M1150.244571 327.0656L925.2864 26.975086c-3.920457-5.880686-14.862629-9.0112-25.951086-9.0112-10.620343 0-21.211429 2.8672-25.980343 9.0112l-207.608685 282.799543c-24.488229 37.917257-12.522057 51.931429 34.552685 51.931428h103.892115c-0.468114 50.5856-3.364571 102.341486-7.753143 137.216-20.948114 167.087543-127.268571 211.646171-131.744914 213.577143-15.594057 6.436571-12.6976 29.9008 6.407314 29.9008 268.463543 0 331.103086-310.915657 340.757943-380.693943h103.8336c1.462857 0.117029 3.861943 0.292571 6.816914 0.292572 15.623314 0 46.021486-3.978971 27.735771-34.933029z" fill="#333333" p-id="5607"></path><path d="M600.736914 567.968914h-134.026971c0.585143-65.301943 4.271543-132.213029 9.947428-177.210514 27.092114-215.683657 164.308114-273.261714 170.130286-275.6608 20.187429-8.367543 16.384-38.619429-8.279771-38.619429-346.5216 0-427.446857 401.408-439.9104 491.461486H64.570514a88.4736 88.4736 0 0 0-8.894171-0.4096c-20.099657 0-59.392 5.090743-35.810743 45.143772l290.464914 387.452342c5.061486 7.606857 19.2512 11.644343 33.528686 11.644343 13.692343 0 27.4432-3.715657 33.440914-11.644343l268.0832-365.187657c31.685486-48.9472 16.1792-66.9696-44.6464-66.9696z" fill="#333333" p-id="5608"></path></svg>
                  </div>
                  <div style="flex: 0 0 auto;margin-left: 5px;">
                    <span style="font-size: 26px;font-weight: bold;color: #333333;letter-spacing: 3px;margin: 0 0 0 0;text-align: center;font-weight: 700;">Jitask</span>
                  </div>
                  <div style="flex: 0 0 auto;">
                    <svg t="1608034654856" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5182" width="32" height="32"><path d="M479.40136719 120.88671875h65.20605468v782.2265625h-65.20605468z" p-id="5183" fill="#2c2c2c"></path></svg>
                  </div>
                  <div style="font-size: 26px;font-weight: bold;color: #333333;">
                    创建团队
                  </div>
                </div>
              </div>
              <div style="padding-left: 30px;margin-top: 10px;opacity: 0.8;">
                <img src="/images/team.jpg" width="400" height="200"/>
              </div>
              <div style="flex: 1;" class="flex-column">
                <div style="flex: 0 0 auto;font-size: 16px;font-weight: 600;text-align: left;padding-left: 20px;padding-top: 10px;color: #333333;margin: 10px 0;">
                  您可以尝试 Jitask 全线产品的功能
                </div>
                <div v-for="item in items" :key="item.uuid" style="padding: 5px 0 5px 0;margin-left: 20px;" class="flex-row b-line align-items-center">
                  <div style="flex: 1;text-align: left;">
                    {{ item.name }}
                  </div>
                  <div style="flex: 0 0 auto;color: #1e7e34;">
                    <b-icon icon="check" scale="1.5"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="position: absolute;bottom: 10px;">
          <div style="flex: 0 0 60px;" class="flex-row align-items-center justify-content-center copyright">
            <div>
              Copyright ©2020 <a href="/">爱斯园</a>
            </div>
            <div style="margin-left: 5px;">
              <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2020117325号</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../utils/http";
import router from "../router";

export default {
  data: function () {
    return {
      s_mobile: '',
      s_code: '',
      s_email: '',
      s_password: '',
      s_team_name: '',
      first_part: true,
      second_part: false,
      items: [
        {uuid: 'a', name: '管理团队，部门，角色成员，任务管理，权限配置'},
        {uuid: 'c', name: '文档资料管理'},
        {uuid: 'd', name: '个人工作台查看个人任务情况'},
        {uuid: 'e', name: '成员工时报表，项目进展图标展示'}
      ]
    };
  },
  methods: {
    reg_next: function () {
      let self = this;
      self.first_part = false;
      self.second_part = true;
    },
    create_team: function () {
      let self = this;
      let username = "-";
      let objs = self.s_email.split("@");
      if (objs && objs.length === 2) {
        username = objs[0];
      }
      let data = {
        name: username,
        logo: '/images/touxiang.jpg',
        team_name: self.s_team_name,
        email: self.s_email,
        password: self.s_password,
        phone: '+' + self.s_mobile,
        phone_code: self.s_code,
        team_role: 'admin'
      };
      http.post(self.urls.team_create, data).then(function (response) {
        if (response.data.status) {
          router.push({ name: 'Master' });
        }
      });
    }
  },
  computed: {
  }
}
</script>

<style scoped>
#master { background-color: #e8e8e8; }
.enter a { color: #cccccc;letter-spacing: 2px; }
.copyright div,.copyright a { color: #909090;font-size: 12px;opacity: 0.6; }
.reg-input { border: 1px solid #e8e8e8;width: 100%;box-shadow: none;outline: none;height: 40px;padding-left: 10px;border-radius: 3px; }
</style>