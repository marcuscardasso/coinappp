<template>
  <div class="dexgraph">
    <div class="dexgraph__body">
      <div class="tradingview-widget-container" id="chart">
        <div id="tradingview_114f3"></div>
        <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP" rel="noopener" target="_blank"><span class="blue-text">BTCUSD Chart</span></a> by TradingView</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    computed: {},
    mounted() {
      new TradingView.widget(
          {
            "width": 900,
            "height": 500,
            "symbol": "BINANCE:BTCUSDT",
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
    height: #{scaleValue(450)};
    display: flex;
    justify-content: center;
    align-items: center;

    &__body {
        height: 100%;
        overflow: hidden;

        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.tradingview-widget-copyright {
  opacity: 0;
}
</style>
