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
                            <input placeholder="First Name" v-model="firstname" ref="firstname"/>
                        </span>
                        <span class="register__base--rightforminput">
                            <input placeholder="Last Name" v-model="lastname" ref="lastname"/>
                        </span>
                    </div>
                    <div class="register__base--rightformarea">
                        <span class="register__base--rightforminput">
                            <input type="email" placeholder="Email" v-model="email" ref="email"/>
                        </span>
                        <span class="register__base--rightforminput">
                            <input placeholder="Phone" v-model="phonenumber" ref="phonenumber"/>
                        </span>
                    </div>
                    <div class="register__base--rightformarea">
                        <span class="register__base--rightforminput">
                            <input type="text" placeholder="Iban" class="iban" v-model="iban" ref="iban"/>
                        </span>
                    </div>
                    <div class="register__base--rightformarea">
                        <span class="register__base--rightforminput">
                            <div class="register__base--rightforminput passwordarea">
                                <input placeholder="Password" type="password" v-model="password" ref="password"/>
                                <label v-if="password_error" class="error">{{password_error ? `*${password_error}` : ''}}</label>
                            </div>
                        </span>
                        <span class="register__base--rightforminput">
                            <div class="register__base--rightforminput passwordarea">
                                <input placeholder="Confirm Password" type="password" v-model="confirmpassword" ref="confirmpassword"/>
                                <label v-if="confirmpassword_error" class="error">{{confirmpassword_error ? `*${confirmpassword_error}` : ''}}</label>
                            </div>
                        </span>
                    </div>
                    <div class="register__base--rightformarea flex">
                        <input type="checkbox" v-model="termsagreed"/>
                        <span>I agree to the <span class="terms">terms and conditions</span></span>
                        <label v-if="termsagreed_error" class="error terms">{{termsagreed_error ? `*${termsagreed_error}` : ''}}</label>
                    </div>
                    <div class="register__base--rightformarea">
                        <button @click="submit" v-if="!loading">Submit</button>
                        <button v-if="loading">Registering...</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import * as EmailValidator from 'email-validator';
import urlMixin from '@/mixins/url.js';
export default {
    data() {
        return {
            firstname: '',
            lastname: '',
            email: '',
            iban: '',
            phonenumber: '',
            password: '',
            confirmpassword: '',
            termsagreed: false,
            firstname_error: false,
            lastname_error: false,
            email_error: false,
            iban_error: false,
            phonenum_error: false,
            password_error: false,
            confirmpassword_error: false,
            termsagreed_error: false,
            loading: false,
            error: false
        }
    },
    mixins: [urlMixin], 
    methods: {
        register() {

        },
        setUser(user, token) {
            localStorage.setItem('cxetokenxtxtxt', token);
            this.$store.dispatch('storeUser', user);
        },           
        authenticate(credentials, route) {
            this.loading = true;
            fetch(`${this.baseUrl}/${route}`, {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => {
                return response.json();
            }) 
            .then(json => {
                if (json.error) {
                    this.loading = false;
                    if (json.error.name === 'MongoError') {
                        if (json.error.keyPattern.email) {
                            this.email_error = `email is already in use`
                        }

                        if (json.error.keyPattern.phonenumber) {
                            this.phonenum_error = `phone number is already in use`
                        }
                    }

                    throw 'there is an error here';
                } else {
                    this.loading = false;
                    const user = json.user;
                    const token = json.token;
                    this.setUser(user, token);
                }
            })
            .then(() => {
                this.$router.push('/accountsummary');
                console.log('logged in')
            })
            .catch(err => console.log(err, 'there is an errro'));
        }, 
        toggleInputClass(key) {
            this.$refs[`${key}`].style.borderBottom = `1px solid #000000`;
        },
        submit() {
            const {
                firstname,
                lastname,
                email,
                phonenumber,
                iban,
                password,
                confirmpassword
            } = this;

            const inputs = {
                firstname,
                lastname,
                email,
                phonenumber,
                iban,
                password,
                confirmpassword
            }

            for (const key in inputs) {
                if (inputs[key].length === 0) {
                    this.$refs[`${key}`].style.borderBottom = `1px solid red`;

                    this.error = true;
                }
            }

            if (!this.termsagreed) {
                this.error = true;
                this.termsagreed_error = 'terms of service should be adhered to';
            }

            if (!this.error) {
                this.authenticate({
                    firstname,
                    lastname,
                    email,
                    phonenumber,
                    iban,
                    password,
                    confirmpassword
                }, 'api/signup')
            }
        }
    },
    watch: {
        firstname() {
            this.error= false;
            this.toggleInputClass('firstname');
        },
        lastname() {
            this.error = false;
            this.toggleInputClass('lastname');
        },
        email(newValue, oldValue) {
            EmailValidator.validate(newValue) ? this.error = false : this.error = 'Invalid email';
            this.toggleInputClass('email');
        },
        iban() {
            this.error = false;
            this.toggleInputClass('iban');
        },
        phonenumber() {
            this.error = false;
            this.toggleInputClass('phonenumber');
        },
        password(newValue, oldValue) {
            this.toggleInputClass('password');
            if (newValue.length < 6) {
                    this.password_error = 'password should be 6 characters or more';
                    this.error = true;
            } else if (newValue !== this.confirmpassword) {
                    this.password_error = 'password should equal confirm  password'
            } else if (newValue === this.confirmpassword) {
                    this.password_error = false;
                    this.confirmpassword_error = false;
                    this.error = true;
            } else {
                    this.password_error = false;
                    this.error = false;
            }
        },
        confirmpassword(newValue, oldValue) {
            this.toggleInputClass('confirmpassword');
            if (newValue.length < 6) {
                this.confirmpassword_error = 'password should be 6 characters or more';
                this.error = true;
            } else if (newValue !== this.password) {
                this.confirmpassword_error = 'confirm password should equal password';
                this.error = true;
            } else if (newValue === this.password) {
                this.password_error = false;
                this.confirmpassword_error = false;
                this.error = false;
            } else {
                this.confirmpassword_error = false;
                this.error = false;
            }
        },
        termsagreed(newValue) {
            if (newValue === false) {
                this.termsagreed_error = 'terms of service should be adhered to';
                this.error = true;
            } else {
                this.termsagreed_error = false;
                this.error = false;
            }
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

                &.passwordarea {
                    display: flex;
                    flex-direction: column;

                    & input {
                        width: 100%;
                    }
                }

                @media only screen and (max-width: 414px) { 
                   width: 100%;
                }

                & input {
                    width: #{scaleValue(270)};
                    border: none;
                    border-bottom: 1px solid #000000;
                    font-size: #{scaleValue(14)};
                    padding: #{scaleValue(35)} 0;
                    padding-bottom: #{scaleValue(10)};
                    outline: none;

                    &.iban {
                        width: 100%;
                    }

                    @media only screen and (max-width: 414px) { 
                        width: 100%;
                        font-size: #{scaleValue(60)};
                        padding: #{scaleValue(60)} 0;
                    }
                }
            }
        }
    }

    .error {
        display: block;
        font-size: #{scaleValue(12)};
        color: red;
    }
</style>
