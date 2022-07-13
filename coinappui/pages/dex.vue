<template>
  <div>
    <div class="dex container">
        <div class="dex__header">
            <DexHeader />
        </div>
        <div class="dex__body">
            <div class="dex__left">
                <div class="dex__flexarea dex__sectionzero">
                    <div class="dex__sectionzero--coins">
                        <span class="ethlogo">
                            <img src="@/assets/imgs/ethlogo.png"/>
                        </span>
                        <span>ETH/USDC</span>
                    </div>
                     <div class="dex__sectionzero--dropdown">
                        <span>All Markets</span>
                        <span></span>
                    </div>
                </div>
                <div class="dex__flexareacolumn dex__sectionone">
                    <div class="dex__flexarea dex__sectionone--labels">
                        <span>Account</span>
                        <span class="bridgehighlight">Bridge USDC</span>
                    </div>
                    <div class="dex__flexarea dex__sectionone--labels">
                        <span>Balance</span>
                        <span class="bridgenumber">$100.00</span>
                    </div>
                    <div class="dex__sectionone--btnarea">
                        <button @click="orderActionToggle('sell')" v-bind:class="{ current: orderAction === 'sell' }">sell</button>
                        <button @click="orderActionToggle('buy')" v-bind:class="{ current: orderAction === 'buy' }">buy</button>
                    </div>
                </div>

                <div class="dex__sectiontwo">
                    <div class="dex__sectiontwo--inputarea dex__flexareacolumn">
                        <div class="dex__sectiontwo--area">
                            <span>Collateral</span>
                            <span>USDC</span>
                        </div>
                        <div class="dex__sectiontwo--inputbody">
                            <input class="dex__sectiontwo--input" v-model="collateral"/>
                            <span class="maxbtn">MAX</span>
                        </div>
                    </div>
                    <div class="dex__sectiontwo--inputarea dex__flexareacolumn">
                        <div class="dex__sectiontwo--area">
                            <span>Position Size</span>
                            <span>ETH</span>
                        </div>
                        <input class="dex__sectiontwo--input" v-model="positionSize"/>
                    </div>
                </div>

                <div class="dex__flexareacolumn dex__sectionfour">
                    <h4>Buy Summary</h4>
                    <div class="dex__flexareacolumn dex__buysummary">
                        <div class="dex__flexarea">
                            <span class="dex__buysummary--left">Liquidation Price</span>
                            <span>$1,943.43</span>
                        </div>
                        <div class="dex__flexarea">
                            <span class="dex__buysummary--left">Open Price</span>
                            <span>$2,943.43</span>
                        </div>
                        <div class="dex__flexarea">
                            <span class="dex__buysummary--left">Open Fee</span>
                            <span>$1.00</span>
                        </div>
                        <div class="dex__flexarea">
                            <span class="dex__buysummary--left">Price Impact</span>
                            <span>0.2%</span>
                        </div>
                        <div class="dex__flexarea">
                            <span class="dex__buysummary--left">Spread</span>
                            <span>0.12%</span>
                        </div>
                        <div class="dex__flexarea dex__buysummary--totalcost">
                            <span>Total Cost</span>
                            <span>$51.00</span>
                        </div>
                        <button class="dex__btn">PLACE BUY ORDER</button>
                    </div>
                </div>
            </div>

            <div class="dex__right">
                <div class="dex__righttop">
                    <div class="dex__righttophead">
                        <div class="dex__righttophead--item">
                            <span class="value">$2,453.38</span>
                            <span class="label">Market Price</span>
                        </div>
                        <div class="dex__righttophead--item">
                            <span class="value">$4,453.38</span>
                            <span class="label">Index Price</span>
                        </div>
                        <div class="dex__righttophead--item">
                            <span class="value">$55,119,556.89</span>
                            <span class="label">24hr Volume</span>
                        </div>
                        <div class="dex__righttophead--item">
                            <span class="value green">0.03%</span>
                            <span class="label">Funding Rate</span>
                        </div>
                    </div>
                </div>

                <div class="dex__rightbase">
                    <div class="dex__graphtop">

                    </div>
                    <div class="dex__graph">
                        <DexGraph />
                    </div>
                    <div class="dex__rightnumbers">
                        <div class="dex__rightnumbers--header">
                            <div class="dex__rightnumbers--itemtype">
                                <span>Size ETH</span>
                            </div>
                            <div class="dex__rightnumbers--itemprice">
                                <span>Price USD</span>
                            </div>
                            <div class="dex__rightnumbers--itemtime">
                                <span>Time</span>
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

                        <div class="dex__rightnumbers--bottomarea"></div>
                    </div>
                </div>

                <div class="dex__rightbottom">
                    <div class="dex__rightbottomhead">
                        <div class="dex__rightbottomhead--position">
                            <p>position</p>
                        </div>
                    </div>
                    <div class="dex__rightbottombase">
                        <div class="dex__rightbottombase--left">
                            <div class="dex__rightbottombase--leftitem long">
                                <span class="ethlogo">
                                    <img src="@/assets/imgs/ethlogo.png"/>
                                </span>
                                <span class="green one">long</span>
                            </div>
                            <div class="dex__rightbottombase--leftitem">
                                <span>
                                    <svg>
                                        <use xlink:href="@/assets/imgs/sprite.svg#icon-arrow-right1" />
                                    </svg>
                                </span>
                                <span class="green two">$250.38</span>
                            </div>
                            <div class="dex__rightbottombase--leftitem">
                                <span>
                                    <svg>
                                        <use xlink:href="@/assets/imgs/sprite.svg#icon-arrow-right1" />
                                    </svg>
                                </span>
                                <span class="three">0.1017 ETH</span>
                            </div>
                        </div>

                        <div class="dex__rightbottombase--right">
                            <div class="dex__rightbottombase--rightarea">
                                <div class="dex__rightbottombase--rightareaitem">
                                    <h5>LEVERAGE</h5>
                                    <div class="dex__rightbottombase--position">
                                        <span>
                                            <svg>
                                                <use xlink:href="@/assets/imgs/sprite.svg#icon-arrow-right1" />
                                            </svg>
                                        </span>
                                        <span>5x</span>
                                    </div>
                                </div>
                                <div class="dex__rightbottombase--rightareaitem">
                                    <h5>UNREALIZED P&L</h5>
                                    <div class="dex__rightbottombase--position red">
                                        <span>
                                            <svg>
                                                <use xlink:href="@/assets/imgs/sprite.svg#icon-arrow-right1" />
                                            </svg>
                                        </span>
                                        <span>0.00</span>
                                        <span>0.00%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="dex__rightbottombase--rightarea">
                                <div class="dex__rightbottombase--rightareaitem">
                                    <h5>Liquidation Price</h5>
                                    <div class="dex__rightbottombase--position">
                                        <span>
                                            <svg>
                                                <use xlink:href="@/assets/imgs/sprite.svg#icon-arrow-right1" />
                                            </svg>
                                        </span>
                                        <span>$1,942.10</span>
                                    </div>
                                </div>
                                <div class="dex__rightbottombase--rightareaitem">
                                    <h5>UNREALIZED P&L</h5>
                                    <div class="dex__rightbottombase--position red">
                                        <span>
                                            <svg>
                                                <use xlink:href="@/assets/imgs/sprite.svg#icon-arrow-right1" />
                                            </svg>
                                        </span>
                                        <span>0.00</span>
                                        <span>0.00%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="dex__rightbottombase--rightarea">
                                <button>Close Position</button>
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
export default {
  data() {
      return {
          collateral: '50.00',
          positionSize: '0.1017915',
          orderAction: 'buy',
          rightNumberData: this.rightNumbers()
      }
  },
  mounted() {
      setInterval(() => {
          this.rightNumberData = this.rightNumbers();
      }, 1000)
  },
  methods: {
      orderActionToggle(value) {
          this.orderAction = value;
      },
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
        const items = Array.apply(null, Array(200));
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
    min-height: 100vh;
    background: rgb(8, 8, 33);

    &__body {
        display: flex;
        justify-content: center;
    }

    &__left {
        position: relative;
        width: #{scaleValue(350)};
        height: #{scaleValue(836)};
        background: rgb(19, 19, 47);
        padding: #{scaleValue(16)} #{scaleValue(16)};

        border-right: .1px solid rgba(255,255,255,.2);

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: #{scaleValue(57)};
            width: 100%;
            background: rgb(27, 27, 54);
        }
    }

    &__flexarea {
        display: flex;
        justify-content: space-between;
    }

    &__flexareacolumn {
        display: flex;
        flex-direction: column;

        & h4 {
            font-weight: 500;
            font-size: #{scaleValue(17)};
            margin-bottom: #{scaleValue(14)};
        }
    }

    &__sectionzero {
        position: relative;
        padding: #{scaleValue(5)} 0;
        display: flex;
        align-items: center;
        z-index: 1;
        margin-bottom: #{scaleValue(30)};

        &--coins {
            font-size: #{scaleValue(16)};
            display: flex;
            align-items: center;

            & span {
                display: inline-block;

                &.ethlogo {
                    height: #{scaleValue(20)};
                    width: #{scaleValue(20)};
                    margin-right: #{scaleValue(10)};

                    & img {
                        object-fit: cover;
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }

        &--dropdown {
            font-size: #{scaleValue(12)};
            display: flex;
            align-items: center;
        }
    }

    &__sectionone {
        position: relative;

        &--labels {
            line-height: #{scaleValue(30)};
            position: relative;

            &:nth-child(2) {
                padding-bottom: #{scaleValue(15)};

                &:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: .3px;
                    width: 100%;
                    background: #fff;
                    opacity: .2;
                }
            }

            & span {

                &:nth-child(1) {
                    color: rgba(255,255,255,.5);
                    font-size: #{scaleValue(14)};
                }

                &:nth-child(2) {
                    color: rgba(255,255,255,.8);
                    font-size: #{scaleValue(13)};
                }

                &.bridgehighlight {
                    background: rgb(43, 43, 69);
                    padding: #{scaleValue(1)} #{scaleValue(10)};
                    border-radius: .4rem;
                }

                &.bridgenumber {
                    font-size: #{scaleValue(15)};
                }
            }
        }

        &--btnarea {
            border: .1px solid rgba(255,255,255,.3);
            border-radius: .3rem;
            display: flex;
            justify-content: space-between;
            margin-top: #{scaleValue(20)};

            & button {
                width: 50%;
                border-radius: .3rem;
                padding: #{scaleValue(10)} #{scaleValue(14)};
                text-transform: uppercase;
                color: #fff;

                &.current {
                    background: rgb(78, 227, 158);
                    color: #000000;
                }
            }
        }
    }

    &__sectiontwo {
        margin-top: #{scaleValue(25)};

        &--inputarea {
            margin-bottom: #{scaleValue(20)};
        }

        &--inputbody {
            position: relative;

            & span {

                &.maxbtn {
                    position: absolute;
                    right: 0;
                    top: 0;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    padding: 0 #{scaleValue(15)};
                    padding-top: #{scaleValue(12)};
                    font-size: #{scaleValue(12)};
                    cursor: pointer;
                }
            }
        }

        &--area {
            display: flex;
            align-items: center;
            position: relative;

            & span {
                display: inline-block;

                &:nth-child(1) {
                    font-size: #{scaleValue(13)};
                    opacity: .6;
                    margin-right: #{scaleValue(6)};
                }

                &:nth-child(2) {
                    font-size: #{scaleValue(15)};
                    margin-right: #{scaleValue(4)};
                }
            }
        }

        &--input {
            margin-top: #{scaleValue(10)};
            border: .1px solid rgba(255,255,255,.3);
            background: #1F1F3A;
            color: #fff;
            height: #{scaleValue(15)};
            outline: none;
            padding: #{scaleValue(25)} #{scaleValue(15)};
            border-radius: .5rem;
            font-size: #{scaleValue(15)};
            min-width: 100%;
        }
    }

    &__sectionfour {
        margin-top: #{scaleValue(55)};
    }

    &__buysummary {
        font-size: #{scaleValue(13)};
        line-height: #{scaleValue(26)};

        letter-spacing: #{scaleValue(1)};
        
        &--left {
            opacity: .6;
        }

        &--totalcost {
            position: relative;
            margin-top: #{scaleValue(12)};
            margin-bottom: #{scaleValue(22)};
            font-size: #{scaleValue(15)};
            padding-top: #{scaleValue(20)};

            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                height: .3px;
                width: 100%;
                background: #fff;
                opacity: .2;
            }
        }
    }

    &__btn {
        background: rgb(78, 227, 158);
        color: #244249;
        font-size: #{scaleValue(16)};
        padding: #{scaleValue(16)} 0;
        border-radius: .5rem;
    }

    &__right {
        width: #{scaleValue(994)};
    }

    &__righttophead {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: .1px solid rgba(255,255,255,.2);
        padding: #{scaleValue(20)} #{scaleValue(16)};
        font-size: #{scaleValue(18)};
        padding-right: #{scaleValue(60)}; 

        &--item {
            display: flex;

            & span {
                display: flex;
                align-items: self-end;

                &.value {
                    margin-right: #{scaleValue(10)};
                    letter-spacing: #{scaleValue(1)};
                    opacity: .7;
                }

                &.label {
                    font-size: #{scaleValue(11)};
                    color: rgba(255,255,255,.5)
                }

                &.green {
                    color: #008000;
                    opacity: 1;
                }
            }
        }
    }

    &__rightbottom {
        background: rgb(18, 18, 46);
        padding-bottom: #{scaleValue(30)}; 
    }

    &__rightbottomhead {
        border-top: .1px solid rgba(255,255,255,.2);
        border-bottom: .1px solid rgba(255,255,255,.2);
        padding: #{scaleValue(15)} #{scaleValue(20)};
        display: flex;
        align-items: center;

        &--position {
            text-transform: uppercase;
            font-size: #{scaleValue(12)};
            display: flex;
            align-items: center;
        }
    }

    &__rightbottombase {
        display: flex;
        padding: #{scaleValue(10)} #{scaleValue(20)};
        padding-top: #{scaleValue(20)}; 

        &--left {
            display: flex;
            flex-direction: column;
            width: #{scaleValue(200)};
            padding-top: #{scaleValue(10)};
            padding-bottom: #{scaleValue(30)};
            position: relative;

            &:before {
                position: absolute;
                content: '';
                right: 0;
                top: #{scaleValue(2)};
                width: 1.5px;
                height: 100%;
                background: rgba(255,255,255,.2);
            }
        }

        &--leftitem {
            display: flex;
            align-items: center;
            margin-top: #{scaleValue(16)};

            &.long {
                margin-bottom: #{scaleValue(10)};
            }

            & span {
                display: flex;
                align-items: center;
                text-transform: uppercase;
                margin-right: #{scaleValue(11)};

                & svg {
                    fill: #008000;
                    height: #{scaleValue(15)};
                    width: #{scaleValue(15)};
                }

                &.ethlogo {
                    height: #{scaleValue(30)};
                    width: #{scaleValue(30)};

                    & img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }
                }

                &.green {
                    color: #008000;
                }

                &.one {
                    background: #1A253B;
                    font-size: #{scaleValue(12)};
                    padding: #{scaleValue(6)} #{scaleValue(10)};
                    border-radius: .3rem;
                }

                &.two {
                    font-size: #{scaleValue(17)};
                }

                &.three {
                    font-size: #{scaleValue(20)};
                }
            }
        }

        &--right {
            display: flex;
            padding-top: #{scaleValue(30)};
            padding-left: #{scaleValue(40)};
            position: relative;
        }

        &--rightarea {
            display: flex;
            flex-direction: column;
            margin-right: #{scaleValue(80)};

            & button {
                background: rgb(36, 56, 76);
                border-radius: .3rem;
                padding: #{scaleValue(13)} #{scaleValue(20)};
                cursor: pointer;
                position: absolute;
                right: #{scaleValue(-200)};
                top: #{scaleValue(-5)};
            }
        }

        &--rightareaitem {
            margin-bottom: #{scaleValue(25)};

            & h5 {
                opacity: .5;
                text-transform: uppercase;
                font-size: #{scaleValue(12)};
                font-weight: 500;
                margin-bottom: #{scaleValue(10)};
            }
        }

        &--position {
            display: flex;
            align-items: center;
            
            &.red {
                color: red;
                font-size: #{scaleValue(20)};

                & span {

                    & svg {
                        fill: red;
                    }

                    &:nth-child(3) {
                        font-size: #{scaleValue(12)};
                    }
                }
            }

            & span {
                display: flex;
                align-items: center;

                &:nth-child(1) {
                    margin-right: #{scaleValue(10)};
                }

                &:nth-child(2) {
                    font-size: #{scaleValue(25)};
                    font-weight: 200;
                    margin-right: #{scaleValue(10)};
                }

                & svg {
                    fill: #fff;
                    height: #{scaleValue(15)};
                    width: #{scaleValue(15)};
                }
            }
        }
    }

    &__rightbase {
        display: flex;
        padding-top: #{scaleValue(20)}; 
        padding-bottom: #{scaleValue(20)}; 
        //background: rgb(8, 8, 33);
    }

    &__graph {
        width: #{scaleValue(700)}; 
        height: #{scaleValue(400)}; 
        color: #fff;
    }

    &__rightnumbers {
        border: .1px solid rgba(255,255,255,.2);
        border-radius: .9rem;
        margin-left: #{scaleValue(20)}; 
        width: #{scaleValue(400)};
        position: relative;

        &--header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: #{scaleValue(12)}; 
            opacity: .7;
            padding:  #{scaleValue(15)} #{scaleValue(20)};
            border-bottom: .1px solid rgba(255,255,255,.2);

            & div {
                display: flex;
                align-items: center;
                width: #{scaleValue(70)};
            }
        }

        &--body {
            overflow: scroll;
            height: #{scaleValue(400)};
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
            background: green;
            display: flex;
            width: 100%;
            height: 3rem;
            
        }
    }
}
</style>