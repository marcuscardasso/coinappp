<template>
  <div>
    <div class="referral">
        <Header />

        <div class="referral__main">
            <AccountHeader />

            <div class="referral__content">
                <div class="referral__content--left">
                    <DashSidenav menuname="Refer a Friend"/>
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

    .referral {
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
        }
    }
</style>