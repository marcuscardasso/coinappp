<template>
  <div>
    <div class="popup" v-if="message">
        <div class="popup__message">
            <p>{{ message }}</p>
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
    props: ['message', 'functiontorun'],
    methods:{
        close() {
            this.message = '';
            if (this.functiontorun) {
                this.functiontorun();
            }
        }
    },
    computed: {

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
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        
        &__message {
            position: relative;
            background: #fff;
            padding: #{scaleValue(20)};
            width: #{scaleValue(386)};
            color: #fd4f31;
            margin: #{scaleValue(20)} auto;
            display: flex;
            justify-content: center;
            text-align: center;
        }

        &__close {
            position: absolute;
            right: 0;
            top: 0;
            display: inline-block;

            padding: #{scaleValue(5)};
            cursor: pointer;

            & svg {
                fill: #fd4f31;
                height: #{scaleValue(20)};
                width: #{scaleValue(20)};
            }
        }
    }
</style>
