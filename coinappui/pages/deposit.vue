<template>
  <div>
    <div class="deposit">
        <Header />

        <div class="deposit__main">
            <AccountHeader />

            <div class="deposit__content">
                <div class="deposit__content--left">
                    <DashSidenav menuname="Deposit"/>
                </div>

                <div class="deposit__content--right">
                    <div class="deposit__popupbody">
                        <Popup :popupmessage="popupmessage" :functiontorun="resetPopup" :popupmessageType="popupmessageType" v-if="popupmessage"/>
                    </div>
                    <figure class="deposit__content--neobanq">
                        <img src='@/assets/imgs/clearing-neobanq.png'/>
                    </figure>
                    <div class="deposit__content--form">
                        <div class="deposit__content--formsection">
                            <h4>Amount</h4>
                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea amount">
                                    <span class="deposit__content--forminput" ref="amount">
                                        <input placeholder="Amount" class="amount" v-model="amount"/>
                                    </span>
                                    <div class="deposit__content-util-input-margin"></div>
                                    <span class="sign">USD</span>
                                    <div class="deposit__content-util-input-margin"></div>
                                    <span class="minimum">Minimum deposit is  1000 USD</span>
                                </div>
                            </div>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>Credit card type</label>
                                    <span class="deposit__content--forminput" ref="cardtype">
                                        <input placeholder="Select card type" v-model="cardtype"/>
                                    </span>
                                </div>
                            </div>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>Credit card number</label>
                                    <span class="deposit__content--forminput" ref="cardnumber">
                                        <input placeholder="Credit card number" v-model="cardnumber"/>
                                    </span>
                                </div>
                            </div>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>Expiry month</label>
                                    <span class="deposit__content--forminput" ref="cardexpirymonth">
                                        <input placeholder="Expiry month" v-model="cardexpirymonth"/>
                                    </span>
                                </div>

                                <div class="deposit__content--forminputarea middle">
                                    <label>Expiry year</label>
                                    <span class="deposit__content--forminput" ref="cardexpiryyear">
                                        <input placeholder="Expiry year" v-model="cardexpiryyear"/>
                                    </span>
                                </div>

                                <div class="deposit__content--forminputarea">
                                    <label>CVV</label>
                                    <span class="deposit__content--forminput" ref="cvv">
                                        <input placeholder="Cvv" v-model="cvv"/>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="deposit__content--formsection">
                            <h4>Card Holder Details</h4>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>First Name on Card</label>
                                    <span class="deposit__content--forminput" ref="cardfirstname">
                                        <input placeholder="First Name on Card" v-model="cardfirstname"/>
                                    </span>
                                </div>
                                <div class="deposit__content-util-input-margin"></div>
                                 <div class="deposit__content--forminputarea">
                                    <label>Last Name on Card</label>
                                    <span class="deposit__content--forminput" ref="cardlastname">
                                        <input placeholder="Last Name on Card" v-model="cardlastname"/>
                                    </span>
                                </div>
                            </div>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>Country</label>
                                    <span class="deposit__content--forminput" ref="country">
                                        <input placeholder="Country" v-model="country"/>
                                    </span>
                                </div>
                            </div>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>City</label>
                                    <span class="deposit__content--forminput" ref="city">
                                        <input placeholder="City" v-model="city"/>
                                    </span>
                                </div>
                                <div class="deposit__content-util-input-margin"></div>
                                <div class="deposit__content--forminputarea">
                                    <label>Address</label>
                                    <span class="deposit__content--forminput" ref="address">
                                        <input placeholder="Address" v-model="address"/>
                                    </span>
                                </div>
                            </div>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>State</label>
                                    <span class="deposit__content--forminput" ref="state">
                                        <input placeholder="State" v-model="state"/>
                                    </span>
                                </div>
                                <div class="deposit__content-util-input-margin"></div>
                                <div class="deposit__content--forminputarea">
                                    <label>Zip code</label>
                                    <span class="deposit__content--forminput" ref="zipcode">
                                        <input placeholder="Zip code" v-model="zipcode"/>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="deposit__content--formarea">
                            <button v-if="!loading" @click="submit">Deposit</button>
                            <button v-if="loading" class="loading">Loading...</button>
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
            message: false,
            amount: '',
            cardtype: '',
            cardnumber: '',
            cardexpirymonth: '',
            cardexpiryyear: '',
            cvv: '',
            cardfirstname: '',
            cardlastname: '',
            country: '',
            city: '',
            address: '',
            state: '',
            zipcode: '',
            loading: false
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
                cardtype,
                cardnumber,
                cardexpirymonth,
                cardexpiryyear,
                cvv,
                cardfirstname,
                cardlastname,
                country,
                city,
                address,
                state,
                zipcode
            } = this;

            const inputs = {
                amount,
                cardtype,
                cardnumber,
                cardexpirymonth,
                cardexpiryyear,
                cvv,
                cardfirstname,
                cardlastname,
                country,
                city,
                address,
                state,
                zipcode
            };

            for (const key in inputs) {
                if (inputs[key].length === 0) {
                    this.$refs[`${key}`].style.border = `1px solid red`;

                    this.error = true;
                }
            }

            if (!this.error) {
                this.depositApiRequest({
                    amount,
                    cardtype,
                    cardnumber,
                    cardexpirymonth,
                    cardexpiryyear,
                    cvv,
                    cardfirstname,
                    cardlastname,
                    country,
                    city,
                    address,
                    state,
                    zipcode
                })
            }
        
        },
        depositApiRequest(requestbody) {
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
                setTimeout(() => {
                    this.loading = false;
                    this.popupmessageType = 'error';
                    this.popupmessage = 'Could not reliably establish connection with your bank. Please explore other methods';
                }, 5000)
            }).catch(err => console.log(err, 'there is an error'));
        }
    },
    watch: {
        amount: function() {
            this.toggleInputClass('amount');
            this.error = false;
        },
        cardtype: function() {
            this.toggleInputClass('cardtype');
            this.error = false;
        },
        cardnumber: function() {
            this.toggleInputClass('cardnumber');
            this.error = false;
        },
        cardexpirymonth: function() {
            this.toggleInputClass('cardexpirymonth');
            this.error = false;
        },
        cardexpiryyear: function() {
            this.toggleInputClass('cardexpiryyear');
            this.error = false;
        },
        cvv: function() {
            this.toggleInputClass('cvv');
            this.error = false;
        },
        cardfirstname: function() {
            this.toggleInputClass('cardfirstname');
            this.error = false;
        },
        cardlastname: function() {
            this.toggleInputClass('cardlastname');
            this.error = false;
        },
        country: function() {
            this.toggleInputClass('country');
            this.error = false;
        },
        city: function() {
            this.toggleInputClass('city');
            this.error = false;
        },
        address: function() {
            this.toggleInputClass('address');
            this.error = false;
        },
        state: function() {
            this.toggleInputClass('state');
            this.error = false;
        },
        zipcode: function() {
            this.toggleInputClass('zipcode');
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
    .deposit {
        background: #fff;
        min-height: 100vh;
        color: #1d1d1b;

        &__main {
          padding: #{scaleValue(20)} #{scaleValue(150)};
        }

        &__popupbody {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
        }

        &__content {
          display: flex;
          padding: #{scaleValue(100)} 0;
          justify-content: space-between;

          @media only screen and (max-width: 414px) { 
            flex-direction: column;
          }

          &-util-input-margin {
              margin: 0 #{scaleValue(8)};
          }

          &--neobanq {
              width: #{scaleValue(150)};
              height: #{scaleValue(50)};
              border: 1px solid #fd4f31;
              padding: #{scaleValue(10)};
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: #{scaleValue(25)};

              @media only screen and (max-width: 414px) { 
                width: #{scaleValue(400)};
                height: #{scaleValue(200)};
                padding: #{scaleValue(30)} #{scaleValue(50)};
                margin-bottom: #{scaleValue(60)};
              } 

              & img {
                  object-fit: contain;
                  height: 100%;
                  width: 100%;
              }
          }

          &--right {
            position: relative;
            width: #{scaleValue(1000)};

            @media only screen and (max-width: 414px) { 
                width: #{scaleValue(1300)};
            }
          }

          &--formsection {
              margin-bottom: #{scaleValue(50)};

              @media only screen and (max-width: 414px) { 
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                margin-bottom: #{scaleValue(90)};
             } 

              & h4 {
                  color: #fd4f31;
                  font-weight: 700;
                  font-size: #{scaleValue(17)};
                  margin-bottom: #{scaleValue(20)};

                  @media only screen and (max-width: 414px) { 
                    font-weight: 400;
                    font-size: #{scaleValue(70)};
                    margin-bottom: #{scaleValue(70)};
                  }
              }
          }

          &--formarea {
              display: flex;
              justify-content: space-between;
              align-items: center;

              margin-bottom: #{scaleValue(15)};

              @media only screen and (max-width: 414px) { 
                flex-direction: column;
                align-items: flex-start;
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

          &--forminputarea {
              display: flex;
              flex-direction: column;
              flex-grow: 1;

              @media only screen and (max-width: 414px) { 
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                margin-bottom: #{scaleValue(90)};
             } 

              & label {
                  color: #fd4f31;
                  font-weight: 500;
                  font-size: #{scaleValue(15)};
                  margin-bottom: #{scaleValue(7)};

                  @media only screen and (max-width: 414px) { 
                     font-size: #{scaleValue(60)};
                     margin-bottom: #{scaleValue(50)};
                  } 
              }

              &.middle {
                margin: 0 #{scaleValue(15)};

                @media only screen and (max-width: 414px) { 
                    margin: 0;
                    margin-bottom: #{scaleValue(50)};
                } 
              }

              &.amount {
                  flex-direction: initial;
                  align-items: center;

                  @media only screen and (max-width: 414px) { 
                     flex-direction: column;
                     align-items: flex-start
                  } 
              }

              & span {
                  display: inline-block;

                  &.sign {
                      font-weight: 700;

                      @media only screen and (max-width: 414px) { 
                          margin-top: #{scaleValue(40)};
                      } 
                  }

                  &.minimum {
                      border-radius: 3rem;
                      background: #f0f0f0;
                      font-weight: 300;
                      font-size: #{scaleValue(13)};
                      padding: #{scaleValue(15)};

                      @media only screen and (max-width: 414px) { 
                          margin-top: #{scaleValue(40)};
                          font-size: #{scaleValue(60)};
                          padding: #{scaleValue(40)} #{scaleValue(70)};;
                      } 
                  }
              }
          }

          &--forminput {
              border: 1px solid #000000;
              border-radius: .5rem;
              overflow: hidden;
              padding: #{scaleValue(10)};

              @media only screen and (max-width: 414px) { 
                width: 100%;
                padding: #{scaleValue(20)} #{scaleValue(50)};
              } 

              & input {
                  width: 100%;
                  border: none;
                  outline: none;
                  height: #{scaleValue(20)};

                  font-size: #{scaleValue(15)};

                  @media only screen and (max-width: 414px) { 
                    height: #{scaleValue(140)};
                    font-size: #{scaleValue(55)};
                  } 

                  &.amount {
                      width: #{scaleValue(500)};
                  }
              }
          }
        }
    }
</style>
