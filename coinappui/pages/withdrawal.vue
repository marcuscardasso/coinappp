<template>
  <div>
    <div class="withdrawal">
        <Header />

        <div class="withdrawal__main">
            <AccountHeader />

            <div class="withdrawal__content">
                <div class="withdrawal__content--left">
                    <DashSidenav menuname="Withdrawal"/>
                </div>

                <div class="withdrawal__content--right">

                  <div class="withdrawal__dashboard">
                    <div class="withdrawal__dashboard--top">
                        <h1>Withdrawal</h1>
                        <div></div>
                    </div>

                    <Popup :popupmessage="popupmessage" :functiontorun="resetPopup" :popupmessageType="popupmessageType" v-if="popupmessage"/>

                    <div class="withdrawal__dashboard--content">
                      <div class="withdrawal__dashboard--form">
                        <div class="withdrawal__dashboard--formsection">
                          <div class="withdrawal__dashboard--formarea">
                            <label>Amount</label>
                            <div class="withdrawal__dashboard--forminput" ref="amount">
                              <input type="number" v-model="amount" />
                              <span class="usd">usd</span>
                            </div>
                          </div>
                          <div class="withdrawal__padding"></div>
                          <div class="withdrawal__dashboard--formarea">
                            <label>Bank Name</label>
                            <div class="withdrawal__dashboard--forminput" ref="bankname">
                              <input v-model="bankname"/>
                            </div>
                          </div>
                        </div>

                        <div class="withdrawal__dashboard--formsection">
                          <div class="withdrawal__dashboard--formarea">
                            <label>Account Number</label>
                            <div class="withdrawal__dashboard--forminput" ref="accountnumber">
                              <input v-model="accountnumber"/>
                            </div>
                          </div>
                        </div>

                        <div class="withdrawal__dashboard--formsection">
                          <div class="withdrawal__dashboard--formarea">
                            <label>Reason for withdrawal</label>
                            <div class="withdrawal__dashboard--forminput" ref="reasonforwithdrawal">
                              <textarea rows="4" cols="50" placeholder="" v-model="reasonforwithdrawal"></textarea>
                            </div>
                          </div>
                        </div>

                        <div class="withdrawal__dashboard--formsection">
                            <button @click="submit" v-if="!loading">Withdraw</button>
                            <button class="sending" v-if="loading">Sending...</button>
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
      error: false,
      amount: '',
      bankname: '',
      accountnumber: '',
      reasonforwithdrawal: '',
      loading: false,
    }
  },
  mixins: [userMixin, popupMixin],
  methods: {
    toggleInputClass(key) {
      this.$refs[`${key}`].style.border = `1px solid #000000`;
    },
    submit() {
      const {
        amount,
        bankname,
        accountnumber,
        reasonforwithdrawal
      } = this;

      const inputs = {
        amount,
        bankname,
        accountnumber,
        reasonforwithdrawal
      }

      for (const key in inputs) {
        if (inputs[key].length === 0) {
          this.$refs[`${key}`].style.border= `1px solid red`;

          this.error = true;
        }
      }

      if (!this.error) {
        this.withdrawApiRequest({
          amount,
          bankname,
          accountnumber,
          reasonforwithdrawal,
          requestType: 'withdrawal'
        })
      }
    },
    withdrawApiRequest(requestbody) {
      const user_token = JSON.parse(localStorage.getItem('cxetokenxtxtxt'));
      this.loading = true;

      fetch(`${this.baseUrl}/api/request`, {
        method: "POST",
        body: JSON.stringify(requestbody),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": user_token
        }
      }).then(response => {
        return response.json();
      }).then(json => {
         this.loading = false;
         this.popupmessageType = 'error';
         this.popupmessage = this.user.requirement;

        this.amount = '';
        this.bankname = '';
        this.accountnumber = '';
        this.reasonforwithdrawal = '';
      }).catch(err => console.log(err, 'there is an error'));
    }
  },
  watch: {
    amount: function() {
      this.toggleInputClass('amount');
      this.error = false;
    },
    bankname: function() {
      this.toggleInputClass('bankname');
      this.error = false;
    },
    accountnumber: function() {
      this.toggleInputClass('accountnumber');
      this.error = false;
    },
    reasonforwithdrawal: function() {
      this.toggleInputClass('reasonforwithdrawal');
      this.error = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

    .withdrawal {
        background: #fff;
        min-height: 100vh;
        color: #1d1d1b;
        position: relative;

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
            position: relative;
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
                flex-direction: column;
                align-items: flex-start;
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
                  margin-bottom: #{scaleValue(30)};
                  font-weight: 400;
              } 
            }
          }

          &--formsection {
            display: flex;
            margin-bottom: #{scaleValue(25)};

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

                &.sending {
                  opacity: .4;
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

            @media only screen and (max-width: 414px) { 
               width: #{scaleValue(1300)};
               margin-bottom: #{scaleValue(70)};
               padding: #{scaleValue(3)} #{scaleValue(40)};
            }

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

                @media only screen and (max-width: 414px) { 
                  width: #{scaleValue(200)};
                  font-size: #{scaleValue(50)};
                }
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

              @media only screen and (max-width: 414px) { 
                  height: #{scaleValue(600)};
                  font-size: #{scaleValue(55)};
              } 
            }
          }
        }
    }
</style>