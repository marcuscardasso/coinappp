<template>
  <div class="input">
        <input v-model="value" :placeholder="placeholder"/>
        <span class="input__icon">
            <svg>
                <use xlink:href="@/assets/imgs/sprite.svg#icon-box" />
            </svg>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    },
    props: ['placeholder', 'prefill', 'editValue'],
    mounted() {
        this.prefill ? this.value = this.prefill : ''
    },
    watch: {
        value(newValue, oldValue) {
            this.editValue(newValue, this.placeholder);
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

.input {
    position: relative;
    height: #{scaleValue(40)};
    width: #{scaleValue(320)};
    border: 1px solid #000000;
    border-radius: .5rem;
    overflow: hidden;

    @media only screen and (max-width: 414px) { 
       width: 100%;
       height: #{scaleValue(200)};
    }

    & input {
        width: 100%;
        height: 100%;
        padding: #{scaleValue(10)} #{scaleValue(10)};
        outline: none;
        border: none;
        font-size: #{scaleValue(14)};

        @media only screen and (max-width: 414px) { 
            font-size: #{scaleValue(67)};
            padding: #{scaleValue(10)} #{scaleValue(50)};
        }
    }

    &__icon {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        bottom: 0;
        padding-right: #{scaleValue(10)};

        display: flex;
        align-items: center;

        & svg {
            fill: #000000;
            height: #{scaleValue(10)};
            width: #{scaleValue(10)};
        }
    }
}
</style>