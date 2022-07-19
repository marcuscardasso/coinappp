<template>
  <div>
        <h4 class="inputduplicator--h4">add {{name}}</h4>
        <div class="inputduplicator__transactionlistitem inputduplicator__transactionlisthd">
            <div class="inputduplicator__transactionlistitem--section">
                <p>Date</p>
            </div>
            <div class="inputduplicator__transactionlistitem--section">
                <p>Amount</p>
            </div>
            <div class="inputduplicator__transactionlistitem--section">
                <p>Status</p>
            </div>
        </div>  
        <div class="inputduplicator__transactionlist">
            <div class="inputduplicator__transactionlistitem" 
                v-for="withdrawal in withdrawalsFromDB"
                @key="withdrawal._id"
                >
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ withdrawal.date }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>${{ withdrawal.amount }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ withdrawal.status }}</p>
                </div>
            </div>     
            <div class="inputduplicator__transactionlistitem" 
                v-for="withdrawal in items"
                @key="withdrawal.id"
                >
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ withdrawal.date }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>${{ withdrawal.amount }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ withdrawal.status }}</p>
                </div>
                <span class="inputduplicator__transactionlistitem--remove" @click="removeArrayItem(withdrawal.id)">X</span>
            </div>
        </div>
        <div class="inputduplicator__inputfields">
            <div class="inputduplicator__inputfield">
                <div class="inputduplicator__inputarea">
                    <label>Date</label>
                    <input placeholder="amount" v-model="date"/>
                </div>
                <div class="inputduplicator__inputarea">
                    <label>Amount</label>
                    <input placeholder="Transaction type" v-model="amount"/>
                </div>
            </div>
            <div class="inputduplicator__inputfield">
                <div class="inputduplicator__inputarea">
                    <label>Status</label>
                    <input placeholder="Fee" v-model="status"/>
                </div>
            </div>
        </div>
        <div class="inputduplicator__section--button">
            <span></span>
            <span class="btn" @click="addArrayItem">Add Withdrawal</span>
        </div>
    </div>
</template>

<script>
import inputDuplicatorMixin from '@/mixins/inputDuplicator.js';
export default {
    props: ['name'],
    mixins: [inputDuplicatorMixin],
    computed: {
        withdrawalsFromDB() {
            return this.$store.getters.client.withdrawals
        }
    },
}
</script>
