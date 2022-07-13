<template>
  <div>
    <div class="footer">
          <div class="footer--left">
            <div class="footer--area">
              <h5>Risk Warning</h5>
              <span>Cxefinance Exchange (Forex) and Contracts For Differences (CFD’s) is highly speculative, carries a high level of risk and may not be suitable for all investors. You may sustain a loss of some or all of your invested capital, therefore, you should not speculate with capital that you cannot afford to lose. You should be aware of all the risks associated with trading on margin.</span>
            </div>
            <div class="footer--area">
              <h5>Our Offices</h5>
              <span>support@cxefinance.com</span>
            </div>
          </div>
          <div class="footer--right">
            <h5>Stay in Touch</h5>
            <div class="footer--input">
              <input placeholder="Subscribe to our Platform"/>
              <span class="go">
                <svg>
                  <use xlink:href="@/assets/imgs/sprite.svg#icon-arrow-right1" />
                </svg>
              </span>
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

  .footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: #{scaleValue(100)};

    @media only screen and (max-width: 414px) { 
      flex-direction: column;
    }

    & h5 {
        font-size: #{scaleValue(18)};
        margin-bottom: #{scaleValue(10)};
        font-weight: 500;

        @media only screen and (max-width: 414px) { 
          font-size: #{scaleValue(80)};
          margin-bottom: #{scaleValue(60)};
        }
      }

    &--left {
      display: flex;

      @media only screen and (max-width: 414px) { 
        flex-direction: column;
      }
    }

    &--area {
      width: #{scaleValue(400)};
      margin-right: #{scaleValue(40)};
      font-weight: 400;
      line-height: #{scaleValue(25)};

      @media only screen and (max-width: 414px) { 
         width: 100%;
         line-height: #{scaleValue(76)};
         font-size: #{scaleValue(60)};
         margin-bottom: #{scaleValue(70)};
      }
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
      overflow: hidden;

      & input {
        border: none;
        margin-right: #{scaleValue(10)};
        width: #{scaleValue(300)};
        outline: none;
        font-size: #{scaleValue(18)};

        @media only screen and (max-width: 414px) { 
          padding: #{scaleValue(50)} #{scaleValue(30)};
          font-size: #{scaleValue(55)};
          width: #{scaleValue(1200)};
        }
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

        @media only screen and (max-width: 414px) { 
          height: #{scaleValue(100)};
          width: #{scaleValue(100)};
        }
      }
    }
  }
</style>
