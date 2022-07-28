import urlMixin from '@/mixins/url.js'

export default {
    data() {
        return {
            pinstruction: '',
            plabel: '',
            popuptype: null,
        }
    },
    mixins: [urlMixin],
    methods: {
        logout() {
            localStorage.removeItem('cxetokenxtxtxt');

            this.$store.dispatch('storeUser', null);

            this.$router.push(`/`)
        },
        goTo(route) {
            this.$router.push(`/${route}`)
        },
        truncate(input, limit) {
            if (input.length > limit) {
               return input.substring(0, limit) + '...';
            }
            return input;
        },
        closePopup() {
            this.popuptype = null;
        },
        authenticate(credentials, route) {
            fetch(`${this.baseUrl}/${route}`, {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()) 
            .then(json => {
               const user = json.user;
               const token = json.token;
               this.setUser(user, token)
            })
            .then(() => { 
                //this.$router.push('/wallet');
            })
            .catch(err => console.log(err));
        },
        getUser() {
            const user_token = localStorage.getItem('cxetokenxtxtxt');
            
            if (user_token) {
                fetch(`${this.baseUrl}/api/getuser`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Authorization": user_token
                    }
                })
                .then(response => response.json())
                .then(json => {
                    const user = json.user;
                    const token = json.token;
                    this.setUser(user, token);
                })
            }
        },
        setUser(user, token) {
            localStorage.setItem('cxetokenxtxtxt', token);
            this.$store.dispatch('storeUser', user);
        },
        requestSomething(body) {
            this.popuptype = 'loading';

            setTimeout(() => {
                const user_token = localStorage.getItem('cxetokenxtxtxt');

                if (user_token) {
                    fetch(`${this.baseUrl}/api/request`, {
                        method: "POST",
                        body: JSON.stringify(body),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            "Authorization": user_token
                        }
                    })
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                        this.popuptype = 'message';
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }, 5000);
        }
    },
    computed: {
        user: function() {
            return this.$store.getters.user
        },
    },
    beforeMount() {
        this.getUser();
    }
}