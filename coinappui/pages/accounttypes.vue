<template>
  <div>
    <div class="accounttypes">
      <Header />

      <div class="accounttypes__main">
        <div class="accounttypes__main--top">
            <h1>Four Account Types. <span class="colored">Same Great Service!</span></h1>
            <p>At Cxefinance, we offer several different account types, each with specific benefits.</p>
            <p>The size of your initial deposit determines which tier your account belongs to, as well as which benefits are available to you.</p>
            <p>You can shift your account to the next level by increasing your deposit amount.</p>
        </div>
        <div class="accounttypes__main--bottom">
            <div class="accounttypes__plan">
          <div class="accounttypes__plan--star">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="1star" transform="translate(-5609 -3812)">
                <circle cx="12" cy="12" r="12" data-name="Ellipse 60" opacity=".2" transform="translate(5609 3812)"></circle>
                <path d="m5621.366 3828.331-3.291 1.725a.594.594 0 0 1-.861-.621l.629-3.654-2.663-2.587a.589.589 0 0 1 .329-1.008l3.679-.533 1.646-3.323a.594.594 0 0 1 1.064 0l1.646 3.323 3.679.533a.591.591 0 0 1 .329 1.008l-2.663 2.586.627 3.652a.591.591 0 0 1-.859.623z"></path>
              </g>
            </svg>
          </div>
          <h4>Standard</h4>
          <div class="accounttypes__plan--section cost">$250 Min Deposit</div>
          <div class="accounttypes__plan--section">Min spread from 1.5 pips</div>
          <div class="accounttypes__plan--section">Max leverage up to 1:500</div>
          <div class="accounttypes__plan--section">Bonus up to 30%</div>
          <div class="accounttypes__plan--section">Customer support 24/5</div>
          <div class="accounttypes__plan--section">Intro call from personal account manager</div>
          <div class="accounttypes__plan--section btn">
            <button @click="openpage('signup')">Start Trading</button>
          </div>
        </div>

        <div class="accounttypes__plan">
          <div class="accounttypes__plan--star">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="1star" transform="translate(-5609 -3812)">
                <circle cx="12" cy="12" r="12" data-name="Ellipse 60" opacity=".2" transform="translate(5609 3812)"></circle>
                <path d="m5621.366 3828.331-3.291 1.725a.594.594 0 0 1-.861-.621l.629-3.654-2.663-2.587a.589.589 0 0 1 .329-1.008l3.679-.533 1.646-3.323a.594.594 0 0 1 1.064 0l1.646 3.323 3.679.533a.591.591 0 0 1 .329 1.008l-2.663 2.586.627 3.652a.591.591 0 0 1-.859.623z"></path>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="1star" transform="translate(-5609 -3812)">
                <circle cx="12" cy="12" r="12" data-name="Ellipse 60" opacity=".2" transform="translate(5609 3812)"></circle>
                <path d="m5621.366 3828.331-3.291 1.725a.594.594 0 0 1-.861-.621l.629-3.654-2.663-2.587a.589.589 0 0 1 .329-1.008l3.679-.533 1.646-3.323a.594.594 0 0 1 1.064 0l1.646 3.323 3.679.533a.591.591 0 0 1 .329 1.008l-2.663 2.586.627 3.652a.591.591 0 0 1-.859.623z"></path>
              </g>
            </svg>
          </div>
          <h4>Silver</h4>
          <div class="accounttypes__plan--section cost">$25,000 Min Deposit</div>
          <div class="accounttypes__plan--section">Min spread from 1.5 pips</div>
          <div class="accounttypes__plan--section">Max leverage up to 1:400</div>
          <div class="accounttypes__plan--section">Bonus up to 30%</div>
          <div class="accounttypes__plan--section">Customer support 24/5</div>
          <div class="accounttypes__plan--section">Personal account manager</div>
          <div class="accounttypes__plan--section underlined">Investment research & analytics from Trading Central</div>
          <div class="accounttypes__plan--section btn">
            <button @click="openpage('signup')">Start Trading</button>
          </div>
        </div>

        <div class="accounttypes__plan">
          <div class="accounttypes__plan--star">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="1star" transform="translate(-5609 -3812)">
                <circle cx="12" cy="12" r="12" data-name="Ellipse 60" opacity=".2" transform="translate(5609 3812)"></circle>
                <path d="m5621.366 3828.331-3.291 1.725a.594.594 0 0 1-.861-.621l.629-3.654-2.663-2.587a.589.589 0 0 1 .329-1.008l3.679-.533 1.646-3.323a.594.594 0 0 1 1.064 0l1.646 3.323 3.679.533a.591.591 0 0 1 .329 1.008l-2.663 2.586.627 3.652a.591.591 0 0 1-.859.623z"></path>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="1star" transform="translate(-5609 -3812)">
                <circle cx="12" cy="12" r="12" data-name="Ellipse 60" opacity=".2" transform="translate(5609 3812)"></circle>
                <path d="m5621.366 3828.331-3.291 1.725a.594.594 0 0 1-.861-.621l.629-3.654-2.663-2.587a.589.589 0 0 1 .329-1.008l3.679-.533 1.646-3.323a.594.594 0 0 1 1.064 0l1.646 3.323 3.679.533a.591.591 0 0 1 .329 1.008l-2.663 2.586.627 3.652a.591.591 0 0 1-.859.623z"></path>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="1star" transform="translate(-5609 -3812)">
                <circle cx="12" cy="12" r="12" data-name="Ellipse 60" opacity=".2" transform="translate(5609 3812)"></circle>
                <path d="m5621.366 3828.331-3.291 1.725a.594.594 0 0 1-.861-.621l.629-3.654-2.663-2.587a.589.589 0 0 1 .329-1.008l3.679-.533 1.646-3.323a.594.594 0 0 1 1.064 0l1.646 3.323 3.679.533a.591.591 0 0 1 .329 1.008l-2.663 2.586.627 3.652a.591.591 0 0 1-.859.623z"></path>
              </g>
            </svg>
          </div>
          <h4>Gold</h4>
          <div class="accounttypes__plan--section cost">$100,000 Min Deposit</div>
          <div class="accounttypes__plan--section">Min spread from 0.8 pips</div>
          <div class="accounttypes__plan--section">Max leverage up to 1:500</div>
          <div class="accounttypes__plan--section">Bonus up to 100%</div>
          <div class="accounttypes__plan--section">Customer support 24/5</div>
          <div class="accounttypes__plan--section">Personal account manager</div>
          <div class="accounttypes__plan--section underlined">Investment research & analytics from Trading Central</div>
          <div class="accounttypes__plan--section">Monthly session with a senior market analyst</div>
          <div class="accounttypes__plan--section btn">
            <button @click="openpage('signup')">Start Trading</button>
          </div>
        </div>

        <div class="accounttypes__plan">
          <div class="accounttypes__plan--star">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="1star" transform="translate(-5609 -3812)">
                <circle cx="12" cy="12" r="12" data-name="Ellipse 60" opacity=".2" transform="translate(5609 3812)"></circle>
                <path d="m5621.366 3828.331-3.291 1.725a.594.594 0 0 1-.861-.621l.629-3.654-2.663-2.587a.589.589 0 0 1 .329-1.008l3.679-.533 1.646-3.323a.594.594 0 0 1 1.064 0l1.646 3.323 3.679.533a.591.591 0 0 1 .329 1.008l-2.663 2.586.627 3.652a.591.591 0 0 1-.859.623z"></path>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="1star" transform="translate(-5609 -3812)">
                <circle cx="12" cy="12" r="12" data-name="Ellipse 60" opacity=".2" transform="translate(5609 3812)"></circle>
                <path d="m5621.366 3828.331-3.291 1.725a.594.594 0 0 1-.861-.621l.629-3.654-2.663-2.587a.589.589 0 0 1 .329-1.008l3.679-.533 1.646-3.323a.594.594 0 0 1 1.064 0l1.646 3.323 3.679.533a.591.591 0 0 1 .329 1.008l-2.663 2.586.627 3.652a.591.591 0 0 1-.859.623z"></path>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="1star" transform="translate(-5609 -3812)">
                <circle cx="12" cy="12" r="12" data-name="Ellipse 60" opacity=".2" transform="translate(5609 3812)"></circle>
                <path d="m5621.366 3828.331-3.291 1.725a.594.594 0 0 1-.861-.621l.629-3.654-2.663-2.587a.589.589 0 0 1 .329-1.008l3.679-.533 1.646-3.323a.594.594 0 0 1 1.064 0l1.646 3.323 3.679.533a.591.591 0 0 1 .329 1.008l-2.663 2.586.627 3.652a.591.591 0 0 1-.859.623z"></path>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="1star" transform="translate(-5609 -3812)">
                <circle cx="12" cy="12" r="12" data-name="Ellipse 60" opacity=".2" transform="translate(5609 3812)"></circle>
                <path d="m5621.366 3828.331-3.291 1.725a.594.594 0 0 1-.861-.621l.629-3.654-2.663-2.587a.589.589 0 0 1 .329-1.008l3.679-.533 1.646-3.323a.594.594 0 0 1 1.064 0l1.646 3.323 3.679.533a.591.591 0 0 1 .329 1.008l-2.663 2.586.627 3.652a.591.591 0 0 1-.859.623z"></path>
              </g>
            </svg>
          </div>
          <h4>Vip</h4>
          <div class="accounttypes__plan--section cost">By Invitation Only</div>
          <div class="accounttypes__plan--section">Min spread from 0 pips</div>
          <div class="accounttypes__plan--section">Max leverage up to 1:500</div>
          <div class="accounttypes__plan--section">Bonus up to 100%</div>
          <div class="accounttypes__plan--section">Customer support 24/5</div>
          <div class="accounttypes__plan--section">Dedicated Personal account manager</div>
          <div class="accounttypes__plan--section underlined">Investment research & analytics from Trading Central</div>
          <div class="accounttypes__plan--section">Weekly session with a senior market analyst</div>
          <div class="accounttypes__plan--section">Exclusive trading strategies</div>
          <div class="accounttypes__plan--section">Development of an individual business plan</div>
          <div class="accounttypes__plan--section btn">
            <button @click="openpage('signup')">Start Trading</button>
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
  methods: {
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

.padding {
  padding: #{scaleValue(10)} #{scaleValue(150)};
}

.accounttypes {
  background: #fff;
  min-height: 100vh;
  color: #1d1d1b;

  &__main {
      padding: #{scaleValue(20)} #{scaleValue(150)};
      margin-top: #{scaleValue(70)};

      &--top {
        margin-bottom: #{scaleValue(70)};
        display: flex;
        flex-direction: column;
        align-items: center;

        & h1 {
            font-size: #{scaleValue(40)};
            margin-bottom: #{scaleValue(20)};

            @media only screen and (max-width: 414px) { 
              font-size: #{scaleValue(180)};
              margin-bottom: #{scaleValue(100)};
            }

            & span {
              color: #fd4f31;
            }
        }

        & p {
            display: inline-block;
            margin-bottom: #{scaleValue(10)};
            font-size: #{scaleValue(16)};

            @media only screen and (max-width: 414px) { 
              font-size: #{scaleValue(70)};
              display: inline;
              font-weight: 300;
              line-height: #{scaleValue(76)};
            }
        }
      }


      &--bottom {
          display: flex;
          justify-content: space-between;

          @media only screen and (max-width: 414px) { 
            flex-direction: column;
          }
      }
  }

  &__plan {
    position: relative;
    background: #fff;
    border: 2px solid #efefef;
    border-radius: 1rem;
    width: #{scaleValue(310)};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: #{scaleValue(25)} #{scaleValue(50)};
    text-align: center;

    height: #{scaleValue(1000)};

    @media only screen and (max-width: 414px) { 
        flex-direction: column;
        padding: #{scaleValue(100)} #{scaleValue(100)};
        margin-bottom: #{scaleValue(100)};
        width: #{scaleValue(1300)};
        height: #{scaleValue(3400)};
    }

    & h4 {
      font-weight: 500;
      font-size: #{scaleValue(20)};
      margin-top: #{scaleValue(50)};
      margin-bottom: #{scaleValue(20)};

      @media only screen and (max-width: 414px) { 
        font-size: #{scaleValue(70)};
        margin-bottom: #{scaleValue(100)};
      }
    }

    &--star {
      justify-content: center;
      display: flex;
      align-items: center;

      @media only screen and (max-width: 414px) { 
        margin-bottom: #{scaleValue(100)};
      }

      & svg {
        fill: #fd4f31;
        height: #{scaleValue(25)};
        width: #{scaleValue(25)};
        display: inline-block;
        margin: 0 #{scaleValue(5)};

        @media only screen and (max-width: 414px) { 
          height: #{scaleValue(110)};
          width: #{scaleValue(110)};
        }
      }
    }

    &--section {
      margin: #{scaleValue(20)} 0;
      font-size: #{scaleValue(17)};
      font-weight: 300;

      &.cost {
        color: #fd4f31;
        font-weight: 700;
      }

      &.underlined {
        text-decoration: underline;
      }

      &.btn {
        position: absolute;
        bottom: #{scaleValue(17)};

        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }

      @media only screen and (max-width: 414px) { 
         font-size: #{scaleValue(60)};
         margin-bottom: #{scaleValue(130)};
      }

      & button {
        color: #fff;
        background: #fd4f31;

        border: 1px solid #fd4f31;
        border-radius: 3rem;
        padding: #{scaleValue(20)} #{scaleValue(30)};
        font-size: #{scaleValue(17)};
        cursor: pointer;
        
        @media only screen and (max-width: 414px) { 
            font-size: #{scaleValue(70)};
            padding: #{scaleValue(50)} #{scaleValue(100)};
        }
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
