<template>
  <div>
    <div class="personalinfo">
      <Header />

      <div class="personalinfo__main">
        <AccountHeader />

        <div class="personalinfo__content">
          <div class="personalinfo__content--left">
                <DashSidenav menuname="Personal Info"/>
          </div>

          <div class="personalinfo__content--right">
            <div class="personalinfo__dashboard">
                <div class="personalinfo__dashboard--top">
                    <h1>PERSONAL INFO</h1>
                    <div>Please edit your details</div>
                </div>

                <div class="personalinfo__dashboard--form" v-if="user">
                  <div class="personalinfo__dashboard--formarea">
                    <div class="personalinfo__dashboard--formsection">
                      <label class="personalinfo__dashboard--formlabel">First Name</label>
                      <Input :placeholder="'First Name'" :prefill="user.firstname"/>
                    </div>
                    <div class="personalinfo__dashboard--formsection">
                      <label class="personalinfo__dashboard--formlabel">Last Name</label>
                      <Input :placeholder="'Last Name'" :prefill="user.lastname"/>
                    </div>
                  </div>

                  <div class="personalinfo__dashboard--formarea">
                    <div class="personalinfo__dashboard--formsection">
                      <label class="personalinfo__dashboard--formlabel">Email</label>
                      <Input :placeholder="'Email'" :prefill="user.email"/>
                    </div>
                    <div class="personalinfo__dashboard--formsection">
                      <label class="personalinfo__dashboard--formlabel">Phone</label>
                      <Input :placeholder="'Phone'" :prefill="user.phonenumber"/>
                    </div>
                  </div>

                  <div class="personalinfo__dashboard--formarea">
                    <div class="personalinfo__dashboard--formsection">
                      <label class="personalinfo__dashboard--formlabel">City</label>
                      <Input :placeholder="'City'" :prefill="''"/>
                    </div>
                    <div class="personalinfo__dashboard--formsection">
                      <label class="personalinfo__dashboard--formlabel">Address</label>
                      <Input :placeholder="'Address'" :prefill="''"/>
                    </div>
                  </div>

                  <div class="personalinfo__dashboard--formarea">
                    <div class="personalinfo__dashboard--formsection">
                      <label class="personalinfo__dashboard--formlabel">Iban</label>
                      <Input :placeholder="'Iban'" :prefill="user.iban"/>
                    </div>
                  </div>

                  <div class="personalinfo__dashboard--formarea">
                    <div class="personalinfo__dashboard--formsection">
                      <button class="personalinfo__dashboard--formbtn">Submit</button>
                    </div>
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
    mixins: [userMixin]
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

    .personalinfo {
        background: #fff;
        min-height: 100vh;
        color: #1d1d1b;

        &__main {
          padding: #{scaleValue(20)} #{scaleValue(150)};
        }

        &__content {
          display: flex;
          padding: #{scaleValue(100)} 0;
          justify-content: space-between;

          @media only screen and (max-width: 414px) { 
            flex-direction: column;
          } 

          &--right {
            width: #{scaleValue(1000)};

            @media only screen and (max-width: 414px) { 
              width: #{scaleValue(1300)};
            }
          }
        }

        &__dashboard {

          &--top {
            position: relative;
            padding-bottom: #{scaleValue(13)};
            margin: #{scaleValue(20)} 0;
            display: flex;
            align-items: center;

            @media only screen and (max-width: 414px) { 
              flex-direction: column;
              align-items: flex-start;
              line-height: #{scaleValue(100)};
              margin-bottom: #{scaleValue(100)};
            } 

            &::before {
              position: absolute;
              content: '';
              left: 0;
              bottom: 0;
              width: 100%;
              height: #{scaleValue(.7)};
              background: #000000;
            }
          }

          & h1 {
            font-weight: 500;
            font-size: #{scaleValue(23)};
            letter-spacing: #{scaleValue(1)};
            text-transform: uppercase;
            margin-right: #{scaleValue(10)};

            @media only screen and (max-width: 414px) { 
              font-size: #{scaleValue(80)};
              font-weight: 400;
            }
          }

          &--form {

          }

          &--formarea {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-bottom: #{scaleValue(30)};

            @media only screen and (max-width: 414px) { 
              flex-direction: column;
            } 
          }

          &--formsection {
            display: flex;
            align-items: center;

            @media only screen and (max-width: 414px) { 
              flex-direction: column;
              align-items: flex-start;
              width: 100%;
              margin-bottom: #{scaleValue(90)};
            } 
          }

          &--formlabel {
            display: inline-block;
            width: #{scaleValue(80)};
            margin-right: #{scaleValue(50)};
            color: #fd4f31;
            font-size: #{scaleValue(16)};
            font-weight: 400;

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(55)};
                width: 100%;
                margin-bottom: #{scaleValue(50)};
            }
          }

          &--formbtn {
            border: 1px solid #fd4f31;
            border-radius: 3rem;
            padding: #{scaleValue(10)} #{scaleValue(35)};
            color: #fd4f31;
            font-size: #{scaleValue(17)};
            cursor: pointer;

            background: #fd4f31;
            color: #fff;
            margin-right: #{scaleValue(30)};

            @media only screen and (max-width: 414px) { 
                  height: #{scaleValue(210)}; 
                  font-size: #{scaleValue(65)};
                  padding: #{scaleValue(10)} #{scaleValue(100)};
            }
          }
        }
      }
</style>