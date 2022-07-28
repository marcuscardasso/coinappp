<template>
  <div>
    <div class="password">
        <Header />

        <div class="password__main">
            <AccountHeader />

            <div class="password__content">
                <div class="password__content--left">
                    <DashSidenav menuname="Password"/>
                </div>

                <div class="password__content--right">
                 <Popup :popupmessage="popupmessage" :functiontorun="resetPopup" :popupmessageType="popupmessageType" v-if="popupmessage"/>

                  <div class="password__dashboard">
                    <div class="password__dashboard--top">
                        <h1>Change your Password</h1>
                        <div></div>
                    </div>

                    <div class="password__dashboard--content">
                      <div class="password__dashboard--form">

                        <div class="password__dashboard--formsection">
                          <div class="password__dashboard--formarea">
                            <label>Old Password</label>
                            <div class="password__dashboard--forminput" ref="oldpassword">
                              <input v-model="oldpassword" type="password"/>
                            </div>
                          </div>
                        </div>

                        <div class="password__dashboard--formsection">
                          <div class="password__dashboard--formarea">
                            <label>New Password</label>
                            <div class="password__dashboard--forminput" ref="newpassword">
                              <input v-model="newpassword" type="password"/>
                            </div>
                          </div>
                        </div>

                        <div class="password__dashboard--formsection">
                          <div class="password__dashboard--formarea">
                            <label>Confirm New Password</label>
                            <div class="password__dashboard--forminput" ref="confirmnewpassword">
                              <input v-model="confirmnewpassword" type="password"/>
                            </div>
                          </div>
                        </div>

                        <div class="password__dashboard--formsection">
                            <button @click="submitpasswordChange" v-if="!loading">Submit</button>
                            <button class="loading" v-if="loading">Loading...</button>
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
import userMixin from '@/mixins/user.js';
import popupMixin from '@/mixins/popup.js';
export default {
  data() {
    return {
      loading: false,
      error: false,
      message: false,
      confirmpassVisible: false,
      oldpasswordVisible: false,
      newpasswordVisible: false,
      oldpassword: '',
      newpassword: '',
      confirmnewpassword: ''
    }
  },
  methods: {
    toggleInputClass(key) {
      this.$refs[`${key}`].style.border = `1px solid #000000`;
    },
    toggleVisibility(password) {

      if (password === 'conf') {
        this.confirmpassVisible ? this.confirmpassVisible = false : this.confirmpassVisible = true;
      }

      if (password === 'old') {
        this.oldpasswordVisible ? this.oldpasswordVisible = false : this.oldpasswordVisible = true;
      }

      if (password === 'new') {
        this.newpasswordVisible ? this.newpasswordVisible = false : this.newpasswordVisible = true;
      }
    },
    submitpasswordChange() {
      const {
        oldpassword,
        newpassword,
        confirmnewpassword
      } = this;

      const inputs = {
        oldpassword,
        newpassword,
        confirmnewpassword
      }

      for (const key in inputs) {
        if (inputs[key].length === 0) {
          this.$refs[`${key}`].style.border = `1px solid red`;

          this.error = true;
        }
      }

        if (oldpassword && newpassword && confirmnewpassword && !this.error) {
          if (newpassword !== confirmnewpassword) {
            this.popupmessage = 'confirm password should be the same as new password';
            this.popupmessageType = 'error';
          } else {

            if (newpassword.length <= 8) {
              this.popupmessage = 'password should be more than 9 characters';
              this.popupmessageType = 'error';
            } else {
              const user_token = localStorage.getItem('cxetokenxtxtxt')

              if (user_token !== null && user_token !== undefined) {
                const { email } = this.user;
                this.loading = true;
                fetch(`${this.baseUrl}/api/edituserpw`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        email,
                        oldpassword,
                        newpassword
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Authorization": user_token
                    }
                }).then(res => {
                  return res.json();
                }).then(json => {
                  const { message } = json;
                  if (message === 'password changed') {
                    this.popupmessage = 'Password changed successfully'
                    this.popupmessageType = 'success';
                    this.loading = false;                  
                  } else {
                    this.popupmessage = 'wrong password, did you forget your password?';
                    this.popupmessageType = 'error';
                    this.loading = false;
                  }
                }).catch(err => {
                  console.log(err.json);
                })
              }
            }            
          }
        } else {
          this.error = 'please fill out all the inputs';
        }
    } 
  },
  mixins: [userMixin, popupMixin],
  watch: {
    oldpassword: function() {
      this.toggleInputClass('oldpassword');
      this.error = false;
    },
    newpassword: function() {
      this.toggleInputClass('newpassword');
      this.error = false;
    },
    confirmnewpassword: function() {
      this.toggleInputClass('confirmnewpassword');
      this.error = false;
    },
  }
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

    .password {
        background: #fff;
        min-height: 100vh;
        color: #1d1d1b;

        &__padding {
            padding: 0 #{scaleValue(10)};
        }

        &__main {
          padding: #{scaleValue(20)} #{scaleValue(150)};
        }

        &__content {
          display: flex;
          padding: #{scaleValue(100)} 0;
          justify-content: space-between;

          @media only screen and (max-width: 414px) { 
            flex-direction: column;
          }

          &--right {
            width: #{scaleValue(1000)};

            @media only screen and (max-width: 414px) { 
              width: #{scaleValue(1300)};
            }
          }

          &--error {
            position: relative;
            background: rgba(255, 68, 51, .4);
            color: red;
            padding: #{scaleValue(20)} #{scaleValue(20)};
            font-size: #{scaleValue(16)};

            & span { 
              display: inline-block;

              &.close {
                cursor: pointer;
                border-radius: 100%;
                position: absolute;
                right: #{scaleValue(5)};
                top: #{scaleValue(5)};
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: #{scaleValue(13)};
                background: rgba(255, 68, 51, .4);
                width: #{scaleValue(20)};
                height: #{scaleValue(20)};
                padding: #{scaleValue(10)};
              }
            }
          }
        }

        &__dashboard {

          &--top {
            position: relative;
            padding-bottom: #{scaleValue(13)};
            margin: #{scaleValue(20)} 0;

            @media only screen and (max-width: 414px) { 
               margin-bottom: #{scaleValue(100)};
            } 

            &::before {
              position: absolute;
              content: '';
              left: 0;
              bottom: 0;
              width: 100%;
              height: #{scaleValue(.7)};
              background: #000000;
            }
          }

          & h1 {
            font-weight: 500;
            font-size: #{scaleValue(23)};
            letter-spacing: #{scaleValue(1)};
            text-transform: uppercase;

            @media only screen and (max-width: 414px) { 
              font-size: #{scaleValue(80)};
              font-weight: 400;
            }
          }

          &--content {
            display: flex;
            flex-direction: column;
          }
        
          &--formsection {
            display: flex;
            justify-content: space-between;

            @media only screen and (max-width: 414px) { 
               margin-bottom: #{scaleValue(50)};
            }
          }

          &--formarea {
            display: flex;
            flex-direction: column;
            flex-grow: 1;

            & label {
              display: inline-block;
              font-size: #{scaleValue(14)};
              color: #fd4f31;
              font-weight: 600;
              margin-bottom: #{scaleValue(10)};

              @media only screen and (max-width: 414px) { 
                  font-size: #{scaleValue(58)};
                  margin-bottom: #{scaleValue(50)};
                  font-weight: 400;
              } 
            }
          }

          &--formsection {
            display: flex;
            margin-bottom: #{scaleValue(25)};

            @media only screen and (max-width: 414px) { 
                margin-bottom: #{scaleValue(100)};
            }

            & button {
                border: 1px solid #fd4f31;
                border-radius: 3rem;
                padding: #{scaleValue(10)} #{scaleValue(35)};
                color: #fd4f31;
                font-size: #{scaleValue(17)};
                cursor: pointer;

                background: #fd4f31;
                color: #fff;
                margin-right: #{scaleValue(30)};

                &.loading {
                  opacity: .3;
                }

                @media only screen and (max-width: 414px) { 
                    height: #{scaleValue(210)}; 
                    font-size: #{scaleValue(65)};
                    padding: #{scaleValue(10)} #{scaleValue(100)};
                }
              }
          }

          &--forminput {
            position: relative;
            flex-grow: 1;
            border: 1px solid #000000;
            border-radius: .4rem;
            overflow: hidden;
            padding: #{scaleValue(3)} #{scaleValue(10)};

            & span {
              display: inline-block;

              &.usd {
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                width: #{scaleValue(50)};
                font-size: #{scaleValue(10)};
                font-weight: 700;
                text-transform: uppercase;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                background: #fff;
              }
            }

            & input {
              width: 100%;
              outline: none;
              border: none;
              height: #{scaleValue(30)};
              font-size: #{scaleValue(15)};

              @media only screen and (max-width: 414px) { 
                  height: #{scaleValue(170)};
                  font-size: #{scaleValue(55)};
              } 
            }

            & textarea {
              width: 100%;
              outline: none;
              border: none;
              height: #{scaleValue(100)};
              font-size: #{scaleValue(15)};
            }
          }
        }
    }
</style>