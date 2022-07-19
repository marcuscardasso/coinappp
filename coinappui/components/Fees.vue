<template>
  <div>
        <h4 class="inputduplicator--h4">add {{name}}</h4>
        <div class="inputduplicator__transactionlistitem inputduplicator__transactionlisthd">
            <div class="inputduplicator__transactionlistitem--section">
                <p>Date</p>
            </div>
            <div class="inputduplicator__transactionlistitem--section">
                <p>Type</p>
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
                v-for="fee in feesFromDB"
                @key="fee._id"
                >
                <div class="inputduplicator__transactionlistitem--section">
                    <p class="deposit">{{fee.date}}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ fee.type }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>${{ fee.amount }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ fee.status }}</p>
                </div>
            </div>     
            <div class="inputduplicator__transactionlistitem" 
                v-for="fee in items"
                @key="fee.id"
                >
                <div class="inputduplicator__transactionlistitem--section">
                    <p class="deposit">{{fee.date}}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ fee.type}}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>${{ fee.amount }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ fee.status }}</p>
                </div>
                <span class="inputduplicator__transactionlistitem--remove" @click="removeArrayItem(fee.id)">X</span>
            </div>
        </div>
        <div class="inputduplicator__inputfields">
            <div class="inputduplicator__inputfield">
                <div class="inputduplicator__inputarea">
                    <label>Date</label>
                    <input placeholder="amount" v-model="date"/>
                </div>
                <div class="inputduplicator__inputarea">
                    <label>Type</label>
                    <input placeholder="Transaction type" v-model="type"/>
                </div>
            </div>
            <div class="inputduplicator__inputfield">
                <div class="inputduplicator__inputarea">
                    <label>Amount</label>
                    <input placeholder="Date time" v-model="amount"/>
                </div>
                <div class="inputduplicator__inputarea">
                    <label>Status</label>
                    <input placeholder="Fee" v-model="status"/>
                </div>
            </div>
        </div>
        <div class="inputduplicator__section--button">
            <span></span>
            <span class="btn" @click="addArrayItem">Add Fee</span>
        </div>
    </div>
</template>

<script>
import inputDuplicatorMixin from '@/mixins/inputDuplicator.js';
export default {
    props: ['name'],
    mixins: [inputDuplicatorMixin],
    computed: {
        feesFromDB() {
            return this.$store.getters.client.fees
        }
    },
}
</script>