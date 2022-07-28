<template>
  <div>
    <div class="accountsummary">
     <Header />

      <div class="accountsummary__main">
        <AccountHeader />

        <div class="accountsummary__content">
            <div class="accountsummary__content--left">
                <DashSidenav menuname="Account Summary"/>
            </div>
            <div class="accountsummary__content--right">
                <div class="accountsummary__dashboard">
                    <div class="accountsummary__dashboard--top">
                        <h1>Account Summary</h1>
                        <div></div>
                    </div>

                    <div class="accountsummary__dashboard--liveaccounts" v-if="user">
                        <div class="accountsummary__dashboard--section">
                            <h2>Live Accounts</h2>
                            <div class="accountsummary__dashboard--sectionmain">
                                <div class="accountsummary__dashboard--labels">
                                    <div class="accountsummary__dashboard--label">Account ID<span class="colon">:</span></div>
                                    <div class="accountsummary__dashboard--label">Account Nick Name<span class="colon">:</span></div>
                                    <div class="accountsummary__dashboard--label">Group<span class="colon">:</span></div>
                                    <div class="accountsummary__dashboard--label">Balance<span class="colon">:</span></div>
                                    <div class="accountsummary__dashboard--label">Margin<span class="colon">:</span></div>
                                    <div class="accountsummary__dashboard--label">Equity<span class="colon">:</span></div>
                                    <div class="accountsummary__dashboard--label">Currency<span class="colon">:</span></div>
                                    <div class="accountsummary__dashboard--label">Edit<span class="colon">:</span></div>
                                </div>

                                <div class="accountsummary__dashboard--item">
                                    <div class="accountsummary__dashboard--label">{{truncate(`${user._id}`, 13)}}</div>
                                    <div class="accountsummary__dashboard--label">USD (MT4)</div>
                                    <div class="accountsummary__dashboard--label">TRSG-U-GLD</div>
                                    <div class="accountsummary__dashboard--label">${{truncate(`${user.balance}`, 13)}}</div>
                                    <div class="accountsummary__dashboard--label">{{user.margin ? truncate(`${user.margin}`, 13) : 0}}</div>
                                    <div class="accountsummary__dashboard--label">{{user.equity ? truncate(`${user.equity}`, 13) : 0}}</div>
                                    <div class="accountsummary__dashboard--label">USD</div>
                                    <div class="accountsummary__dashboard--label" @click="goTo('personalinfo')">
                                        <svg>
                                            <use xlink:href="@/assets/imgs/sprite.svg#icon-exit_to_app" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accountsummary__dashboard--section">
                            <h2>Demo Accounts</h2>
                            <div class="accountsummary__dashboard--labels">
                                <div class="accountsummary__dashboard--label extended">No Accounts Found For This Section</div>
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
import userMixin from '@/mixins/user.js'
export default {
    mixins: [userMixin]
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.accountsummary {
  background: #fff;
  min-height: 100vh;
  color: #1d1d1b;

  &__main {
      padding: #{scaleValue(20)} #{scaleValue(150)};

      &--header {
          background: #fd4f31;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: #{scaleValue(17)};
          padding: #{scaleValue(18)};

          & span {
              display: inline-block;
          }
      }

      &--headerleft {
          display: flex;
          align-items: center;
          
        & span {
            margin-right: #{scaleValue(18)};

            &.border {
                font-size: #{scaleValue(20)};
            }
        }
      }

      &--headerright {
          display: flex;
          align-items: center;

          & span {
              margin-left: #{scaleValue(18)};

              &.bold {
                  font-weight: 700;
                  margin: 0;
              }
          }
      }
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
  }

  &__dashboard {

      &--top {
          position: relative;
          padding-bottom: #{scaleValue(13)};
          margin: #{scaleValue(20)} 0;

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

      & h2 {
          color:  #fd4f31;
          font-weight: 700;
          font-size: #{scaleValue(15)};
          margin-bottom: #{scaleValue(18)};

          @media only screen and (max-width: 414px) { 
            font-size: #{scaleValue(70)};
            font-weight: 400;
          } 
      }

      &--section {
          margin-bottom: #{scaleValue(30)};
      }

      &--sectionmain {
          margin-bottom: #{scaleValue(30)};

          @media only screen and (max-width: 414px) { 
            display: flex;
            justify-content: space-between;
          } 
      }

      &--labels {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fd4f31;
          color: #fff;
          padding: #{scaleValue(15)} #{scaleValue(15)};

          @media only screen and (max-width: 414px) { 
            flex-direction: column;
            width: #{scaleValue(550)};
            padding: #{scaleValue(100)} #{scaleValue(40)};
            padding-left: 0;
            align-items: flex-start;
            line-height: #{scaleValue(15)};

            background: #fff;
            color: #000000;
          } 
      }

      &--label {
          font-size: #{scaleValue(12)};
          width: #{scaleValue(120)};

          @media only screen and (max-width: 414px) { 
            font-size: #{scaleValue(50)};
            width: 100%;
            margin-bottom: #{scaleValue(70)};
          } 

          &.extended {
              width: #{scaleValue(300)};
          }
      }

      &--item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #000000;
          padding: #{scaleValue(15)} #{scaleValue(15)};
          font-weight: 300;

          @media only screen and (max-width: 414px) { 
            flex-direction: column;
            width: #{scaleValue(700)};
            padding: #{scaleValue(80)} #{scaleValue(40)};

            color: #fd4f31;
          } 

          & svg {
              cursor: pointer;
              width: #{scaleValue(20)};
              height: #{scaleValue(20)};

              @media only screen and (max-width: 414px) {
                width: #{scaleValue(70)};
                height: #{scaleValue(70)};
                fill: #fd4f31;
              } 
          }
      }
  }
}
</style>
