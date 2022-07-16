<template>
  <div class="dexgraph">
    <div class="dexgraph__body">
      <div class="tradingview-widget-container" id="chart">
        <div id="tradingview_114f3"></div>
        <div class="tradingview-widget-copyright" v-if="symbol === 'BINANCE:BTCUSDT'"><a href="https://www.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP" rel="noopener" target="_blank"><span class="blue-text">BTCUSD Chart</span></a> by TradingView</div>
        <div class="tradingview-widget-copyright" v-if="symbol === 'FX:AUDUSD'"><a href="https://www.tradingview.com/symbols/AUDUSD/?exchange=FX" rel="noopener" target="_blank"><span class="blue-text">AUDUSD Chart</span></a> by TradingView</div>
        <div class="tradingview-widget-copyright" v-if="symbol === 'COINBASE:BTCEUR'"><a href="https://www.tradingview.com/symbols/BTCEUR/?exchange=COINBASE" rel="noopener" target="_blank"><span class="blue-text">BTCEUR Chart</span></a> by TradingView</div>
        <div class="tradingview-widget-copyright" v-if="symbol === 'BINANCE:ETHUSDT'"><a href="https://www.tradingview.com/symbols/ETHUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span class="blue-text">ETHUSDT Chart</span></a> by TradingView</div>
        <div class="tradingview-widget-copyright" v-if="symbol === 'BINANCE:EURUSDT'"><a href="https://www.tradingview.com/symbols/EURUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span class="blue-text">EURUSDT Chart</span></a> by TradingView</div>
        <div class="tradingview-widget-copyright" v-if="symbol === 'FX:GBPJPY'"><a href="https://www.tradingview.com/symbols/GBPJPY/?exchange=FX" rel="noopener" target="_blank"><span class="blue-text">GBPJPY Chart</span></a> by TradingView</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    computed: {
      graphsymbol() {
        return this.symbol
      }
    },
    props: ['symbol'],
    mounted() {
      new TradingView.widget(
          {
            "width": 900,
            "height": 500,
            "symbol": this.graphsymbol,
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "container_id": "tradingview_114f3"
          }
        );
    }
  }
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.dexgraph {
    display: flex;

    &__body {
        height: 100%;
        overflow: hidden;
    }
}

.tradingview-widget-copyright {
  opacity: 0;
}
</style>
