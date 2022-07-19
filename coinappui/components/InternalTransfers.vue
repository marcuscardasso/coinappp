<template>
  <div>
        <h4 class="inputduplicator--h4">{{ 'internal transfers' }}</h4>
        <div class="inputduplicator__transactionlistitem inputduplicator__transactionlisthd">
            <div class="inputduplicator__transactionlistitem--section">
                <p>Date</p>
            </div>
            <div class="inputduplicator__transactionlistitem--section">
                <p>Source Account</p>
            </div>
            <div class="inputduplicator__transactionlistitem--section">
                <p>Transfer Account</p>
            </div>
            <div class="inputduplicator__transactionlistitem--section">
                <p>Exchange Rate</p>
            </div>
            <div class="inputduplicator__transactionlistitem--section">
                <p>Transfer Amount</p>
            </div>
            <div class="inputduplicator__transactionlistitem--section">
                <p>Status</p>
            </div>
        </div>  
        <div class="inputduplicator__transactionlist">
            <div class="inputduplicator__transactionlistitem" 
                v-for="internalTransfer in internalTransfersFromDB"
                @key="internalTransfer._id"
                >
                <div class="inputduplicator__transactionlistitem--section">
                    <p class="deposit">{{internalTransfer.date}}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ internalTransfer.sourceAccount }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>${{ internalTransfer.transferAccount }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ internalTransfer.exchangeRate }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ internalTransfer.transferAmount }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ internalTransfer.status }}</p>
                </div>
            </div>     
            <div class="inputduplicator__transactionlistitem" 
                v-for="internalTransfer in items"
                @key="internalTransfer.id"
                >
                <div class="inputduplicator__transactionlistitem--section">
                    <p class="deposit">{{internalTransfer.date}}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ internalTransfer.sourceAccount }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>${{ internalTransfer.transferAccount }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ internalTransfer.exchangeRate }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ internalTransfer.transferAmount }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ internalTransfer.status }}</p>
                </div>
                <span class="inputduplicator__transactionlistitem--remove" @click="removeArrayItem(internalTransfer.id)">X</span>
            </div>
        </div>
        <div class="inputduplicator__inputfields">
            <div class="inputduplicator__inputfield">
                <div class="inputduplicator__inputarea">
                    <label>Date</label>
                    <input placeholder="amount" v-model="date"/>
                </div>
                <div class="inputduplicator__inputarea">
                    <label>Source Account</label>
                    <input placeholder="Transaction type" v-model="sourceAccount"/>
                </div>
            </div>
            <div class="inputduplicator__inputfield">
                <div class="inputduplicator__inputarea">
                    <label>Transfer Account</label>
                    <input placeholder="Date time" v-model="transferAccount"/>
                </div>
                <div class="inputduplicator__inputarea">
                    <label>Exchange Rate</label>
                    <input placeholder="Fee" v-model="exchangeRate"/>
                </div>
            </div>
            <div class="inputduplicator__inputfield">
                <div class="inputduplicator__inputarea">
                    <label>Transfer Amount</label>
                    <input placeholder="Date time" v-model="transferAmount"/>
                </div>
                <div class="inputduplicator__inputarea">
                    <label>Status</label>
                    <input placeholder="Date time" v-model="status"/>
                </div>
            </div>
        </div>
        <div class="inputduplicator__section--button">
            <span></span>
            <span class="btn" @click="addArrayItem">Add Internal Transfer</span>
        </div>
    </div>
</template>

<script>
import inputDuplicatorMixin from '@/mixins/inputDuplicator.js';
export default {
    props: ['name'],
    mixins: [inputDuplicatorMixin],
    computed: {
        internalTransfersFromDB() {
            return this.$store.getters.client.internalTransfers
        }
    },
}
</script>