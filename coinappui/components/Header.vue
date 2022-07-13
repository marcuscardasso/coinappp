<template>
  <div>
    <div class="header__tradecara">
      <!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener" target="_blank"><span class="blue-text">Markets</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
  {
  "symbols": [
    {
      "proName": "FOREXCOM:SPXUSD",
      "title": "S&P 500"
    },
    {
      "proName": "FOREXCOM:NSXUSD",
      "title": "US 100"
    },
    {
      "proName": "FX_IDC:EURUSD",
      "title": "EUR/USD"
    },
    {
      "proName": "BITSTAMP:BTCUSD",
      "title": "Bitcoin"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
      "title": "Ethereum"
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "light",
  "isTransparent": false,
  "displayMode": "adaptive",
  "locale": "en"
}
  </script>
</div>
<!-- TradingView Widget END -->
    </div>
    <div class="header">
        <div class="header--logo">
          <div class="header__flex" @click="openpage('')">
            <figure class="header__logo">
              <img src="@/assets/imgs/logocx.png"/>
            </figure>
            <p>Cxefinance</p>
          </div>

          <span class="header__nav--icon" @click="toggleNotshownav">
            <svg>
              <use xlink:href="@/assets/imgs/sprite.svg#icon-align-justify" />
            </svg>
          </span>
        </div>
        <div class="header--menu" :class="{ notshownav }">
          <div class="header--menuitem" @click="openpage('dex')">Dex</div>
          <!--<div class="header--menuitem">Our Platform</div>-->
          <div class="header--menuitem" @click="openpage('accounttypes')">Account Types</div>
          <div class="header--menuitem" @click="openpage('about')">About Us</div>
          <div class="header--menuitem" @click="openpage('faq')">FAQ</div>
          <div class="header--menuitem" @click="openpage('contact')">Contact Us</div>

          <div class="header--menuitem header--menubtn" @click="openpage('signin')" v-if="!user">login</div>
          <div class="header--menuitem header--menubtn colored" @click="openpage('signup')" v-if="!user">Open Account</div>
          <div class="header--menuitem header--menubtn" @click="openpage('signin')" v-if="user">logout</div>
        </div>
      </div>
  </div>
</template>

<script>
import userMixin from '@/mixins/user.js';

export default {
  data() {
    return {
      notshownav: true
    }
  },
  mixins: [userMixin],
  methods: {
    toggleNotshownav() {
      this.notshownav ? this.notshownav = false : this.notshownav = true;
    },
    openpage(route) {
      if (route.length) {
        this.$router.push(`/${route}`)
      } else {
        this.$router.push(`/`)
      }
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

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: #{scaleValue(20)} #{scaleValue(150)};
    padding-top: #{scaleValue(30)};
    position: relative;

    &__tradecara {
      overflow: hidden;
      height: #{scaleValue(35)};
      position: relative;

      &::before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: #{scaleValue(30)};
        background: #fff;
        z-index: 2;

        @media only screen and (max-width: 414px) { 
           width: #{scaleValue(100)};
        }
      }

      @media only screen and (max-width: 414px) { 
        height: #{scaleValue(190)};
      }
    }

    @media only screen and (max-width: 414px) { 
       display: block;
       padding: #{scaleValue(220)} #{scaleValue(100)};
       padding-top: #{scaleValue(100)};
       padding-bottom: 0;
    }

    &__flex {
      display: flex;
      align-items: center;
    }

    &__logo {
        height: #{scaleValue(35)};
        width: #{scaleValue(30)};
        margin-right: #{scaleValue(6)};

        @media only screen and (max-width: 414px) { 
           height: #{scaleValue(150)};
           width: #{scaleValue(145)};
           margin-right: #{scaleValue(25)};
        }

        & img {
            object-fit: cover;
            height: 90%;
            width: 90%;
            animation: spin 8s linear infinite;
        }
    }

    &--menu {
      color: #1d1d1b;
      display: flex;
      align-items: center;

      @media only screen and (max-width: 414px) { 
        flex-direction: column;
      }

      &.notshownav {
        display: flex;

        @media only screen and (max-width: 414px) { 
          display: none;
        }
      }
    }

    &--menuitem {
      margin-left: #{scaleValue(40)};
      font-size: #{scaleValue(15.5)};
      font-weight: 300;
      cursor: pointer;

      @media only screen and (max-width: 414px) { 
        width: 100%;
        font-size: #{scaleValue(67)};
        margin-bottom: #{scaleValue(100)};
        text-transform: capitalize;
      }
    }

    &--logo {
      font-size: #{scaleValue(30)};
      color: #1d1d1b;
      cursor: pointer;

      display: flex;
      align-items: center;

      @media only screen and (max-width: 414px) { 
        font-size: #{scaleValue(100)};
        margin-bottom: #{scaleValue(200)};
        justify-content: space-between;
      }
    }

    &--menubtn {
      border: 1px solid #fd4f31;
      border-radius: 3rem;
      padding: #{scaleValue(10)} #{scaleValue(30)};
      color: #fd4f31;

      @media only screen and (max-width: 414px) { 
        padding: #{scaleValue(70)} #{scaleValue(70)};
      }

      &.colored {
        background: #fd4f31;
        color: #fff;
      }
    }

    &__nav {
      display: none;

      @media only screen and (max-width: 414px) { 
        display: block;
      }

      &--icon {
        display: none;

        @media only screen and (max-width: 414px) { 
          display: flex;
          justify-content: center;
          align-items: center;
        }

        & svg {
          height: #{scaleValue(130)};
          width: #{scaleValue(130)};
        }
      }
    }
  }
</style>