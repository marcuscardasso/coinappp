export default {
    data() {
        return {
            popupmessage: '',
            popupmessageType: ''
        }
    },
    methods: {
        resetPopup() {
            this.popupmessage = '';
            this.popupmessageType = '';
        }
    }
}