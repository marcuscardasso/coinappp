<template>
  <div class="inputduplicator">
    
    <Deposits v-if="name === 'deposits'" :name="'deposits'"/>

    <Withdrawals v-if="name === 'withdrawals'" :name="'withdrawals'"/>

    <Credits v-if="name === 'credits'" :name="'credits'"/>

    <Bonuses v-if="name === 'bonuses'" :name="'bonuses'"/>

    <Fees v-if="name === 'fees'" :name="'fees'"/>

    <InternalTransfers v-if="name === 'internalTransfers'" :name="'internalTransfers'"/>

    <div v-if="name === 'add notifications'">
        <h4 class="inputduplicator--h4">{{name}}</h4>
        <div class="inputduplicator__transactionlist">  
             <div class="inputduplicator__transactionlistitem column" 
                v-for="notif in clientNotificationsDB"
                @key="notif.notifId"
                >
                <div class="inputduplicator__transactionlistitem--section column">
                    <span class="label">Date:</span><p>{{ notif.notifdate }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section column">
                    <span class="label">Content: </span><p>{{ notif.notifcontent }}</p>
                </div>
            </div>    
            <div class="inputduplicator__transactionlistitem column" 
                v-for="notif in notifications"
                @key="notif.notifId"
                >
                <div class="inputduplicator__transactionlistitem--section column">
                    <span class="label">Date:</span><p>{{ notif.notifdate }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section column">
                    <span class="label">Content: </span><p>{{ notif.notifcontent }}</p>
                </div>
                <span class="inputduplicator__transactionlistitem--remove" @click="removeNotification(notif.notifId)">X</span>
            </div>
        </div>
        <div class="inputduplicator__inputfields">
            <div class="inputduplicator__inputfield inputduplicator__inputfieldnotif">
                <div class="inputduplicator__inputarea column">
                    <label>Date eg: 14 August 2021 07:53</label>
                    <input placeholder="Date time" v-model="notifdate"/>
                </div>
                <div class="inputduplicator__inputarea">
                    <label>Content</label>
                    <textarea placeholder="Fee" v-model="notifcontent"></textarea>
                </div>
            </div>
        </div>
        <div class="inputduplicator__section--button">
            <span></span>
            <span class="btn" @click="addNotification">Add Notification</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['name', 'clientNotificationsDB'],
    data() {
        return {
            date: null,
            type: null,
            amount: null,
            status: null,
            cardholder: null,
            fee: null,
            dateTime: null,
            notifdate: null,
            notifcontent: null,
            notifId: null,
            deposits: [],
            transactions: [],
            notifications: []
        }
    },
    computed: {
        notification() {
            const {
                notifdate,
                notifcontent
            } = this;

            return {
                notifdate,
                notifcontent,
                notifId: Math.random().toString().substr(2, 6),
                viewed: false
            }
        },
        client() {
            return this.$store.getters.client
        }        
    },
    methods: {
        addNotification() {
            const notifications = this.notifications;
            notifications.push(this.notification);
            this.notifications = notifications;

            this.$store.dispatch('storeNotifications', this.notifications);

            this.notifdate = null;
            this.notifcontent = null;
        },
        removeNotification(id) {
            const notifications = this.notifications;
            const filteredNotifs = notifications.filter(item => {
                return item.notifId !== id;
            });
            this.notifications = filteredNotifs;
            this.$store.dispatch('storeNotifications', this.notifications);
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
