export default {
    data() {
        return {
            date: null,
            type: null,
            amount: null,
            status: null,
            cardholder: null,
            sourceAccount: null,
            transferAccount: null,
            exchangeRate: null,
            transferAmount: null,
            dateTime: null,
            notifdate: null,
            notifcontent: null,
            notifId: null,
            deposits: [],
            withdrawals: [],
            credits: [],
            bonuses: [],
            fees: [],
            internalTransfers: [],
            notifications: [],

            items: [],
            transactionLabel: null
        }
    },
    computed: {
        arrayItem() {
            const {
                date,
                type,
                amount,
                status,
                cardholder,
                sourceAccount,
                transferAccount,
                exchangeRate,
                transferAmount,
            } = this;

            return {
                date,
                type,
                amount,
                status,
                cardholder,
                sourceAccount,
                transferAccount,
                exchangeRate,
                transferAmount,
                id: Math.random().toString().substr(2, 6)
            }
        },
        client() {
            return this.$store.getters.client
        },
    },
    methods: {
        addArrayItem() {
            const items = this.items;
            this.items = [...items, this.arrayItem];

            this.date = null;
            this.type = null;
            this.amount = null;
            this.status = null;
            this.cardholder = null;
            this.sourceAccount = null;
            this.transferAccount = null;
            this.exchangeRate = null;
            this.transferAmount = null;

            this.$store.dispatch('storeArrayItem', {
                itemlabel: this.name,
                items: this.items
            });
        },
        removeArrayItem(id) {
            const items = this.items;
            const filtered = items.filter(item => {
                return item.id !== id;
            });

            this.items = filtered;

            this.$store.dispatch('storeArrayItem', {
                itemlabel: this.name,
                items: this.items
            });
        }
    }
}