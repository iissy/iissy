<template>
  <div>
    <div class="app-row">
      <Menu></Menu>
      <div class="rightMain">
        <Header title="个人中心"></Header>
        <div class="app-main-container">
          <div class="app-main-no-border">
            <div style="display: flex;flex-direction: row;height: 100%;">
              <personal tagIndex="2"></personal>
              <div style="background-color: #ffffff;flex: 1 1 auto;padding: 20px;height: 100%;box-shadow: 0 4px 6px 0 rgba(31,31,31,0.05), 0 0 2px 0 rgba(31,31,31,0.2);">
                <div style="font-size: 18px;">安全设置</div>
                <div style="border: 1px solid #dedede;margin-top: 20px;">
                  <div style="display: flex;flex-direction: row;padding: 20px;">
                    <div style="flex: 0 0 auto;width: 100px;">
                      <div style="display: flex;flex: 1;flex-direction: column;align-items: center;justify-content: center;vertical-align: middle;align-items: center;">
                        <svg t="1600093044171" class="icon" viewBox="0 0 1536 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="48" height="48"><path d="M1450.666667 0H85.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v51.2l724.48 434.346667a85.333333 85.333333 0 0 0 85.333333 0L1536 136.533333V85.333333a85.333333 85.333333 0 0 0-85.333333-85.333333zM682.666667 715.093333L0 307.2V938.666667a85.333333 85.333333 0 0 0 85.333333 85.333333h1365.333334a85.333333 85.333333 0 0 0 85.333333-85.333333V307.2l-682.666667 407.893333a170.666667 170.666667 0 0 1-170.666666 0z" fill="#FAB200" p-id="2746"></path></svg>
                      </div>
                    </div>
                    <div style="flex: 1;margin-left: 20px;">
                      <div style="font-size: 15px;">邮箱确认(pinbor@iissy.com)</div>
                      <div style="color: #aaaaaa;">请收到邮件后，点击邮箱里面确认连接</div>
                    </div>
                    <div style="flex: 0 0 auto;">
                      <div style="display: flex;flex: 1;flex-direction: column;align-items: center;justify-content: center;vertical-align: middle;align-items: center;height: 100%;">
                        <svg t="1600095238628" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4907" width="32" height="32"><path d="M682.666667 533.333333a21.333333 21.333333 0 0 1-15.146667-6.186666l-298.666667-298.666667a21.333333 21.333333 0 0 1 30.293334-30.293333l298.666666 298.666666a21.333333 21.333333 0 0 1 0 30.293334A21.333333 21.333333 0 0 1 682.666667 533.333333z" fill="#333333" p-id="4908"></path><path d="M384 832a21.333333 21.333333 0 0 1-15.146667-6.186667 21.333333 21.333333 0 0 1 0-30.293333l298.666667-298.666667a21.333333 21.333333 0 0 1 30.293333 30.293334l-298.666666 298.666666A21.333333 21.333333 0 0 1 384 832z" fill="#333333" p-id="4909"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div style="display: flex;flex-direction: row;padding: 20px;border-top: 1px solid #dedede;">
                    <div style="flex: 0 0 auto;width: 100px;">
                      <div style="display: flex;flex: 1;flex-direction: column;align-items: center;justify-content: center;vertical-align: middle;align-items: center;">
                        <svg t="1600123151164" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5723" width="48" height="48"><path d="M654.990991 196.036036H371.315315c-25.945946 0-47.279279 21.333333-47.279279 47.279279s21.333333 47.279279 47.279279 47.27928h283.675676c25.945946 0 47.279279-21.333333 47.279279-47.27928s-21.333333-47.279279-47.279279-47.279279z m173.54955-189.693694H197.765766c-69.765766 0-126.27027 56.504505-126.270271 126.270271v757.045045c0 69.765766 56.504505 126.27027 126.270271 126.27027h630.774775c69.765766 0 126.27027-56.504505 126.27027-126.27027V132.612613c-0.576577-69.765766-56.504505-126.27027-126.27027-126.270271z m31.135135 851.603604c0 34.594595-28.252252 62.846847-62.846847 62.846847H229.477477c-34.594595 0-62.846847-28.252252-62.846846-62.846847V164.324324c0-34.594595 28.252252-62.846847 62.846846-62.846847h567.351352c34.594595 0 62.846847 28.252252 62.846847 62.846847v693.621622zM513.153153 731.675676c-34.594595 0-62.846847 28.252252-62.846847 62.846847S478.558559 857.369369 513.153153 857.369369s62.846847-28.252252 62.846847-62.846846S547.747748 731.675676 513.153153 731.675676z" fill="#2185F5" p-id="5724"></path></svg>
                      </div>
                    </div>
                    <div style="flex: 1;margin-left: 20px;">
                      <div style="font-size: 15px;">手机确认</div>
                      <div style="color: #aaaaaa;">通过手机认证码确认手机号码</div>
                    </div>
                    <div style="flex: 0 0 auto;">
                      <div style="display: flex;flex: 1;flex-direction: column;align-items: center;justify-content: center;vertical-align: middle;align-items: center;height: 100%;">
                        <svg t="1600095238628" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4907" width="32" height="32"><path d="M682.666667 533.333333a21.333333 21.333333 0 0 1-15.146667-6.186666l-298.666667-298.666667a21.333333 21.333333 0 0 1 30.293334-30.293333l298.666666 298.666666a21.333333 21.333333 0 0 1 0 30.293334A21.333333 21.333333 0 0 1 682.666667 533.333333z" fill="#333333" p-id="4908"></path><path d="M384 832a21.333333 21.333333 0 0 1-15.146667-6.186667 21.333333 21.333333 0 0 1 0-30.293333l298.666667-298.666667a21.333333 21.333333 0 0 1 30.293333 30.293334l-298.666666 298.666666A21.333333 21.333333 0 0 1 384 832z" fill="#333333" p-id="4909"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div style="display: flex;flex-direction: row;padding: 20px;border-top: 1px solid #dedede;">
                    <div style="flex: 0 0 auto;width: 100px;">
                      <div style="display: flex;flex: 1;flex-direction: column;align-items: center;justify-content: center;vertical-align: middle;align-items: center;">
                        <svg t="1600123506120" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6528" width="48" height="48"><path d="M893.632 382.976h-127.616V255.36a255.36 255.36 0 1 0-510.72 0v127.68H127.68A127.552 127.552 0 0 0 0 510.656v382.976c0 70.528 57.152 127.68 127.68 127.68h765.952a127.744 127.744 0 0 0 127.744-127.68V510.656a127.744 127.744 0 0 0-127.744-127.68zM319.168 255.36a191.424 191.424 0 1 1 382.976 0v127.68H319.168V255.36z m638.336 638.336a63.872 63.872 0 0 1-63.872 63.872H127.68a63.872 63.872 0 0 1-63.872-63.872V510.656c0-35.264 28.544-63.872 63.872-63.872h765.952c35.328 0 63.872 28.608 63.872 63.872v383.04zM510.656 542.592a95.488 95.488 0 1 0-31.872 185.664v133.568h63.808v-133.568a95.36 95.36 0 0 0 63.808-89.856c0-52.992-42.88-95.808-95.744-95.808z m0 143.68a47.936 47.936 0 1 1 0.128-95.872 47.936 47.936 0 0 1-0.128 95.872z" fill="#27D400" p-id="6529"></path></svg>
                      </div>
                    </div>
                    <div style="flex: 1;margin-left: 20px;">
                      <div style="font-size: 15px;">设置密码</div>
                      <div style="color: #aaaaaa;">必须先设置邮箱确认或者手机确认，才可以设置密码，设置密码后就可以凭邮箱或者手机登陆系统</div>
                    </div>
                    <div style="flex: 0 0 auto;">
                      <div style="display: flex;flex: 1;flex-direction: column;align-items: center;justify-content: center;vertical-align: middle;align-items: center;height: 100%;">
                        <svg t="1600095238628" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4907" width="32" height="32"><path d="M682.666667 533.333333a21.333333 21.333333 0 0 1-15.146667-6.186666l-298.666667-298.666667a21.333333 21.333333 0 0 1 30.293334-30.293333l298.666666 298.666666a21.333333 21.333333 0 0 1 0 30.293334A21.333333 21.333333 0 0 1 682.666667 533.333333z" fill="#333333" p-id="4908"></path><path d="M384 832a21.333333 21.333333 0 0 1-15.146667-6.186667 21.333333 21.333333 0 0 1 0-30.293333l298.666667-298.666667a21.333333 21.333333 0 0 1 30.293333 30.293334l-298.666666 298.666666A21.333333 21.333333 0 0 1 384 832z" fill="#333333" p-id="4909"></path></svg>
                      </div>
                    </div>
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
import Header from '../component/common/header';
import Menu from '../component/common/menu';
import Personal from '../component/center/personal';

export default {
  data: function () {
    return {
    };
  },
  components: {
    Header,
    Menu,
    Personal
  },
  created: function () {
  },
  methods: {
    add: function () {
    }
  }
};
</script>