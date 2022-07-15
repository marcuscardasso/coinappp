<template>
  <div>
    <div class="dex__rightnumbers">
        <div class="dex__rightnumbers--header">
            <div class="dex__rightnumbers--itemtype">
                <span>Symbol</span>
            </div>
            <div class="dex__rightnumbers--itemprice">
                <span>Sell</span>
            </div>
            <div class="dex__rightnumbers--itemtime">
                <span>Buy</span>
            </div>
        </div>
        <div class="dex__rightnumbers--body">
            <div class="dex__rightnumbers--items">
                <div class="dex__rightnumbers--item" v-for="item in rightNumberData">
                    <div class="dex__rightnumbers--itemtype">
                        <span class="typeicon down" v-if="item.itemType % 2 !== 0">
                            <svg>
                                <use xlink:href="@/assets/imgs/sprite.svg#icon-cheveron-down" />
                            </svg>
                        </span>
                        <span class="typeicon up" v-if="item.itemType % 2 === 0">
                            <svg>
                                <use xlink:href="@/assets/imgs/sprite.svg#icon-cheveron-up" />
                            </svg>
                        </span>
                        <p class="down" v-if="item.itemType % 2 !== 0">0.{{item.itemType}}</p>
                        <p class="up" v-if="item.itemType % 2 === 0">0.{{item.itemType}}</p>
                    </div>
                <div class="dex__rightnumbers--itemprice">
                    <span>{{item.itemPrice}}</span>
                </div>
                <div class="dex__rightnumbers--itemtime">
                    <span>{{item.itemTime}}</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            rightNumberData: this.rightNumbers()
        }
    },
    mounted() {
      setInterval(() => {
          this.rightNumberData = this.rightNumbers();
      }, 1000)
    },
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

    .dex {

    &__rightnumbers {
        position: relative;
        z-index: 4;
        border: .1px solid rgba(255,255,255,.2);
        background: rgb(8, 8, 33);
        width: #{scaleValue(320)};
        position: relative;

        &--header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: #{scaleValue(14)}; 
            opacity: .7;
            padding:  #{scaleValue(15)} #{scaleValue(20)};
            border-bottom: .1px solid rgba(255,255,255,.2);

            & div {
                display: flex;
                align-items: center;
                width: #{scaleValue(70)};
            }
        }

        &--item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: #{scaleValue(10)} #{scaleValue(20)};
            font-size: #{scaleValue(13)}; 

            &:nth-child(2n) {
                background: rgb(20, 20, 45);
            }

            & div {
                display: flex;
                align-items: center;
                width: #{scaleValue(70)};
                font-weight: 200;
            }
        }

        &--itemtype {
            display: flex;
            align-items: center;

            & span {
                display: flex;
                align-items: center;
                margin-right: #{scaleValue(7)};

                &.down {
                    color: red;

                    & svg {
                        fill: red;
                    }
                }

                &.up {

                    & svg {
                        fill: #008000;
                    }
                }

                & svg {
                    height: #{scaleValue(12)};
                    width:  #{scaleValue(12)};
                }
            }

            & p {

                &.down {
                    color: red;
                }

                &.up {
                    color: #008000;
                }
            }
        }

        &--itemprice {
            opacity: .8;
        }

        &--itemtime {
            opacity: .6;
        }

        &--bottomarea {
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            width: 100%;
            height: 3rem;
            
        }
    }
}
</style>
