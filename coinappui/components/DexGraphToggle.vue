<template>
  <div class="dexgraphtoggle">
    <div class="dexgraphtoggle__item" @click="graphtoggle('FX:AUDUSD')">
        <div class="dexgraphtoggle__item--top">AUDUSD</div>
        <div class="dexgraphtoggle__item--bottom">
            <div class="dexgraphtoggle__item--number">0.67<span class="red">67</span><span class="smallno">8</span></div>
            <div class="dexgraphtoggle__item--arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.414 17"><g id="icon-arrow-up" transform="translate(0.707 0.5)"><path id="Path_104" data-name="Path 104" d="M18,7.5v16" transform="translate(-14 -7.5)" fill="none" stroke="#fa374e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path id="Path_105" data-name="Path 105" d="M7.5,7.5l4,4,4-4" transform="translate(-7.5 4.5)" fill="none" stroke="#fa374e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></g></svg>
            </div>
            <div class="dexgraphtoggle__item--number">0.67<span class="green">67</span><span class="smallno">8</span></div>
        </div>
    </div>
    <div class="dexgraphtoggle__item" @click="graphtoggle('BINANCE:BTCUSDT')">
        <div class="dexgraphtoggle__item--top">BTC/USDT</div>
        <div class="dexgraphtoggle__item--bottom">
            <div class="dexgraphtoggle__item--number">0.67<span class="red">67</span><span class="smallno">8</span></div>
            <div class="dexgraphtoggle__item--arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.414 17"><g id="icon-arrow-up" transform="translate(0.707 0.5)"><path id="Path_104" data-name="Path 104" d="M18,7.5v16" transform="translate(-14 -7.5)" fill="none" stroke="#fa374e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path id="Path_105" data-name="Path 105" d="M7.5,7.5l4,4,4-4" transform="translate(-7.5 4.5)" fill="none" stroke="#fa374e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></g></svg>
            </div>
            <div class="dexgraphtoggle__item--number">0.67<span class="green">67</span><span class="smallno">8</span></div>
        </div>
    </div>
    <div class="dexgraphtoggle__item" @click="graphtoggle('COINBASE:BTCEUR')">
        <div class="dexgraphtoggle__item--top">BTC/EUR</div>
        <div class="dexgraphtoggle__item--bottom">
            <div class="dexgraphtoggle__item--number">0.67<span class="red">67</span><span class="smallno">8</span></div>
            <div class="dexgraphtoggle__item--arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.414 17"><g id="icon-arrow-up" transform="translate(0.707 0.5)"><path id="Path_104" data-name="Path 104" d="M18,7.5v16" transform="translate(-14 -7.5)" fill="none" stroke="#fa374e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path id="Path_105" data-name="Path 105" d="M7.5,7.5l4,4,4-4" transform="translate(-7.5 4.5)" fill="none" stroke="#fa374e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></g></svg>
            </div>
            <div class="dexgraphtoggle__item--number">0.67<span class="green">67</span><span class="smallno">8</span></div>
        </div>
    </div>
    <div class="dexgraphtoggle__item" @click="graphtoggle('BINANCE:ETHUSDT')">
        <div class="dexgraphtoggle__item--top">ETH/USDT</div>
        <div class="dexgraphtoggle__item--bottom">
            <div class="dexgraphtoggle__item--number">0.67<span class="red">67</span><span class="smallno">8</span></div>
            <div class="dexgraphtoggle__item--arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.414 17"><g id="icon-arrow-up" transform="translate(0.707 0.5)"><path id="Path_104" data-name="Path 104" d="M18,7.5v16" transform="translate(-14 -7.5)" fill="none" stroke="#fa374e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path id="Path_105" data-name="Path 105" d="M7.5,7.5l4,4,4-4" transform="translate(-7.5 4.5)" fill="none" stroke="#fa374e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></g></svg>
            </div>
            <div class="dexgraphtoggle__item--number">0.67<span class="green">67</span><span class="smallno">8</span></div>
        </div>
    </div>
    <div class="dexgraphtoggle__item" @click="graphtoggle('BINANCE:EURUSDT')">
        <div class="dexgraphtoggle__item--top">EUR/USD</div>
        <div class="dexgraphtoggle__item--bottom">
            <div class="dexgraphtoggle__item--number">0.67<span class="red">67</span><span class="smallno">8</span></div>
            <div class="dexgraphtoggle__item--arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.414 17"><g id="icon-arrow-up" transform="translate(0.707 0.5)"><path id="Path_104" data-name="Path 104" d="M18,7.5v16" transform="translate(-14 -7.5)" fill="none" stroke="#fa374e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path id="Path_105" data-name="Path 105" d="M7.5,7.5l4,4,4-4" transform="translate(-7.5 4.5)" fill="none" stroke="#fa374e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></g></svg>
            </div>
            <div class="dexgraphtoggle__item--number">0.67<span class="green">67</span><span class="smallno">8</span></div>
        </div>
    </div>
    <div class="dexgraphtoggle__item" @click="graphtoggle('FX:GBPJPY')">
        <div class="dexgraphtoggle__item--top">GBP/JPY</div>
        <div class="dexgraphtoggle__item--bottom">
            <div class="dexgraphtoggle__item--number">0.67<span class="red">67</span><span class="smallno">8</span></div>
            <div class="dexgraphtoggle__item--arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.414 17"><g id="icon-arrow-up" transform="translate(-6.793 -7)"><path id="Path_104" data-name="Path 104" d="M18,23.5V7.5" transform="translate(-6.5 0)" fill="none" stroke="#00ca72" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path id="Path_105" data-name="Path 105" d="M7.5,11.5l4-4,4,4" transform="translate(0 0)" fill="none" stroke="#00ca72" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></g></svg>
            </div>
            <div class="dexgraphtoggle__item--number">0.67<span class="green">67</span><span class="smallno">8</span></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['graphtoggle'],
    methods: {
      generateArrow() {
          const number = Math.floor((Math.random() * 100) + 1);
          return number
      },
      generateTime() {
          const time = `${Math.floor((Math.random() * 20) + 1)}:${Math.floor((Math.random() * 60) + 1)}:${Math.floor((Math.random() * 60) + 1)}`;
          return time;
      },
      generatePrice() { 
        return Math.random() * (8000 - 1000) + 1000;
      },
      rightNumbers () {
        const items = Array.apply(null, Array(100));
        let rightNumbers = []
          
        rightNumbers = items.map(item => item = {
            itemType: this.generateArrow(),
            itemPrice: `${Math.floor(this.generatePrice())}.${this.generateArrow()}`,
            itemTime:  this.generateTime()
        });
              
        return rightNumbers;
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
    .dexgraphtoggle {
        display: flex;
        align-items: center;
        justify-content: space-between;;
        padding: #{scaleValue(10)} #{scaleValue(14)};
        border-bottom: .1px solid rgba(255,255,255,.2);

        @media only screen and (max-width: 414px) {
            flex-wrap: wrap;
            align-items: flex-start;

            padding-top: #{scaleValue(100)};
        }

        &__item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            line-height: #{scaleValue(25)};
            font-size: #{scaleValue(12)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(50)};
                align-items: flex-start;
                margin-bottom: #{scaleValue(140)};
                justify-content: center;
            }

            &--top {
                text-transform: uppercase;

                @media only screen and (max-width: 414px) {
                    font-size: #{scaleValue(60)};
                    margin-bottom: #{scaleValue(50)};
                }
            }
            
            &--bottom {
                display: flex;
                align-items: center;
                align-items: center;

                @media only screen and (max-width: 414px) {
                    font-size: #{scaleValue(50)};
                }

                & svg {
                    fill: red;
                    height: #{scaleValue(18)};
                    width: #{scaleValue(20)};

                    @media only screen and (max-width: 414px) {
                        height: #{scaleValue(60)};
                        width: #{scaleValue(60)};
                    }
                }
            }

            &--arrow {
                display: flex;
                align-items: center;
                margin: 0 #{scaleValue(6)};
            }
        }
    }
</style>
