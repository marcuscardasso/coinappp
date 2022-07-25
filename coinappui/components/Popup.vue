<template>
  <div>
    <div class="popup">
        <div class="popup__message" v-if="popupmessageType === 'error'">
            <p>{{ popupmessage }}</p>
            <span class="popup__close" @click="close">
                 <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-x-altx-alt" />
                 </svg>
            </span>
        </div>

        <div class="popup__message okay" v-if="popupmessageType !== 'error'">
            <p>{{ popupmessage }}!</p>
            <span class="popup__close" @click="close">
                 <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-x-altx-alt" />
                 </svg>
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['popupmessage', 'functiontorun', 'popupmessageType'],
    methods:{
        close() {
            this.message = '';
            this.messageType = '';
            if (this.functiontorun) {
                this.functiontorun();
            }
        }
    },
    mounted() {
        console.log(this.popupmessageType)
    }
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

    .popup {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        
        &__message {
            position: relative;
            background: #fff;
            width: #{scaleValue(386)};
            color: red;
            margin: #{scaleValue(20)} auto;
            display: flex;
            justify-content: center;
            text-align: left;
            border: 1px solid red;
            line-height: #{scaleValue(25)};

            box-shadow: -14px -4px 40px -8px red;
            -webkit-box-shadow: -14px -4px 40px -8px red;
            -moz-box-shadow: -14px -4px 40px -8px red;
            padding: #{scaleValue(50)} #{scaleValue(20)};

            @media only screen and (max-width: 414px) {
                width: #{scaleValue(1300)};
                line-height: #{scaleValue(90)};
            }

            &.okay {
                color: #000000;
                border: none;
                box-shadow: -14px -4px 40px -8px rgba(0,0,0,0.33);
                -webkit-box-shadow: -14px -4px 40px -8px rgba(0,0,0,0.33);
                -moz-box-shadow: -14px -4px 40px -8px rgba(0,0,0,0.33);
                padding: #{scaleValue(50)} #{scaleValue(20)};
            }
        }

        &__close {
            position: absolute;
            right: 0;
            top: 0;
            display: inline-block;

            padding: #{scaleValue(5)};
            cursor: pointer;

            @media only screen and (max-width: 414px) {
                padding: #{scaleValue(20)};
            }

            & svg {
                fill: #fd4f31;
                height: #{scaleValue(20)};
                width: #{scaleValue(20)};

                @media only screen and (max-width: 414px) {
                    height: #{scaleValue(70)};
                    width: #{scaleValue(70)};
                }
            }
        }
    }
</style>
