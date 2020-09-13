<template>
  <div>
    <v-row>
      <v-col>
        <b class="float-left">
          Bill
        </b>
        {{ nowDate }}
        <v-btn @click="noti">
          noti
        </v-btn>
        <b-icon-add :right="true" :click="goForm" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(bill, index) in billList"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <BillCard :title="bill.title" :type="bill.type" :cost="bill.cost" :click="()=>{onPay(index)}" />
      </v-col>
    </v-row>
    <hr>
    <v-row>
      <v-col>
        <h3>
          Payed
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(bill, index) in billList"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <BillCard :title="bill.title" :type="bill.description" :cost="bill.amount" :click="()=>{onPay(index)}" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import BillCard from '@/components/Bill/BillCard'
// import MessageConstants from '@/common/MessageConstants'
export default {
  components: {
    BillCard
  },
  data () {
    return {
      nowDate: new Date(),
      billList: []
    }
  },
  mounted () {
    this.getBillAll()
  },
  methods: {
    getBillAll () {
      this.$axios.get(process.env.VUE_BASE_URL + '/api/bill/').then((res) => {
        this.billList = res.data
      })
    },
    onPay (index) {
      // console.log('Pay index: ', index)
    },
    goForm () {
      this.$router.push({ path: '/bill/b-form' })
    }
  }
}
</script>
