<template>
  <div>
    <div class="documents">
        <Header />

        <div class="documents__main">
            <AccountHeader />

            <div class="documents__content">
                <div class="documents__content--left">
                    <DashSidenav menuname="Documents"/>
                </div>

                <div class="documents__content--right">
                  <div class="documents__content--error" v-if="error">
                    <p>{{error}}</p>
                    <span class="close" @click="closeerror">X</span>
                  </div>

                  <div class="documents__dashboard">
                    <div class="documents__dashboard--top">
                        <h1>DOCUMENTS (KYC)</h1>
                        <div class="documents__dashboard--sub">Upload your files</div>
                    </div>

                    <div class="documents__dashboard--disclaimers">
                      <p class="documents__dashboard--disclaimer">
                        <span>Cxefinance</span> 
                        complies with global regulations on KYC policies. All submitted documentation to TrustexGroup will be 
                        treated as private and confidential. By verifying your account, you are helping us fulfill our compliance 
                        obligations such as Anti Money Laundering (AML), Know Your Customer (KYC) and Counter Terrorism Financing (CTF) 
                        and ensuring the integrity and security of your account. We take your privacy seriously here at, for more information 
                        you can review our Privacy Policy <span>Cxefinance</span>
                      </p>

                      <p class="documents__dashboard--disclaimer"><span class="underline">Required Documents</span>: Please provide a government ID, a Proof of address and Proof of payment. Examples include:</p>

                      <ul class="documents__dashboard--list">
                          <li>ID: passport, national ID card or driving license</li>
                          <li>Proof of Payment Method: Color copy of credit/debit card used for deposit showing the last four digits on the front and the back, and card holder’s name</li>
                          <li>Proof of address: utility bill, bank/credit card statement or rental contract</li>
                      </ul>

                      <p class="documents__dashboard--disclaimer">
                          * Please make sure the ID is current and the proof of address is dated within the last three months.<br>
                          * If deposits were made by credit or debit card, a copy of the card must also be submitted.<br>
                          * The cardholder name, expiration date and the last 4 digits must be visible, all other numbers may be covered.
                      </p>

                      <p class="documents__dashboard--disclaimer">* Profits and or Withdraws can only be withdrawn once client has completed KYC requirements by <span>Cxefinance</span>.</p>
                    </div>
                  </div>

                  <div class="kycupload">
                    <div class="kycupload__body">
                      <section class="kycupload__popup" v-if="showpopup">
                        <div class="kycupload__popup--content">
                          <p>KYC successfully uploaded</p>
                          <p>Review will take at least 24 hours...</p>
                        </div>
                      </section>
                      <div class="kycupload__kycinput" v-for="item in uploads">
                        <KycUploader :label="item"/>
                      </div>
                      <div class="kycupload__body--submit">
                        <button @click="submitFiles" v-if="!loading">Submit</button>
                        <button v-if="loading">Uploading</button>
                        <p v-if="error" class="error">{{ error }}</p>
                      </div>

                      <section class="kycupload__text">
                        <p>We understand how valuable your privacy is so we have tasked ourselves with</p>
                        <p>making sure we're not demanding too much as regards to these documents, and doing as much as we can</p>
                        <p>to keep the pervasive laws away from your finances</p>
                      </section>
                    </div>
                  </div>
              </div>
            </div>
        </div>

        <div class="padding">
          <Footer />
        </div>
    </div>
  </div>
</template>

