<template>
  <div>
    <div class="dex container">
        <div class="dex__tradeslide">
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
  "colorTheme": "dark",
  "isTransparent": false,
  "displayMode": "adaptive",
  "locale": "en"
}
  </script>
</div>
<!-- TradingView Widget END -->
        </div>
        <div class="dex__header">
            <DexHeader />
        </div>
        <Popup :message="error" :functiontorun="resetError" v-if="error"/>
        <div class="dex__body">
            <div class="dex__left">
                <div class="dex__flexarea dex__sectionzero">
                    <div class="dex__sectionzero--coins">
                        <span class="ethlogo">
                            <img src="@/assets/imgs/ethlogo.png"/>
                        </span>
                        <span>ETH/USDC</span>
                    </div>
                     <!--<div class="dex__sectionzero--dropdown">
                        <span>All Markets</span>
                        <span></span>
                    </div>-->
                </div>
                <div class="dex__flexareacolumn dex__sectionone">
                    <div class="dex__flexarea dex__sectionone--labels" v-if="user">
                        <span>Account</span>
                        <span class="bridgehighlight">{{truncate(`${user._id}`, 15)}}</span>
                    </div>
                    <div class="dex__flexarea dex__sectionone--labels" v-if="user">
                        <span>Balance</span>
                        <span class="bridgenumber">${{user.balance}}.00</span>
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
                        <!--<div class="dex__flexarea">
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
                        </div>-->
                        <div class="dex__flexarea dex__buysummary--totalcost">
                            <span>Total Cost</span>
                            <span>$51.00</span>
                        </div>
                        <button class="dex__btn" @click="placeorder">PLACE BUY ORDER</button>
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
                    <div class="dex__assets">
                        <div class="dex__dropdowns">
                            <div class="dex__dropdown" @click="toggleassets('favorites')">
                                <div class="dex__dropdown--left dex__dropdown--area">
                                    <span class="dex__dropdown--icon">
                                        <svg id="icon-favorite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g id="Group_173" data-name="Group 173"><path id="Path_203" data-name="Path 203" d="M0,0H20V20H0Z" fill="none"></path><path id="Path_204" data-name="Path 204" d="M0,0H20V20H0Z" fill="none"></path></g><g id="Group_174" data-name="Group 174" transform="translate(1.667 1.667)"><path id="Path_205" data-name="Path 205" d="M10.333,14.725l5.15,3.108-1.367-5.858,4.55-3.942-5.992-.508L10.333,2,7.992,7.525,2,8.033l4.55,3.942L5.183,17.833Z" transform="translate(-2 -2)"></path></g></svg>
                                    </span>
                                    <span class="dex__dropdown--label">Favorites</span>
                                </div>
                                <div class="dex__dropdown--right  dex__dropdown--area">
                                    <span class="dex__dropdown--drop">
                                        <svg>
                                            <use xlink:href="@/assets/imgs/sprite.svg#icon-chevron-down" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <AssetsRow v-if="assetview === 'favorites'"/>
                            <div class="dex__dropdown" @click="toggleassets('forex')">
                                <div class="dex__dropdown--left dex__dropdown--area">
                                    <span class="dex__dropdown--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><defs><clipPath id="clip-path"><rect id="Rectangle_181" data-name="Rectangle 181" width="16.455" height="16" fill="none"></rect></clipPath></defs><g id="forex-icon" transform="translate(13 -15)"><g id="Group_72" data-name="Group 72" transform="translate(-11 17)" clip-path="url(#clip-path)"><path id="Path_143" data-name="Path 143" d="M8.253,8.244C4.475,8.244,1.368,7.26,0,5.753v.2c0,1.963,3.686,3.5,8.253,3.5,4.524,0,8.2-1.533,8.2-3.5v-.2C15.068,7.26,12,8.244,8.253,8.244" transform="translate(0 6.548)"></path><path id="Path_144" data-name="Path 144" d="M3.829,8.312V6.6A7.144,7.144,0,0,1,0,4.547v.8C0,6.632,1.456,7.718,3.829,8.312" transform="translate(0 5.175)"></path><path id="Path_145" data-name="Path 145" d="M5.925,6.6V8.312c2.288-.594,3.787-1.681,3.787-2.961v-.8A7.464,7.464,0,0,1,5.925,6.6" transform="translate(6.744 5.175)"></path><path id="Path_146" data-name="Path 146" d="M4.954,5.772V7.538a12.628,12.628,0,0,0,1.311-.18V5.577c-.458.086-.84.13-1.311.195" transform="translate(5.639 6.348)"></path><path id="Path_147" data-name="Path 147" d="M3.091,5.715V7.5c.4,0,.853.038,1.238.038V5.766c-.385,0-.84-.036-1.238-.051" transform="translate(3.518 6.505)"></path><path id="Path_148" data-name="Path 148" d="M2.15,5.577V7.358a10.25,10.25,0,0,0,1.283.18V5.772c-.458-.064-.9-.107-1.283-.195" transform="translate(2.447 6.348)"></path><path id="Path_149" data-name="Path 149" d="M4.023,5.766V7.541c.4,0,.817-.038,1.223-.038V5.715c-.406.015-.827.051-1.223.051" transform="translate(4.579 6.505)"></path><path id="Path_150" data-name="Path 150" d="M8.253,6.141c-3.778,0-6.885-1-8.253-2.485v.2C0,5.792,3.686,7.336,8.253,7.336c4.524,0,8.2-1.544,8.2-3.483v-.2C15.068,5.142,12,6.141,8.253,6.141" transform="translate(0 4.161)"></path><path id="Path_151" data-name="Path 151" d="M3.829,6.2V4.482A7.438,7.438,0,0,1,0,2.468v.768C0,4.482,1.456,5.6,3.829,6.2" transform="translate(0 2.809)"></path><path id="Path_152" data-name="Path 152" d="M5.925,4.481V6.2C8.213,5.6,9.712,4.481,9.712,3.234V2.469A7.788,7.788,0,0,1,5.925,4.481" transform="translate(6.744 2.81)"></path><path id="Path_153" data-name="Path 153" d="M6.264,5.237V3.477a8.9,8.9,0,0,1-1.311.173v1.8a11.556,11.556,0,0,0,1.311-.218" transform="translate(5.637 3.958)"></path><path id="Path_154" data-name="Path 154" d="M4.329,5.453V3.685A9.062,9.062,0,0,1,3.091,3.6V5.4c.4.036.853.058,1.238.058" transform="translate(3.518 4.096)"></path><path id="Path_155" data-name="Path 155" d="M3.434,5.454v-1.8a7.651,7.651,0,0,1-1.285-.173V5.236a9.024,9.024,0,0,0,1.285.218" transform="translate(2.446 3.959)"></path><path id="Path_156" data-name="Path 156" d="M5.246,5.4V3.6a8.468,8.468,0,0,1-1.223.088V5.453c.4,0,.819-.021,1.223-.058" transform="translate(4.579 4.096)"></path><path id="Path_157" data-name="Path 157" d="M8.253,7.015c4.524,0,8.2-1.557,8.2-3.49C16.455,1.572,12.778,0,8.253,0,3.686,0,0,1.572,0,3.526c0,1.933,3.686,3.49,8.253,3.49M3.265,3.207H4.287a3.079,3.079,0,0,1,.55-.992l1.353.158A1.3,1.3,0,0,0,5.713,3.4c-.109.449.261.564.635.564.464,0,.659-.225,1.116-.819A2.645,2.645,0,0,1,9.825,1.927c1.078,0,2.027.447,2.17,1.214h1.319l-.094.53v.173h-1.2a1.8,1.8,0,0,1-.573,1.223L10,4.828a2.542,2.542,0,0,0,.661-1.157c0-.415-.2-.639-.731-.639a1.288,1.288,0,0,0-1.131.74,2.6,2.6,0,0,1-2.337,1.3A2.164,2.164,0,0,1,4.323,3.909H3.216Z" transform="translate(0 0)"></path></g><rect id="Rectangle_183" data-name="Rectangle 183" width="20" height="20" transform="translate(-13 15)" fill="none"></rect><path id="Path_212" data-name="Path 212" d="M0,0H20V20H0Z" transform="translate(-13 15)" fill="none"></path></g></svg> </span>
                                    <span class="dex__dropdown--label">Forex</span>
                                </div>
                                <div class="dex__dropdown--right  dex__dropdown--area">
                                    <span class="dex__dropdown--drop">
                                        <svg>
                                            <use xlink:href="@/assets/imgs/sprite.svg#icon-chevron-down" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <AssetsRow v-if="assetview === 'forex'"/>
                            <div class="dex__dropdown" @click="toggleassets('stocks')">
                                <div class="dex__dropdown--left dex__dropdown--area">
                                    <span class="dex__dropdown--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17.6"><g id="stocks_icon" data-name="stocks icon" transform="translate(-57 -822)"><rect id="Rectangle_556" data-name="Rectangle 556" width="20" height="17.6" transform="translate(57 822)" fill="none"></rect><g id="stocks" transform="translate(5 5.15)"><path id="Path_226" data-name="Path 226" d="M20.288,689.555H15a.483.483,0,0,0-.483.483v2.787a.483.483,0,0,0,.483.483h7.332a6.369,6.369,0,0,1-2.043-3.753" transform="translate(39.485 138.413)"></path><path id="Path_227" data-name="Path 227" d="M6.7,627.07a6.337,6.337,0,0,1,1.1-3.569H.483a.483.483,0,0,0-.483.483v2.786a.483.483,0,0,0,.483.483H6.7c0-.061,0-.122,0-.183" transform="translate(53 199.908)"></path><path id="Path_228" data-name="Path 228" d="M30.715,557.447H22.543a.483.483,0,0,0-.483.483v2.787a.483.483,0,0,0,.483.483h6.434a6.4,6.4,0,0,1,2.221-1.525V557.93a.483.483,0,0,0-.483-.483" transform="translate(32.463 261.403)"></path><path id="Path_229" data-name="Path 229" d="M125.117,606.2a4.764,4.764,0,0,0-4.763,4.763c0,.062,0,.123,0,.183a4.763,4.763,0,1,0,4.759-4.947m0,7.683a2.92,2.92,0,1,1,2.92-2.92,2.92,2.92,0,0,1-2.92,2.92" transform="translate(-59.047 216.014)"></path><path id="Path_230" data-name="Path 230" d="M168,642.028h-.755v.808h-1.206v1.892h2.532v.383h-2.532v.754h1.206v.808H168v-.808h1.18v-1.892h-2.506v-.383h2.506v-.754H168Z" transform="translate(-101.581 182.66)"></path></g></g></svg>
                                    </span>
                                    <span class="dex__dropdown--label">Stocks</span>
                                </div>
                                <div class="dex__dropdown--right  dex__dropdown--area">
                                    <span class="dex__dropdown--drop">
                                        <svg>
                                            <use xlink:href="@/assets/imgs/sprite.svg#icon-chevron-down" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <AssetsRow v-if="assetview === 'stocks'"/>
                            <div class="dex__dropdown" @click="toggleassets('cryptocurencies')">
                                <div class="dex__dropdown--left dex__dropdown--area">
                                    <span class="dex__dropdown--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g id="crypto-icon" transform="translate(-12 -587)"><path id="Icon_simple-bitcoin" data-name="Icon simple-bitcoin" d="M15.76,9.936A8,8,0,1,1,9.935.238a7.995,7.995,0,0,1,5.825,9.7ZM11.527,6.86c.16-1.06-.649-1.633-1.76-2.02l.36-1.435-.877-.22L8.9,4.59c-.23-.058-.47-.111-.709-.167L8.541,3l-.88-.22L7.3,4.228c-.19-.045-.377-.088-.56-.133l-1.21-.3L5.3,4.733s.65.15.637.157a.469.469,0,0,1,.41.511L5.36,9.348a.329.329,0,0,1-.409.209c.01.013-.64-.16-.64-.16L3.871,10.4l1.14.284.62.161-.36,1.46.88.218.36-1.447c.24.067.47.127.7.182L6.871,12.7l.88.22.363-1.46c1.493.285,2.62.171,3.093-1.183A1.542,1.542,0,0,0,10.4,8.145a1.4,1.4,0,0,0,1.12-1.287h.007ZM9.52,9.674c-.269,1.093-2.1.5-2.7.353L7.3,8.094c.6.153,2.5.447,2.22,1.58Zm.273-2.827c-.247.993-1.775.49-2.27.367l.436-1.76c.5.12,2.091.349,1.833,1.389v0Z" transform="translate(13.997 589.001)"></path><path id="Path_213" data-name="Path 213" d="M0,0H20V20H0Z" transform="translate(12 587)" fill="none"></path></g></svg></span>
                                    <span class="dex__dropdown--label">Cryptocurrencies</span>
                                </div>
                                <div class="dex__dropdown--right  dex__dropdown--area">
                                    <span class="dex__dropdown--drop">
                                        <svg>
                                            <use xlink:href="@/assets/imgs/sprite.svg#icon-chevron-down" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <AssetsRow v-if="assetview === 'cryptocurencies'"/>
                            <div class="dex__dropdown" @click="toggleassets('indices')">
                                <div class="dex__dropdown--left dex__dropdown--area">
                                    <span class="dex__dropdown--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g id="indices_icon" data-name="indices icon" transform="translate(-12 -655)"><rect id="Rectangle_555" data-name="Rectangle 555" width="20" height="20" transform="translate(12 655)" fill="none"></rect><path id="Path_233" data-name="Path 233" d="M926.089,0H910.443a.937.937,0,0,0-.937.937V13.86a.937.937,0,0,0,.937.937h15.646a.937.937,0,0,0,.937-.937V.937A.937.937,0,0,0,926.089,0M915.276,11.337h-1.054v1.292h-.953V11.337h-1.054V4.95h1.054V3.658h.953V4.95h1.054Zm4.266-1.8h-1.054v3.321h-.953V9.536h-1.054V7.293h1.054V6h.953V7.293h1.054Zm4.266,2.309h-1.054v.784H921.8v-.784h-1.054V4.288H921.8V1.319h.953V4.288h1.054Z" transform="translate(-896.506 658)"></path></g></svg>
                                    </span>
                                    <span class="dex__dropdown--label">Indices</span>
                                </div>
                                <div class="dex__dropdown--right  dex__dropdown--area">
                                    <span class="dex__dropdown--drop">
                                        <svg>
                                            <use xlink:href="@/assets/imgs/sprite.svg#icon-chevron-down" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <AssetsRow v-if="assetview === 'indices'"/>
                            <div class="dex__dropdown" @click="toggleassets('commodities')">
                                <div class="dex__dropdown--left dex__dropdown--area">
                                    <span class="dex__dropdown--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g id="stocks-icon" transform="translate(1 3.233)"><g id="Group_75" data-name="Group 75" transform="translate(2 -1.233)"><rect id="Rectangle_176" data-name="Rectangle 176" width="2.199" height="4.349" transform="translate(0 11.184)"></rect><rect id="Rectangle_177" data-name="Rectangle 177" width="2.235" height="6.248" transform="translate(3.885 9.285)"></rect><rect id="Rectangle_178" data-name="Rectangle 178" width="2.205" height="8.042" transform="translate(7.832 7.491)"></rect><path id="Path_137" data-name="Path 137" d="M9.691,1.087l.663.819-2.76,2.76L5.576,2.88,0,8.309,1.3,9.66,5.6,5.473,7.623,7.246,11.68,3.489l.645.784L13.909,0Z"></path><rect id="Rectangle_179" data-name="Rectangle 179" width="2.199" height="10.492" transform="translate(11.71 5.041)"></rect></g><rect id="Rectangle_263" data-name="Rectangle 263" width="20" height="20" transform="translate(-1 -3.233)" fill="none"></rect></g></svg>
                                    </span>
                                    <span class="dex__dropdown--label">Commodities</span>
                                </div>
                                <div class="dex__dropdown--right dex__dropdown--area">
                                    <span class="dex__dropdown--drop">
                                        <svg>
                                            <use xlink:href="@/assets/imgs/sprite.svg#icon-chevron-down" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <AssetsRow v-if="assetview === 'commodities'"/>
                        </div>
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
import userMixin from '@/mixins/user.js'
export default {
  data() {
      return {
          collateral: '50.00',
          positionSize: '0.1017915',
          orderAction: 'buy',
          assetview: 'forex',
          error: null
      }
  },
  mixins: [userMixin],
  methods: {
      placeorder() {
          if (this.user === null) {
              this.error = 'You must log in to trade'
          }
      },
      resetError() {
          this.error = null
      },
      orderActionToggle(value) {
          this.orderAction = value;
      },
      toggleassets(value) {
          if (this.assetview === value) {
              return this.assetview = ''
          } else {
              this.assetview = value;
          }
      }
  },
  computed: {
     user: function() {
        return this.$store.getters.user
     },
  },
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

    &__tradeslide {
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
        background: #080821;
        z-index: 2;

        @media only screen and (max-width: 414px) { 
           width: #{scaleValue(100)};
        }
      }

      @media only screen and (max-width: 414px) { 
        height: #{scaleValue(190)};
      }
    }

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
        //width: #{scaleValue(994)};
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
        //width: #{scaleValue(780)}; 
        //height: #{scaleValue(400)}; 
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

    &__assets {
        height: #{scaleValue(445)};
        width: #{scaleValue(320)};
        padding-left: #{scaleValue(10)};
        padding-bottom: #{scaleValue(20)}; 

        overflow: scroll;
    }

    &__dropdowns {
        display: flex;
        flex-direction: column;
    }

    &__dropdown {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: #{scaleValue(16)} 0;
        cursor: pointer;

        &--area {
            display: flex;
            align-items: center;
        }

        &--icon {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-right: #{scaleValue(7)}; 
            
            & svg {
                fill: #e69138;
                height: #{scaleValue(16)}; 
                width: #{scaleValue(16)}; 
            }
        }

        &--label {
            font-size: #{scaleValue(15)};
            color: #e69138;
        }

        &--drop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            
            & svg {
                fill: #e69138;
                height: #{scaleValue(18)}; 
                width: #{scaleValue(18)};
            }
        }
    }
}
</style>