<template>
  <div>
    <div class="transactions">
        <Header />

        <div class="transactions__main">
            <AccountHeader />

            <div class="transactions__content">
                <div class="transactions__content--left">
                    <DashSidenav menuname="Transactions"/>
                </div>

                <div class="transactions__content--right">
                  <div class="transactions__dashboard">
                    <div class="transactions__dashboard--top">
                        <h1>Transactions</h1>
                        <div></div>
                    </div>

                    <div class="transactions__dashboard--content">
                      <div class="transactions__dashboard--labels">
                        <label :class="{ current: current === 'deposits' }" @click="toggleCurrent('deposits')">Deposits</label>
                        <label :class="{ current: current === 'withdrawals' }" @click="toggleCurrent('withdrawals')">Withdrawals</label>
                        <label :class="{ current: current === 'credits' }" @click="toggleCurrent('credits')">Credits</label>
                        <label :class="{ current: current === 'bonuses' }" @click="toggleCurrent('bonuses')">Bonuses</label>
                        <label :class="{ current: current === 'fees' }" @click="toggleCurrent('fees')">Fees</label>
                        <label :class="{ current: current === 'internaltrans' }" @click="toggleCurrent('internaltrans')">Internal Transfers</label>
                      </div>

                      <div class="transactions__dashboard--headers">
                        <div class="transactions__dashboard--header" v-if="current === 'deposits'">
                          <label>Date</label>
                          <label>Type</label>
                          <label>Amount</label>
                          <label>Status</label>
                          <label>Cardholder</label>
                        </div>

                        <div v-if="user && current === 'deposits'">
                          <div class="transactions__dashboard--header headeritem"
                            v-for="deposit in user.deposits" 
                            @key="deposit._id">
                            <label>{{deposit.date}}</label>
                            <label>{{deposit.type}}</label>
                            <label>{{deposit.amount}}</label>
                            <label>{{deposit.status}}</label>
                            <label>{{deposit.cardholder}}</label>
                          </div>
                        </div>

                        <div class="transactions__dashboard--header" v-if="current === 'withdrawals'">
                          <label>Date</label>
                          <label>Amount</label>
                          <label>Status</label>
                        </div>

                        <div v-if="user && current === 'withdrawals'">
                          <div class="transactions__dashboard--header headeritem"
                            v-for="withdrawal in user.withdrawals" 
                            @key="withdrawal._id">
                            <label>{{withdrawal.date}}</label>
                            <label>{{withdrawal.amount}}</label>
                            <label>{{withdrawal.status}}</label>
                          </div>
                        </div>

                        <div class="transactions__dashboard--header" v-if="current === 'credits'">
                          <label>Date</label>
                          <label>Amount</label>
                        </div>

                        <div v-if="user && current === 'credits'">
                          <div class="transactions__dashboard--header headeritem"
                            v-for="credit in user.credits" 
                            @key="credit._id">
                            <label>{{credit.date}}</label>
                            <label>{{credit.amount}}</label>
                          </div>
                        </div>

                        <div class="transactions__dashboard--header" v-if="current === 'bonuses'">
                          <label>Date</label>
                          <label>Type</label>
                          <label>Amount</label>
                          <label>Status</label>
                          <label>Cardholder</label>
                        </div>

                        <div v-if="user && current === 'bonuses'">
                          <div class="transactions__dashboard--header headeritem"
                            v-for="bonus in user.bonuses" 
                            @key="bonus._id">
                            <label>{{bonus.date}}</label>
                            <label>{{bonus.type}}</label>
                            <label>{{bonus.amount}}</label>
                            <label>{{bonus.status}}</label>
                            <label>{{bonus.cardholder}}</label>
                          </div>
                        </div>

                        <div class="transactions__dashboard--header" v-if="current === 'fees'">
                          <label>Date</label>
                          <label>Type</label>
                          <label>Amount</label>
                          <label>Status</label>
                        </div>

                        <div v-if="user && current === 'fees'">
                          <div class="transactions__dashboard--header headeritem"
                            v-for="fee in user.fees" 
                            @key="fee._id">
                            <label>{{fee.date}}</label>
                            <label>{{fee.type}}</label>
                            <label>{{fee.amount}}</label>
                            <label>{{fee.status}}</label>
                          </div>
                        </div>

                        <div class="transactions__dashboard--header" v-if="current === 'internaltrans'">
                          <label>Date</label>
                          <label>Source Account</label>
                          <label>Transfer Account</label>
                          <label>Exchange Rate</label>
                          <label>Transfer Amount</label>
                          <label>Status</label>
                        </div>

                        <div v-if="user && current === 'internaltrans'">
                          <div class="transactions__dashboard--header headeritem"
                            v-for="internalTransfer in user.internalTransfers" 
                            @key="internalTransfer._id">
                            <label>{{internalTransfer.date}}</label>
                            <label>{{internalTransfer.sourceAccount}}</label>
                            <label>{{internalTransfer.transferAccount}}</label>
                            <label>{{internalTransfer.exchangeRate}}</label>
                            <label>{{internalTransfer.transferAmount}}</label>
                            <label>{{internalTransfer.status}}</label>
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
import userMixin from '@/mixins/user.js'
export default {
  data() {
    return {
      current: 'deposits'
    }
  },
  mounted() {
    this.user
  },
  mixins: [userMixin],
  methods: {
    toggleCurrent(value) {
      this.current = value;
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

    .transactions {
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

          &--content {
            display: flex;
            flex-direction: column;
          }

          &--labels {
            display: flex;

            @media only screen and (max-width: 414px) { 
              flex-direction: column;
              width: #{scaleValue(550)};
              padding: #{scaleValue(100)} 0;
              padding-left: #{scaleValue(80)};
              padding-bottom: #{scaleValue(10)};
              align-items: flex-start;
              line-height: #{scaleValue(15)};
              width: 100%;
              background: #fd4f31;
              color: #fff;
            } 

            & label {
              display: inline-block;
              margin-right: #{scaleValue(23)};
              position: relative;
              padding-bottom: #{scaleValue(7)};
              border-radius: 3rem;
              cursor: pointer;
              font-size: #{scaleValue(13)};

              @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(50)};
                width: 100%;
                margin-bottom: #{scaleValue(80)};
                padding-bottom: #{scaleValue(50)};
              } 

              &.current {

                &::before {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  height: #{scaleValue(3)};
                  background: #fd4f31;

                  @media only screen and (max-width: 414px) {
                    height: #{scaleValue(10)};
                    width: 30%;
                    background: #fff;
                  }
                }
              }
            }
          }

          &--headers {
            margin-top: #{scaleValue(23)};
            display: flex;
            flex-direction: column;
          }

          &--header {
            background: #fd4f31;
            padding: #{scaleValue(15)} #{scaleValue(15)};
            color: #fff;
            font-size: #{scaleValue(13)};
            margin-bottom: #{scaleValue(23)};
            justify-content: space-between;
            display: flex;
            align-items: center;

            &.headeritem {
              background: transparent;
              color: #000000;
              border-bottom: 1px solid #000000;
            }

            @media only screen and (max-width: 414px) { 
              flex-direction: column;
              flex-direction: column;
              width: #{scaleValue(550)};
              padding: #{scaleValue(100)} #{scaleValue(40)};
              padding-left: 0;
              align-items: flex-start;
              line-height: #{scaleValue(15)};
              background: #fff;
              color: #000000;
            } 

            & label {
              display: inline-block;
              width: #{scaleValue(170)};

              @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(50)};
                width: 100%;
                margin-bottom: #{scaleValue(80)};
                padding-bottom: #{scaleValue(50)};
              } 
            }
          }
        }
    }
</style>