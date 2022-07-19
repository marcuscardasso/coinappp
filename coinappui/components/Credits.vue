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
        </div>  
        <div class="inputduplicator__transactionlist">
            <div class="inputduplicator__transactionlistitem" 
                v-for="credit in creditsFromDB"
                @key="credit._id"
                >
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ credit.date }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>${{ credit.amount }}</p>
                </div>
            </div>     
            <div class="inputduplicator__transactionlistitem" 
                v-for="credit in items"
                @key="credit.id"
                >
                <div class="inputduplicator__transactionlistitem--section">
                    <p>{{ credit.date }}</p>
                </div>
                <div class="inputduplicator__transactionlistitem--section">
                    <p>${{ credit.amount }}</p>
                </div>
                <span class="inputduplicator__transactionlistitem--remove" @click="removeArrayItem(credit.id)">X</span>
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
        </div>
        <div class="inputduplicator__section--button">
            <span></span>
            <span class="btn"@click="addArrayItem">Add Credit</span>
        </div>
    </div>
</template>

<script>
import inputDuplicatorMixin from '@/mixins/inputDuplicator.js';
export default {
    props: ['name'],
    mixins: [inputDuplicatorMixin],
    computed: {
        creditsFromDB() {
            return this.$store.getters.client.credits
        }
    },
}
</script>
