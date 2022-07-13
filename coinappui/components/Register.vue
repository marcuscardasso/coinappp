<template>
  <div>
    <div class="register">
        <div class="register__base">
            <div class="register__base--left">
                <div class="register__base--leftpara">Register For a <span>Free Trading Account</span> Now and Harness the Power of the Global Financial Markets!</div>
            </div>
            <div class="register__base--right">
                <div class="register__base--rightform">
                    <div class="register__base--rightformarea">
                        <span class="register__base--rightforminput">
                            <input placeholder="First Name"/>
                        </span>
                        <span class="register__base--rightforminput">
                            <input placeholder="Last Name"/>
                        </span>
                    </div>
                    <div class="register__base--rightformarea">
                        <span class="register__base--rightforminput">
                            <input type="email" placeholder="Email"/>
                        </span>
                        <span class="register__base--rightforminput">
                            <input placeholder="Phone"/>
                        </span>
                    </div>
                    <div class="register__base--rightformarea">
                        <span class="register__base--rightforminput">
                            <input placeholder="Password"/>
                        </span>
                        <span class="register__base--rightforminput">
                            <input placeholder="Confirm Password"/>
                        </span>
                    </div>
                    <div class="register__base--rightformarea flex">
                        <input type="checkbox"/>
                        <span>I agree to the <span class="terms">terms and conditions</span></span>
                    </div>
                    <div class="register__base--rightformarea">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

    .register {
        padding: #{scaleValue(100)} #{scaleValue(150)};

        &__base {
            display: flex;
            justify-content: space-between;

            @media only screen and (max-width: 414px) { 
                flex-direction: column;
            }

            &--left {

            }

            &--leftpara {
                font-size: #{scaleValue(35)};
                font-weight: 700;
                width: #{scaleValue(600)};
                line-height: #{scaleValue(45)};

                @media only screen and (max-width: 414px) { 
                    font-size: #{scaleValue(120)};
                    line-height: #{scaleValue(140)};
                    width: 100%;
                    margin-bottom: #{scaleValue(130)};
                }

                & span {
                    color: #fd4f31
                }
            }

            &--right {

            }

            &--rightform {

            }

            &--rightformarea {
                margin-bottom: #{scaleValue(35)};

                @media only screen and (max-width: 414px) { 
                    display: flex;
                    flex-direction: column;

                    &.flex {
                        flex-direction: initial;
                        align-items: center;
                        margin-top: #{scaleValue(100)};

                        & input {
                             margin-right: #{scaleValue(20)};
                        }
                    }
                }

                & span {

                    &.terms {
                        text-decoration: underline;
                        color: #fd4f31;

                        @media only screen and (max-width: 414px) {
                            display: inline-block;
                        }
                    }
                }

                & button {
                    color: #fff;
                    background: #fd4f31;

                    border: 1px solid #fd4f31;
                    border-radius: 3rem;
                    padding: #{scaleValue(15)} #{scaleValue(35)};
                    font-size: #{scaleValue(17)};
                    cursor: pointer;

                    @media only screen and (max-width: 414px) { 
                        margin-top: #{scaleValue(100)};
                        font-size: #{scaleValue(70)};
                        padding: #{scaleValue(50)} #{scaleValue(100)};
                    }
                }
            }

            &--rightforminput {
                margin-left: #{scaleValue(10)};

                @media only screen and (max-width: 414px) { 
                   width: 100%;
                   background: red;
                }

                & input {
                    width: #{scaleValue(270)};
                    border: none;
                    border-bottom: 1px solid #000000;
                    font-size: #{scaleValue(14)};
                    padding: #{scaleValue(35)} 0;
                    padding-bottom: #{scaleValue(10)};
                    outline: none;

                    @media only screen and (max-width: 414px) { 
                        width: 100%;
                        font-size: #{scaleValue(60)};
                        padding: #{scaleValue(60)} 0;
                    }
                }
            }
        }
    }
</style>
