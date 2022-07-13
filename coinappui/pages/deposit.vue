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
                    <figure class="deposit__content--neobanq">
                        <img src='@/assets/imgs/clearing-neobanq.png'/>
                    </figure>
                    <div class="deposit__content--form">
                        <div class="deposit__content--formsection">
                            <h4>Amount</h4>
                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea amount">
                                    <span class="deposit__content--forminput">
                                        <input placeholder="Amount" class="amount"/>
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
                                    <span class="deposit__content--forminput">
                                        <input placeholder="Select card type"/>
                                    </span>
                                </div>
                            </div>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>Credit card number</label>
                                    <span class="deposit__content--forminput">
                                        <input placeholder="Credit card number"/>
                                    </span>
                                </div>
                            </div>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>Expiry month</label>
                                    <span class="deposit__content--forminput">
                                        <input placeholder="Credit card number"/>
                                    </span>
                                </div>

                                <div class="deposit__content--forminputarea middle">
                                    <label>Expiry year</label>
                                    <span class="deposit__content--forminput">
                                        <input placeholder="Expiry year"/>
                                    </span>
                                </div>

                                <div class="deposit__content--forminputarea">
                                    <label>CVV</label>
                                    <span class="deposit__content--forminput">
                                        <input placeholder="cvv"/>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="deposit__content--formsection">
                            <h4>Card Holder Details</h4>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>First Name</label>
                                    <span class="deposit__content--forminput">
                                        <input placeholder="First Name"/>
                                    </span>
                                </div>
                                <div class="deposit__content-util-input-margin"></div>
                                 <div class="deposit__content--forminputarea">
                                    <label>Last Name</label>
                                    <span class="deposit__content--forminput">
                                        <input placeholder="Last Name"/>
                                    </span>
                                </div>
                            </div>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>Country</label>
                                    <span class="deposit__content--forminput">
                                        <input placeholder="Country"/>
                                    </span>
                                </div>
                            </div>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>City</label>
                                    <span class="deposit__content--forminput">
                                        <input placeholder="City"/>
                                    </span>
                                </div>
                                <div class="deposit__content-util-input-margin"></div>
                                <div class="deposit__content--forminputarea">
                                    <label>Address</label>
                                    <span class="deposit__content--forminput">
                                        <input placeholder="Address"/>
                                    </span>
                                </div>
                            </div>

                            <div class="deposit__content--formarea">
                                <div class="deposit__content--forminputarea">
                                    <label>State</label>
                                    <span class="deposit__content--forminput">
                                        <input placeholder="State"/>
                                    </span>
                                </div>
                                <div class="deposit__content-util-input-margin"></div>
                                <div class="deposit__content--forminputarea">
                                    <label>Zip code</label>
                                    <span class="deposit__content--forminput">
                                        <input placeholder="Zip code"/>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="deposit__content--formarea">
                            <button>Deposit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {}
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
