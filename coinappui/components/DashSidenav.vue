<template>
  <div>
    <div class="dashsidenav">
        <div class="dashsidenav__item" :class="{ current: menuname === 'Account Summary' }" @click="itemRouter('accountsummary')">
            <div class="dashsidenav__item--icon">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-news" />
                </svg>
            </div>
            <div class="dashsidenav__item--label">Account Summary</div>
        </div>
        <div class="dashsidenav__item" :class="{ current: menuname === 'Personal Info' }" @click="itemRouter('personalinfo')">
            <div class="dashsidenav__item--icon">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-mobile5" />
                </svg>
            </div>
            <div class="dashsidenav__item--label">Personal Info</div>
        </div>
        <div class="dashsidenav__item" :class="{ current: menuname === 'Deposit' }" @click="itemRouter('deposit')">
            <div class="dashsidenav__item--icon">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-trending-up" />
                </svg>
            </div>
            <div class="dashsidenav__item--label">Deposit</div>
        </div>
        <div class="dashsidenav__item" :class="{ current: menuname === 'Transactions' }" @click="itemRouter('transactions')">
            <div class="dashsidenav__item--icon">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-wallet1" />
                </svg>
            </div>
            <div class="dashsidenav__item--label">Transactions</div>
        </div>
        <div class="dashsidenav__item" :class="{ current: menuname === 'Withdrawal' }" @click="itemRouter('withdrawal')">
           <div class="dashsidenav__item--icon">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-credit-card1" />
                </svg>
            </div>
            <div class="dashsidenav__item--label">Withdrawal</div>
        </div>
        <div class="dashsidenav__item" :class="{ current: menuname === 'Documents' }" @click="itemRouter('documents')">
            <div class="dashsidenav__item--icon">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-newspaper" />
                </svg>
            </div>
            <div class="dashsidenav__item--label">Documents (KYC)</div>
        </div>
        <!--<div class="dashsidenav__item" :class="{ current: menuname === 'Refer a Friend' }" @click="itemRouter('referral')">
            <div class="dashsidenav__item--icon">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-users1" />
                </svg>
            </div>
            <div class="dashsidenav__item--label">Refer a Friend</div>
        </div>-->
        <div class="dashsidenav__item" :class="{ current: menuname === 'Password' }" @click="itemRouter('password')">
            <div class="dashsidenav__item--icon">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-drivers-license-o" />
                </svg>
            </div>
            <div class="dashsidenav__item--label">Password</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['menuname'],
    methods: {
        itemRouter(route) {
            this.$router.push(`/${route}`)
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

.dashsidenav {
    @media only screen and (max-width: 414px) {
      display: flex;
      justify-content: space-between;
      margin-bottom: #{scaleValue(100)};
    }

    &__item {
        cursor: pointer;
        font-weight: 100;
        font-size: #{scaleValue(18)};
        padding: #{scaleValue(10)} #{scaleValue(15)};
        border-radius: 3rem;
        color: #1d1d1b;
        display: flex;
        align-items: center;

        &--icon {
            margin-right: #{scaleValue(10)};
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: #{scaleValue(50)};
            height: #{scaleValue(50)};

            @media only screen and (max-width: 414px) {
                width: #{scaleValue(160)};
                height: #{scaleValue(160)};
                margin: 0;
            }

            & svg {
                width: #{scaleValue(20)};
                height: #{scaleValue(20)};
                fill: #1d1d1b;

                @media only screen and (max-width: 414px) {
                    width: #{scaleValue(60)};
                    height: #{scaleValue(60)};
                    margin: 0;
                }
            }
        }

        &--label {

            @media only screen and (max-width: 414px) {
              display: none
            }
        }

        &.current {
            background: rgba(#abb8c3, .1);

            & div {

                &:nth-child(1) {
                    background: #fd4f31;

                    & svg {
                        fill: #fff;
                    }
                }
            }
        }
    }
}
</style>
