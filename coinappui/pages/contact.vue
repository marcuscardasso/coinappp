<template>
  <div>
    <div class="contact">
        <Header />

        <div class="contact__main">
            <div class="contact__main--left">
                <h2>Contact Us</h2>
                <h4>Cxefinance LTD</h4>
                <span>Our Head Office: 128 Aldersgate Street, Barbican, London, England, EC1A 4AE.</span>
                <span>Cxefinance is a highly established online trading platform, offering leveraged trading experience in five global markets, such as Cryptocurrencies, Stocks, Indices, Commodities and FOREX. The company was founded in 2012 in London (United Kingdom), focusing primarily on providing CFD platform to retail investors. At the moment, over 10000 traders worldwide enjoy having access to over 150 assets and taking advantage of market movements.</span>
            </div>
            <div class="contact__main--right">
              <Popup :popupmessage="popupmessage" :functiontorun="resetPopup" :messageType="popupmessageType" v-if="popupmessage"/>
                <div class="contact__form">
                    <div class="contact__form--area">
                        <div class="contact__form--input">
                            <input placeholder="Full Name" v-model="fullname" ref="fullname"/>
                        </div>
                        <div class="contact__form--input">
                            <input type="email" placeholder="Email" v-model="email" ref="email"/>
                        </div>
                    </div>
                    <div class="contact__form--area">
                        <div class="contact__form--input">
                            <input placeholder="Subject" v-model="subject" ref="subject"/>
                        </div>
                        <div class="contact__form--input">
                            <input placeholder="Phone" v-model="phone" ref="phone"/>
                        </div>
                    </div>
                    <div class="contact__form--area">
                        <div class="contact__form--input">
                            <textarea rows="4" cols="50" placeholder="Message" v-model="message" ref="message"></textarea>
                        </div>
                    </div>
                    <div class="contact__form--area">
                        <button @click="submit" v-if="!loading">Submit</button>
                        <button class="loading" v-if="loading">Sending...</button>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <FinanceLogos />
        </div>

        <div class="padding">
            <Footer />
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
      fullname: '',
      email: '',
      subject: '',
      phone: '',
      message: '',
      error: false,
      loading: false,
    }
  },
  mixins: [userMixin, popupMixin],
  methods: {
    toggleInputClass(key) {
      this.$refs[`${key}`].style.borderBottom = `1px solid #000000`;
    },
    openpage(route) {
      if (route.length) {
        this.$router.push(`/${route}`)
      } else {
        this.$router.push(`/`)
      }
    },
    contactRequest(requestbody) {
      this.loading = true;

      fetch(`${this.baseUrl}/api/contact`, {
          method: "POST",
          body: JSON.stringify(requestbody),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(res => res.json())
        .then(json => {
          this.popupmessage = `Hello, ${json.contact.fullname}, ${json.message}`;
          this.loading = false;

          this.fullname = '';
          this.email = '';
          this.subject = '';
          this.phone = '';
          this.message = '';
        }).catch(err => {
          console.log(err)
          this.loading = false;
        })
    },
    submit() {
      const {
        fullname,
        email,
        subject,
        phone,
        message
      } = this;

      const inputs = {
        fullname,
        email,
        subject,
        phone,
        message,
      }

      for (const key in inputs) {
        if (inputs[key].length === 0) {
          this.$refs[`${key}`].style.borderBottom = `1px solid red`;

          this.error = true;
        }
      }

      if (!this.error) {
        this.contactRequest({
          email,
          fullname,
          message,
          phone
        })
      }
    }
  },
  watch: {
    fullname: function() {
      this.toggleInputClass('fullname');
      this.error = false;
    },
    email: function() {
      this.toggleInputClass('email');
      this.error = false;
    },
    subject: function() {
      this.toggleInputClass('subject');
      this.error = false;
    },
    phone: function() {
      this.toggleInputClass('phone');
      this.error = false;
    },
    message: function() {
      this.toggleInputClass('message');
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

.padding {
  padding: #{scaleValue(10)} #{scaleValue(150)};
}

.contact {
  background: #fff;
  min-height: 100vh;
  color: #1d1d1b;

  &__main {
      display: flex;
      justify-content: space-between;
      padding: #{scaleValue(20)} #{scaleValue(150)};
      padding-top: #{scaleValue(150)};

      @media only screen and (max-width: 414px) { 
        flex-direction: column;
      }

      &--left {
          width: #{scaleValue(600)};

          @media only screen and (max-width: 414px) { 
             width: 100%;
          }

          & h2 {
              font-weight: 400;
              font-size: #{scaleValue(37)};
              line-height: #{scaleValue(43)};
              margin-bottom: #{scaleValue(25)};

              @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(120)};

                margin-bottom: #{scaleValue(120)};
              }
          }

          & h4 {
            font-weight: 400;
            font-size: #{scaleValue(20)};
            line-height: #{scaleValue(43)};
            margin-bottom: #{scaleValue(25)};

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(60)};
            }
          }

          & span {
            display: inline-block;
            font-size: #{scaleValue(17)};
            margin-bottom: #{scaleValue(20)};
            line-height: #{scaleValue(27)};

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(60)};
                font-weight: 300;
                line-height: #{scaleValue(100)};
                margin-bottom: #{scaleValue(100)};
            }
          }
      }

      &--right {
          width: #{scaleValue(600)};

          @media only screen and (max-width: 414px) { 
             width: 100%;
          }
      }
  }

  &__form {
      box-shadow: -14px -4px 40px -8px rgba(0,0,0,0.33);
      -webkit-box-shadow: -14px -4px 40px -8px rgba(0,0,0,0.33);
      -moz-box-shadow: -14px -4px 40px -8px rgba(0,0,0,0.33);
      padding: #{scaleValue(50)} #{scaleValue(35)};
      border-radius: .5rem;  

      @media only screen and (max-width: 414px) { 
        padding: #{scaleValue(90)} #{scaleValue(70)};
      }      

      &--area {
          display: flex;
          justify-content: space-between;
          margin-top: #{scaleValue(30)};

          @media only screen and (max-width: 414px) { 
            flex-direction: column;
          } 

          & button {
                color: #fff;
                background: #fd4f31;

                border: 1px solid #fd4f31;
                border-radius: 3rem;
                padding: #{scaleValue(15)} #{scaleValue(35)};
                font-size: #{scaleValue(17)};
                cursor: pointer;

                &.loading {
                  opacity: .3;
                }

                @media only screen and (max-width: 414px) { 
                    margin-top: #{scaleValue(100)};
                    font-size: #{scaleValue(70)};
                    padding: #{scaleValue(50)} #{scaleValue(100)};
                }
            }
      }

      &--input {

          & input, textarea {
              outline: none;
              border: none;
              font-size: #{scaleValue(15)};
              padding: #{scaleValue(20)} #{scaleValue(6)};
              border-bottom: 1px solid #000000;
              padding-bottom: #{scaleValue(10)};

          }

          & input {
              width: #{scaleValue(250)};
              font-size: #{scaleValue(15)};

              @media only screen and (max-width: 414px) { 
                width: 100%;
                font-size: #{scaleValue(60)};
                padding: #{scaleValue(30)} #{scaleValue(20)};
                margin-bottom: #{scaleValue(120)};
              } 
          }

          & textarea {
              width: #{scaleValue(530)};
              font-size: #{scaleValue(15)};

              @media only screen and (max-width: 414px) { 
                width: 100%;
                font-size: #{scaleValue(60)};
                padding: #{scaleValue(30)} #{scaleValue(20)};
                margin-bottom: #{scaleValue(120)};
              } 
          }
      }
  }
}
</style>
