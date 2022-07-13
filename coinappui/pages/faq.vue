<template>
  <div>
    <div class="faq">
    <Header />

      <div class="faq__main">
        <h2>FAQ</h2>
        <span class="faq__main--subheader">Here are answers to some of the most common questions asked by our clients</span>

        <div class="faq__cardbtns">
            <div class="faq__cardbtn" @click="toggleQ('banking')" :class="{ colored: visibleQ === 'banking' }">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37">
                        <g data-name="Group 1638">
                        <path data-name="Path 4499" d="m27.815 8.092-9.318-3.326-9.311 3.326ZM2.271 10.399a2.312 2.312 0 0 1-.735-4.489L17.723.134a2.3 2.3 0 0 1 1.554 0h.006l16.181 5.781a2.312 2.312 0 0 1-.735 4.489H2.271"></path>
                        <path data-name="Path 4500" d="M34.139 16.764a2.315 2.315 0 0 1-1.039 2.724l.991 10.817.187 2.068h.409a2.313 2.313 0 1 1 0 4.625H2.313a2.313 2.313 0 1 1 0-4.625h.409l.187-2.068.991-10.817a2.314 2.314 0 0 1-1.038-2.724h-.549a2.313 2.313 0 1 1 0-4.625h32.374a2.313 2.313 0 1 1 0 4.625Zm-18.219 2.7a2.315 2.315 0 0 1-.99-2.7H10a2.315 2.315 0 0 1-1.04 2.725v11.728h6.307l.061-1.12Zm6.15-2.7a2.315 2.315 0 0 1-.99 2.7l.59 10.638.061 1.12h6.307V19.489A2.316 2.316 0 0 1 27 16.764Z"></path>
                        </g>
                    </svg>
                </span>
                <span>Banking (8)</span>
            </div>
            <div class="faq__cardbtn" @click="toggleQ('gettingstarted')" :class="{ colored: visibleQ === 'gettingstarted' }">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31.032" height="36">
                        <path data-name="Icon awesome-font-awesome-flag" d="M31.032 25.272c0 .5-.432.72-.936.936a16.584 16.584 0 0 1-6.48 1.656c-3.24 0-4.752-2.016-8.64-2.016a20.6 20.6 0 0 0-8.136 2.088c-.144.072-.288.072-.432.144v5.472A2.361 2.361 0 0 1 4.032 36a2.428 2.428 0 0 1-2.445-2.448V7.2a4.02 4.02 0 1 1 6.48-3.168A3.824 3.824 0 0 1 6.48 7.2v2.232a21.432 21.432 0 0 1 8.064-2.016c4.589 0 6.868 1.944 8.928 1.944 2.736 0 5.76-1.944 6.48-1.944a1.038 1.038 0 0 1 1.08.936v16.92Z"></path>
                    </svg>
                </span>
                <span>Getting Started (10)</span>
            </div>
            <div class="faq__cardbtn" @click="toggleQ('personalaccount')" :class="{ colored: visibleQ === 'personalaccount' }">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                        <path data-name="Icon awesome-user-alt" d="M18 20.25A10.125 10.125 0 1 0 7.875 10.125 10.128 10.128 0 0 0 18 20.25Zm9 2.25h-3.874a12.24 12.24 0 0 1-10.252 0H9a9 9 0 0 0-9 9v1.125A3.376 3.376 0 0 0 3.375 36h29.25A3.376 3.376 0 0 0 36 32.625V31.5a9 9 0 0 0-9-9Z"></path>
                    </svg>
                </span>
                <span>Personal Account (10)</span>
            </div>
        </div>

        <div class="faq__items" :class="{ visible: visibleQ === 'banking' }">
            <div class="faq__itemsarea">
                <div class="faq__item">
                    <h4>How do I deposit funds into my account?</h4>
                    <span>You can fund your account using bank wire, popular eWallets and major credit/debit cards.</span>
                </div>
                <div class="faq__item">
                    <h4>How soon will my deposit reflect in my trading account?</h4>
                    <span>You can fund your account using bank wire, popular eWallets and major credit/debit cards.</span>
                </div>
                <div class="faq__item">
                    <h4>What is the withdrawal procedure?</h4>
                    <span>You can fund your account using bank wire, popular eWallets and major credit/debit cards.</span>
                </div>
                <div class="faq__item">
                    <h4>How long does it take to receive the withdrawn funds?</h4>
                    <span>You can fund your account using bank wire, popular eWallets and major credit/debit cards.</span>
                </div>
                <div class="faq__item">
                    <h4>Can I cancel a withdrawal request?</h4>
                    <span>You can fund your account using bank wire, popular eWallets and major credit/debit cards.</span>
                </div>
            </div>
            <div class="faq__itemsarea">
                <div class="faq__item">
                    <h4>How do I request a withdrawal?</h4>
                    <span>Ensure that your account is fully verified so as to facilitate smooth withdrawals from your account. Cxefinance only processes withdrawals from verified accounts. Account verification requires the submission of a proof of identity as well as a proof of residence, and in some cases, you may be requested for other documents. The verification is only done once, and not required for subsequent withdrawal requests. It is highly recommended to verify your account as soon as possible to avoid withdrawal delays. Verified account holders just need to fill out a withdrawal request form available in their account members’ area.</span>
                </div>
                <div class="faq__item">
                    <h4>What Currency Must My Trading Account Be In?</h4>
                    <span>At Cxefinance, the base currency of your account can be USD, EUR, and GBP. It is important to note that you can fund your account using your local currency. No additional fees will be charged and should you require assistance regarding account currencies, please contact our customer support.</span>
                </div>
                <div class="faq__item">
                    <h4>What is the withdrawal procedure?</h4>
                    <span>You can fund your account using bank wire, popular eWallets and major credit/debit cards.</span>
                </div>
                <div class="faq__item">
                    <h4>Will My Deposit Reflect in My Account Instantly?</h4>
                    <span>When using a credit card, debit card or eWallet to make a deposit, the funds will reflect instantly in your Cxefinance account. Should you use a bank wire to make a deposit, it will take a few days until these funds reflect in your trading account. For any queries, please contact customer support.</span>
                </div>
            </div>
        </div>

        <div class="faq__items" :class="{ visible: visibleQ === 'gettingstarted' }">
            <div class="faq__itemsarea">
                <div class="faq__item">
                    <h4>How can I get more virtual money to trade in my demo account?</h4>
                    <span>Please contact our customer care team if you would like more virtual funds to be added to your demo account.</span>
                </div>
                <div class="faq__item">
                    <h4>Are there any hidden fees?</h4>
                    <span>There are no hidden fees at Cxefinance. Cxefinance is mainly compensated for its services through the spreads.</span>
                </div>
                <div class="faq__item">
                    <h4>Why should I open an account with Cxefinance?</h4>
                    <span>With thousands of clients since it was founded, Cxefinance has grown to a large and well established international investment firm.</span>
                    <span>Cxefinance is currently built of dozens of professionals with long-year experience in the financial industry.</span>
                    <span>Why should I open an account with Cxefinance? With thousands of clients since it was founded, Cxefinance has grown to a large and well established international investment firm. Cxefinance is currently built of dozens of professionals with long-year experience in the financial industry. Our extensive experience combined with our world-class support, makes Cxefinance the broker of choice for traders of all levels, anywhere. We have the expertise and the resources to help everybody realize their investment goals, like only a truly professional broker can.</span>
                </div>
                <div class="faq__item">
                    <h4>Can I run a demo account?</h4>
                    <span>Yes. Cxefinance gives you access to a fully functional demo account with practice funds. The demo account is identical to a live trading account and uses the same data sources.</span>
                </div>
            </div>

            <div class="faq__itemsarea">
                <div class="faq__item">
                    <h4>Can I trade on a mobile device?</h4>
                    <span>Our web-based trading platform is fully responsive on browsers of all types of mobile devices. This means you can trade while on the go from anywhere and at any time.</span>
                </div>
                <div class="faq__item">
                    <h4>Which trading software will I use?</h4>
                    <span>No software download is required because Cxefinance trading platform is web-based.</span>
                </div>
                <div class="faq__item">
                    <h4>Can I open multiple trading accounts?</h4>
                    <span>Yes, you can. At Cxefinance, you can open up to 10 trading accounts</span>
                </div>
                <div class="faq__item">
                    <h4>What is the minimum deposit amount?</h4>
                    <span>You can start trading at Cxefinance after making a minimum deposit of $250.</span>
                </div>
                <div class="faq__item">
                    <h4>When can I start trading?</h4>
                    <span>You can start trading as soon as you make a successful deposit into your account.</span>
                </div>
                <div class="faq__item">
                    <h4>How do I open an account?</h4>
                    <span>Click on ‘Register’ and fill out your registration details. Submit the registration form and you can start trading after confirming your email address.</span>
                </div>
            </div>
        </div>

        <div class="faq__items" :class="{ visible: visibleQ === 'personalaccount' }">
            <div class="faq__itemsarea">
                <div class="faq__item">
                    <h4>How can I reset my password?</h4>
                    <span>Simply click on ‘Forgot my password’ on the login section of the site and follow the prompts.</span>
                </div>
                <div class="faq__item">
                    <h4>Can I change the base currency of my account?</h4>
                    <span>No. But you can open a new account with your preferred base currency.</span>
                </div>
                <div class="faq__item">
                    <h4>Can I change my account leverage?</h4>
                    <span>Yes, you can. Simply contact support indicating your account number as well as your desired new leverage level. One of our representatives will assist you.</span>
                </div>
                <div class="faq__item">
                    <h4>What are the currencies I can hold in my account?</h4>
                    <span>You can fund your account using your local currency, but the base currency of the account can only be in USD, EUR and GBP</span>
                </div>
                <div class="faq__item">
                    <h4>How can I update my account details?</h4>
                    <span>In the event that you wish to change any of your account details information, please contact our support team who will assist you with the process.</span>
                </div>
                <div class="faq__item">
                    <h4>I want to learn more about account types, can you help?</h4>
                    <span>Of course! Feel free to review our “Account Types” page, and if you have any questions our customer support team would be happy to help.</span>
                </div>
            </div>

            <div class="faq__itemsarea">
                <div class="faq__item">
                    <h4>How do I change my account type?</h4>
                    <span>Yes, you can upgrade your account type if you meet the criteria. To change your account type, please contact customer support or your account manager.</span>
                </div>
                <div class="faq__item">
                    <h4>Can I manage and trade using my spouse’s account?</h4>
                    <span>Yes, you can but you will require the full authority and consent of your spouse. You will also be required to have all the relevant passwords. You may need to contact us so that we can verify your status directly with your spouse.</span>
                </div>
                <div class="faq__item">
                    <h4>Which documents are required for account verification?</h4>
                    <span>We require 2 documents for account verification: POI and POA. For POI (Proof of Identity), we accept a colored copy of a government-issued identification document, such as an ID card or passport; and for POA (Proof of Address), we accept a document dated not more than 3 months which shows your full name and full address that matches your trading account registration details. This can include a bank statement or utility bill.</span>
                </div>
                <div class="faq__item">
                    <h4>Why are the verification documents required?</h4>
                    <span>As a provider of financial services globally, Cxefinance is bound by international KYC (know your customer) and anti-money laundering guidelines. We need to also ensure the safety of your financial information and personal information at all times.</span>
                </div>
            </div>
        </div>
      </div>

        <div>
            <Register />
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
export default {
    data() {
        return {
            visibleQ: 'banking'
        }
    },
    methods: {
        toggleQ(current) {
            this.visibleQ = current;
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

.padding {
  padding: #{scaleValue(10)} #{scaleValue(150)};
}

.faq {
  background: #fff;
  min-height: 100vh;
  color: #1d1d1b;

  &__main {
      padding: 0 #{scaleValue(150)};
      padding-top: #{scaleValue(150)};
      display: flex;
      flex-direction: column;

      & h2 {
          text-align: center;
          font-size: #{scaleValue(50)};
          margin-bottom: #{scaleValue(26)};

          @media only screen and (max-width: 414px) { 
            font-size: #{scaleValue(180)};
            margin-bottom: #{scaleValue(100)};
          }
      }

      &--subheader {
          font-size: #{scaleValue(20)};
          text-align: center;
          font-weight: 300;

          @media only screen and (max-width: 414px) { 
            font-size: #{scaleValue(80)};
          }
      }
  }

  &__items {
      display: none;
      justify-content: space-between;

      @media only screen and (max-width: 414px) { 
         flex-direction: column;
         margin-top: #{scaleValue(140)};
      }

      &.visible {
          display: flex;
      }
  }

  &__itemsarea {
      width: #{scaleValue(600)};

      @media only screen and (max-width: 414px) { 
         width: 100%;
      }
  }

  &__item {
      margin-bottom: #{scaleValue(30)};

      @media only screen and (max-width: 414px) { 
        margin-bottom: #{scaleValue(100)};
      }

      & h4 {
            font-weight: 400;
            font-size: #{scaleValue(20)};
            line-height: #{scaleValue(43)};
            margin-bottom: #{scaleValue(15)};
            position: relative;
            padding-left: #{scaleValue(20)};

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(70)};
                line-height: #{scaleValue(97)};
                margin-bottom: #{scaleValue(60)};
                padding: 0;
            }

            &::before {
                content: '';
                border-radius: 100%;
                background: #fd4f31;
                height: #{scaleValue(12)};
                width: #{scaleValue(12)};
                position: absolute;
                top: #{scaleValue(15)};
                left: 0;

                @media only screen and (max-width: 414px) { 
                    display: none;
                }
            }
      }

      & span {
          font-size: #{scaleValue(16)};
          line-height: #{scaleValue(23)};

          @media only screen and (max-width: 414px) { 
             font-size: #{scaleValue(70)};
             line-height: #{scaleValue(90)};
             font-weight: 300;
          }
      }
  }

  &__cardbtns {
      display: flex;
      justify-content: space-between;
      margin-top: #{scaleValue(100)};
      margin-bottom: #{scaleValue(50)};

      @media only screen and (max-width: 414px) { 
         flex-direction: column;
      }
  }

  &__cardbtn {
      box-shadow: -2px 0px 40px 0px rgba(0,0,0,0.49);
     -webkit-box-shadow: -2px 0px 40px 0px rgba(0,0,0,0.49);
      -moz-box-shadow: -2px 0px 40px 0px rgba(0,0,0,0.49);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: .4rem;

      width: #{scaleValue(400)};
      height: #{scaleValue(170)};

      font-size: #{scaleValue(20)};
      font-weight: 500;

      @media only screen and (max-width: 414px) { 
         width: 100%;
         font-size: #{scaleValue(70)};
         flex-direction: initial;
         align-items: center;
         padding: #{scaleValue(120)} #{scaleValue(60)};
         margin: #{scaleValue(20)} 0;
      }

      &.colored {
          background: #fd4f31;
          color: #fff;

          & svg {
            fill: #fff;
          }
      }

      & span {
          display: inline-block;

          &:nth-child(2) {
              margin-top: #{scaleValue(20)};

              @media only screen and (max-width: 414px) {
                  margin-left: #{scaleValue(20)};
              }
          }
      }

      
      & svg {
          fill: #fd4f31;
          height: #{scaleValue(40)};
          width: #{scaleValue(40)};

          @media only screen and (max-width: 414px) {
             height: #{scaleValue(40)};
             width: #{scaleValue(60)};
          }
      }
  }

  &__footer {
    padding: 0 #{scaleValue(150)};
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: #{scaleValue(100)};

    padding-bottom: #{scaleValue(80)};

    & h5 {
        font-size: #{scaleValue(18)};
        margin-bottom: #{scaleValue(10)};
        font-weight: 500;
      }

    &--left {
      display: flex;
    }

    &--area {
      width: #{scaleValue(400)};
      margin-right: #{scaleValue(40)};
      font-weight: 400;
      line-height: #{scaleValue(25)};
    }

    &--right {

      & h5 {
        margin-bottom: #{scaleValue(20)};
      }
    }

    &--input {
      position: relative;
      border-radius: 3rem;
      border: 1px solid #000000;
      display: flex;
      align-items: center;
      padding: #{scaleValue(12)} #{scaleValue(10)};

      & input {
        border: none;
        margin-right: #{scaleValue(10)};
        width: #{scaleValue(200)}
      }

      & span {

        &.go {
          background: #fd4f31;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      & svg {
        fill: #fff;
        height: #{scaleValue(30)};
        width: #{scaleValue(30)};
      }
    }
  }  
}
</style>
