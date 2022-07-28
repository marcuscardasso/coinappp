<template>
  <div class="sidenav">
    <div class="sidenav__body">
        
        <h2 class="sidenav__body--h2">Dex Trade</h2>
        <div class="sidenav__body--items">
            <div class="sidenav__body--item" v-bind:class="{ current: current_route === 'wallet' }">
                <router-link to="/wallet">
                    <span class="sidenavicon">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-wallet" />
                        </svg>
                    </span>
                    <span class="sidenavlabel">Wallet</span>
                </router-link>
            </div>
            <div class="sidenav__body--item" v-bind:class="{ current: current_route === 'overview' }">
                <router-link to="/overview">
                    <span class="sidenavicon">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-home" />
                        </svg>
                    </span>
                    <span class="sidenavlabel">Overview</span>
                </router-link>
            </div>
            <div class="sidenav__body--item" v-bind:class="{ current: current_route === 'dex' }">
                <router-link to="/dex">
                    <span class="sidenavicon">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-bar-chart" />
                        </svg>
                    </span>
                    <span class="sidenavlabel">Dex</span>
                </router-link>
            </div>
            <div class="sidenav__body--item" v-bind:class="{ current: current_route === 'futures' }">
                <router-link to="/futures">
                    <span class="sidenavicon">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-trending-up" />
                        </svg>
                    </span>
                    <span class="sidenavlabel">Futures</span>
                </router-link>
            </div>
            <div class="sidenav__body--item" v-bind:class="{ current: current_route === 'pool' }">
                <router-link to="/pool">
                    <span class="sidenavicon">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-pig" />
                        </svg>
                    </span>
                    <span class="sidenavlabel">Pool</span>
                </router-link>
            </div>
            <div class="sidenav__body--item" v-bind:class="{ current: current_route === 'chat' }">
                <router-link to="/chat">
                    <span class="sidenavicon">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-message-square" />
                        </svg>
                    </span>
                    <span class="sidenavlabel">Chat</span>
                </router-link>
            </div>
        </div>

        <div class="sidenav__body--items bottom">
            <div class="sidenav__body--item" v-bind:class="{ current: current_route === 'help' }">
                <router-link to="/help">
                    <span class="sidenavicon">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-info" />
                        </svg>
                    </span>
                    <span class="sidenavlabel">Help</span>
                </router-link>
            </div>
            <div class="sidenav__body--item">
                <button @click="logout">
                    <span class="sidenavicon">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-arrow_drop_down_circle" />
                        </svg>
                    </span>
                    <span class="sidenavlabel">Logout</span>
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        logout() {
            console.log('loging out')
        }
    },
    mounted() {},
    computed: {
        current_route() {
            return this.$route.name
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

    .sidenav {
        position: fixed;
        top: 0;
        height: 100vh;
        background: rgb(0, 0, 0);
        width: #{scaleValue(250)};
        padding: #{scaleValue(30)} 0;

        &__body {
            padding: #{scaleValue(20)};

            &--h2 {
                margin-bottom: #{scaleValue(40)};
                font-weight: 500;
                font-size: #{scaleValue(25)};
            }

            &--items {

                &.bottom {
                    margin-top: #{scaleValue(270)};
                }
            }

            &--item {
                padding: #{scaleValue(16)} #{scaleValue(16)};
                border-radius: .3rem;
                margin: #{scaleValue(15)} 0;
                cursor: pointer;

                &.current {
                    background: #fff;
                    
                    & a {
                        color: #000000;

                        & svg {
                            fill: #000000;
                        }
                    }
                }

                & a, button {
                    text-decoration: none;
                    color: #fff;
                    font-size: #{scaleValue(15)};
                    opacity: .7;
                    display: flex;
                    align-items: center;

                    & span {
                        display: flex;
                        align-items: center;

                        &.sidenavicon {
                            margin-right: #{scaleValue(13)};
                        }
                    }

                    & svg {
                        fill: #fff;
                        height: #{scaleValue(20)};
                        width: #{scaleValue(20)};
                    }
                }
            }
        }
    }
</style>
