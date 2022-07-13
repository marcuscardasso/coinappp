<template>
  <div>
    <div class="dexheader">
        <div class="dexheader__area dexheader__left">
            <figure class="dexheader__logo" @click="openpage('')">
                <img src="@/assets/imgs/logocx.png"/>
            </figure>
            <span class="dexheader__left--item futures">Futures</span>
            <span class="dexheader__left--item">Pools</span>
        </div>
        <div class="dexheader__area dexheader__right">
            <div class="dexheader__right--item">
                <span class="polygonlogo">
                     <img src="@/assets/imgs/polygonlogo.png"/>
                </span>
                <span>Polygon</span>
            </div>
            <div class="dexheader__right--item">Balance 1000.00 USDC</div>
            <div class="dexheader__right--item">
                <span>{{truncate('0x2202F3aC22c2F656D75F0BF984Cca70B7E0fC351', 15)}}</span>
            </div>
            <div class="dexheader__right--item dexheader__right--itembell">
                <span class="dexheader__right--bell">
                    <svg>
                        <use xlink:href="@/assets/imgs/sprite.svg#icon-bell" />
                    </svg>
                </span>
            </div>
            <div class="dexheader__right--item dexheader__right--itembell">
                <span class="dexheader__right--bell">
                    <svg>
                        <use xlink:href="@/assets/imgs/sprite.svg#icon-logout" />
                    </svg>
                </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import userMixin from '@/mixins/user.js'
export default {
    mixins: [userMixin],
    methods: {
    openpage(route) {
      if (route.length) {
          this.$router.push(`/${route}`)
      } else {
          this.$router.push('/')
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

.dexheader {
    display: flex;
    justify-content: space-between;
    border-bottom: .1px solid rgba(255,255,255,.3);
    align-items: center;
    //background: rgb(8, 8, 33);
    width: #{scaleValue(1341)};
    padding: #{scaleValue(10)} #{scaleValue(14)};
    margin: 0 auto;

    &__logo {
        height: #{scaleValue(35)};
        width: #{scaleValue(30)};

        & img {
            object-fit: cover;
            height: 90%;
            width: 90%;
            animation: spin 8s linear infinite;
        }
    }

    &__area {
        display: flex;
        align-items: center;
    }

    &__left {
        display: flex;
        align-items: center;

        &--item {
            font-size: #{scaleValue(12)};
            color: rgba(255,255,255,.7);
            margin-left: #{scaleValue(15)};
            cursor: pointer;
            
            &.futures {
                background: linear-gradient(to right top,rgba(0, 110, 255,1),rgba(255, 0, 144,1));
                padding: #{scaleValue(10)} #{scaleValue(15)};
                border-radius: 3rem;
                color: #fff;
            }
        }
    }

    &__right {
         display: flex;
         align-items: center;

        &--item {
            display: flex;
            align-items: center;
            font-size: #{scaleValue(12)};
            background: rgb(50, 50, 82);
            border-radius: .3rem;
            padding: #{scaleValue(10)} #{scaleValue(13)};
            margin-left: #{scaleValue(15)};
            color: rgba(255,255,255,.7);

            & span {
                display: flex;
                align-items: center;

                &.polygonlogo {
                    height: #{scaleValue(15)};
                    width: #{scaleValue(15)};
                    margin-right: #{scaleValue(10)};

                    & img {
                        object-fit: cover;
                        height: 100%;
                        width: 100%;
                    }
                }

                & svg {
                    fill: #fff;
                    height: #{scaleValue(20)};
                    width: #{scaleValue(20)};
                }
            }
        }

        &--itembell {
            background: transparent;
        }
    }
}
</style>
