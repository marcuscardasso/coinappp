<template>
  <div>
    <div class="dexheader">
        <div class="dexheader__area dexheader__left">
            <figure class="dexheader__logo" @click="openpage('')">
                <img src="@/assets/imgs/logocx.png"/>
            </figure>
            <!--<span class="dexheader__left--item futures">Futures</span>
            <span class="dexheader__left--item">Pools</span>-->
        </div>
        <div class="dexheader__area dexheader__right" v-if="!user">
            <div class="dexheader__right--item primary-transparent btn" @click="openpage('signin')">login</div>
            <div class="dexheader__right--item primary-color btn" @click="openpage('signup')">Open Account</div>
        </div>
        <div class="dexheader__area dexheader__right" v-if="user">
            <div class="dexheader__right--item">
                <span class="polygonlogo">
                     <img src="@/assets/imgs/polygonlogo.png"/>
                </span>
                <span>Polygon</span>
            </div>
            <div class="dexheader__right--item">Balance ${{user.balance}}.00 USDC</div>
            <div class="dexheader__right--item">
                <span>{{truncate(`${user._id}`, 15)}}</span>
            </div>
            <div class="dexheader__right--item dexheader__right--itembell">
                <span class="dexheader__right--bell">
                    <svg>
                        <use xlink:href="@/assets/imgs/sprite.svg#icon-bell" />
                    </svg>
                </span>
            </div>
            <div class="dexheader__right--item dexheader__right--itembell" @click="logout">
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
    padding: #{scaleValue(10)} #{scaleValue(14)};
    margin: 0 auto;

    @media only screen and (max-width: 414px) {
        flex-direction: column;
        align-items: flex-start;
    }

    &__logo {
        height: #{scaleValue(35)};
        width: #{scaleValue(30)};

        @media only screen and (max-width: 414px) {
            margin-bottom: #{scaleValue(70)}; 
            height: #{scaleValue(135)};
            width: #{scaleValue(130)};
        }

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

         @media only screen and (max-width: 414px) {
            flex-direction: column;
            align-items: flex-start;
         }

        &--item {
            display: flex;
            align-items: center;
            font-size: #{scaleValue(12)};
            background: rgb(50, 50, 82);
            border-radius: .3rem;
            padding: #{scaleValue(10)} #{scaleValue(13)};
            margin-left: #{scaleValue(15)};
            color: rgba(255,255,255,.7);

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(60)};  
                margin-bottom: #{scaleValue(70)}; 
            }

            &.primary-color {
                background: #fd4f31;
            }

            &.primary-transparent {
                background: transparent;
            }

            &.btn {
                border: 1px solid #fd4f31;
                font-size: #{scaleValue(15)};
                border-radius: 3rem;
                padding: #{scaleValue(10)} #{scaleValue(20)};
                color: #fff;
                cursor: pointer;

                @media only screen and (max-width: 414px) {
                    font-size: #{scaleValue(60)};
                    padding: #{scaleValue(50)} #{scaleValue(80)};
                }
            }

            & span {
                display: flex;
                align-items: center;

                &.polygonlogo {
                    height: #{scaleValue(15)};
                    width: #{scaleValue(15)};
                    margin-right: #{scaleValue(10)};

                    @media only screen and (max-width: 414px) {
                        height: #{scaleValue(60)};
                        width: #{scaleValue(60)};
                        margin-right: #{scaleValue(20)};
                    }

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

                    @media only screen and (max-width: 414px) {
                        height: #{scaleValue(80)};
                        width: #{scaleValue(80)};
                    }
                }
            }
        }

        &--itembell {
            background: transparent;

            cursor: pointer;
        }
    }
}
</style>
