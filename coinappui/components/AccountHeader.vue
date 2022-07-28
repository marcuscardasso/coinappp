<template>
  <div>
    <div class="accountheader" v-if="user">
        <div class="accountheader__main--header">
            <div class="accountheader__main--headerleft">
                <span>My Account</span>
                <span class="border">|</span>
                <span>Welcome <span class="username">{{user.firstname}} {{user.lastname}}</span></span>
            </div>
            <div class="accountheader__main--headerright">
                <span>ID: <span class="bold">{{user._id}}</span></span>
                <span>Balance: <span class="bold">${{user.balance}}</span></span>
            </div>
        </div>
        <KYC />
    </div>
  </div>
</template>

<script>
import userMixin from '@/mixins/user.js'
export default {
    mixins: [userMixin]
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.accountheader {

    &__main {
      padding: #{scaleValue(20)} #{scaleValue(150)};

      &--header {
          background: #fd4f31;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: #{scaleValue(17)};
          padding: #{scaleValue(18)};

          & span {
              display: inline-block;
          }

          @media only screen and (max-width: 414px) {
              flex-direction: column;
              font-size: #{scaleValue(60)};
              align-items: flex-start;
              line-height: #{scaleValue(120)};
              padding: #{scaleValue(60)};
          } 
      }

      &--headerleft {
          display: flex;
          align-items: center;

          @media only screen and (max-width: 414px) {
              flex-direction: column;
              align-items: flex-start;
          }
          
        & span {
            margin-right: #{scaleValue(18)};

            &.username {
                text-transform: capitalize;
            }

            &.border {
                font-size: #{scaleValue(20)};

                @media only screen and (max-width: 414px) {
                  display: none;
                }
            }
        }
      }

      &--headerright {
          display: flex;
          align-items: center;

          @media only screen and (max-width: 414px) {
              flex-direction: column;
              align-items: flex-start;
          }

          & span {
              margin-left: #{scaleValue(18)};

              @media only screen and (max-width: 414px) {
                  margin: 0;
              }

              &.bold {
                  font-weight: 700;
                  margin: 0;

                  @media only screen and (max-width: 414px) {
                    margin-left: #{scaleValue(20)};
                  }
              }
          }
      }
  }
}
</style>