<script>
import userMixin from '@/mixins/user.js'
export default {
    data() {
        return {
            triggerSubmit: false,
            uploads: ['Photocopy or scan of a passport or valid ID'],
            filesToUpload: [],
            uploadsDone: [],
            loading: false,
            error: false,
            showpopup: false
        }
    },
    methods: {
        submitFiles() {
            if (this.uploads.length === this.filesToUpload.length) {
                this.$bus.$emit('uploadkyc');
                this.loading = true;
            } 
        },
    },
    mixins: [userMixin],
    computed: {
        kycFiles() {
            return this.$store.getters.kycFiles
        }
    },
    mounted() {
        this.$bus.$on('kycUploaded', (label) => {
            const uploadsDone = this.uploadsDone;
            this.uploadsDone = [label, ...uploadsDone];

            if (this.uploads.length === this.uploadsDone.length) {
                this.loading = false;
                this.showpopup = true;
                this.uploadsDone = [];
                this.filesToUpload = [];

                setTimeout(() => {
                    this.showpopup = false;
                }, 2000)
            }
        });

        this.$bus.$on('handleUpload', (label) => {
            const filesToUpload = this.filesToUpload;
            this.filesToUpload = [label, ...filesToUpload];
        });

        this.$bus.$on('warning', (warning) => {
            if (warning === 'empty file input field') {
                this.error = 'Add a file to upload';
            }
        });
    }
}
</script>


<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.padding {
  padding: 0 #{scaleValue(150)};
}

    .documents {
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
          position: relative;
          padding-bottom: #{scaleValue(.5)};

          &::before {
              position: absolute;
              content: '';
              left: 0;
              bottom: 0;
              width: 100%;
              height: #{scaleValue(.7)};
              background: #000000;
          }

          &--top {
            position: relative;
            padding-bottom: #{scaleValue(13)};
            margin: #{scaleValue(20)} 0;
            display: flex;
            align-items: center;

            @media only screen and (max-width: 414px) { 
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
            margin-right: #{scaleValue(7)};

            @media only screen and (max-width: 414px) { 
              font-size: #{scaleValue(80)};
              font-weight: 400;
              margin-right: #{scaleValue(25)};
            }
          }

          &--content {
            display: flex;
            flex-direction: column;
          }

          &--sub {
            font-size: #{scaleValue(18)};

            @media only screen and (max-width: 414px) { 
              font-size: #{scaleValue(40)};
              font-weight: 400;
            }
          }

          &--disclaimers {

          }

          &--disclaimer {
            margin-bottom: #{scaleValue(18)};
            font-size: #{scaleValue(14)};
            font-weight: 300;
            line-height: #{scaleValue(23)};
            position: relative;

            @media only screen and (max-width: 414px) { 
              font-size: #{scaleValue(70)};
              line-height: #{scaleValue(90)};
            }

            & span {
              font-weight: 700;

              &.underline {
                text-decoration: underline;
              }
            }
          }

          &--list {
              list-style: none;
              margin-bottom: #{scaleValue(18)};

              @media only screen and (max-width: 414px) { 
                margin-bottom: #{scaleValue(30)};
              }

              & li {
                position: relative;
                font-weight: 300;
                font-size: #{scaleValue(14)};
                line-height: #{scaleValue(23)};
                margin-left: #{scaleValue(16)};

                @media only screen and (max-width: 414px) { 
                  font-size: #{scaleValue(70)};
                  line-height: #{scaleValue(90)};
                }

                &::before {
                    position: absolute;
                    top: 0.5em;
                    left: -1em;
                    display: inline-block;
                    width: 0;
                    height: 0;
                    content: "";
                    border: solid transparent;
                    border-left: solid #fd4f31;
                    border-width: 5px 7px;
                }
              }
          }
        }
    }

    .kycupload {
    
    &__body {
        display: flex;
        flex-direction: column;

        &--submit {
            
            & button {
                background: #fd4f31;
                padding: #{scaleValue(15)} #{scaleValue(40)};
                text-align: center;
                cursor: pointer;
                font-size: #{scaleValue(16)};
                border-radius: .2rem;
            }
        }
    }

    &__kycinput {
        margin-bottom: #{scaleValue(40)};
    }

    &__text {
        font-size: #{scaleValue(13)};
        margin-top: #{scaleValue(70)};
        line-height: #{scaleValue(17)};
    }

    &__popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;

        &--content {
            background: #fff;
            color: #fd4f31;
            padding: #{scaleValue(17)};
            line-height: #{scaleValue(20)};
            margin-top: #{scaleValue(17)};
            font-size: #{scaleValue(17)};
        }
    }
}

.error {
    color: red;
    font-size: #{scaleValue(14)};
}
</style>