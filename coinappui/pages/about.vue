<template>
  <div>
    <div class="about">
      <Header />
        <div class="about__top">
            <div class="about__top--left">
                <h1>Who we are</h1>
                <span>Cxefinance is an international online broker, providing access to over 600 tradable instruments from 6 asset classes for both retail and institutional investors.</span>
                <span>We operate successfully around the globe and place great emphasis on providing professional and reliable services to all our clients.</span>
                <span>Our success is built on diversity, flexibility, transparency and open, reasonable pricing structures.</span>
                <span>We aim to create long-lasting relationships with our clients and to empower them with the necessary tools, knowledge, and support to enjoy and excel in their trading endeavors.</span>
            </div>
            <div class="about__top--right">
                <figure>
                    <img src='@/assets/imgs/img-set-5.png'/>
                </figure>
            </div>
        </div>
        <div>
            <Register />
        </div>

        <div>
            <FinanceLogos />
        </div>

       <div class="padding">
        <Footer />
       </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        openpage(route) {
            if (route.length) {
                this.$router.push(`/${route}`)
            } else {
                this.$router.push(`/`)
            }
        }
    }
}
</script>

<style lang="scss">
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.padding {
  padding: #{scaleValue(10)} #{scaleValue(150)};
}

.about {
    min-height: 100vh;
    background: #fff;
    color: #1d1d1b;

    &__top {
        padding: 0 #{scaleValue(150)};
        display: flex;
        justify-content: space-between;
        padding-top: #{scaleValue(150)};

        @media only screen and (max-width: 414px) {
          flex-direction: column;
        }

        &--left {
            width: #{scaleValue(600)};

            @media only screen and (max-width: 414px) {
              width: 100%;
            }

            & h1 {
                font-weight: 700;
                font-size: #{scaleValue(48)};
                line-height: #{scaleValue(58)};
                margin-bottom: #{scaleValue(24)};

                @media only screen and (max-width: 414px) {
                  font-size: #{scaleValue(120)};
                  margin-bottom: #{scaleValue(100)};
                }
            }

            & span {
                font-size: #{scaleValue(16)};
                line-height: #{scaleValue(25)};
                display: block;
                font-weight: 400;
                margin-bottom: #{scaleValue(25)};

                @media only screen and (max-width: 414px) {
                  font-size: #{scaleValue(65)};
                  line-height: #{scaleValue(75)};
                  font-weight: 300;
                  margin-bottom: #{scaleValue(100)};
                }
            }
        }

        &--right {

            @media only screen and (max-width: 414px) {
              width: 100%;
            }

            & figure {
                width: #{scaleValue(600)};
                height: #{scaleValue(600)};

                @media only screen and (max-width: 414px) {
                    margin: 0 auto;
                    width: #{scaleValue(1000)};
                    height: #{scaleValue(1000)};
                }

                & img {
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }

  &__footer {
    padding: 0 #{scaleValue(150)};
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: #{scaleValue(100)};

    padding-bottom: #{scaleValue(80)};

    & h5 {
        font-size: #{scaleValue(18)};
        margin-bottom: #{scaleValue(10)};
        font-weight: 500;
      }

    &--left {
      display: flex;
    }

    &--area {
      width: #{scaleValue(400)};
      margin-right: #{scaleValue(40)};
      font-weight: 400;
      line-height: #{scaleValue(25)};
    }

    &--right {

      & h5 {
        margin-bottom: #{scaleValue(20)};
      }
    }

    &--input {
      position: relative;
      border-radius: 3rem;
      border: 1px solid #000000;
      display: flex;
      align-items: center;
      padding: #{scaleValue(12)} #{scaleValue(10)};

      & input {
        border: none;
        margin-right: #{scaleValue(10)};
        width: #{scaleValue(200)}
      }

      & span {

        &.go {
          background: #fd4f31;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      & svg {
        fill: #fff;
        height: #{scaleValue(30)};
        width: #{scaleValue(30)};
      }
    }
  }
}
</style>
