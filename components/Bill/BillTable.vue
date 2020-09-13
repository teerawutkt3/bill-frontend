<template>
  <div>
    <div class="overflow-auto">
      <v-simple-table style="white-space: nowrap;">
        <template v-slot:default>
          <thead>
            <tr>
              <th>
                Bill
              </th>
              <th>ลำดับ</th>
              <th>Title</th>
              <th>Description</th>
              <th>Amount</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td />
              <td>
                <v-text-field v-model="formBill.title" label="Title" color="#E040FB" />
              </td>
              <td> <v-text-field v-model="formBill.description" label="Description" color="#E040FB" /></td>
              <td> <v-text-field v-model="formBill.amount" type="number" label="Amount" color="#E040FB" /></td>
              <td class="text-right">
                <b-icon-add v-if="formBill.id == null " :click="createBill" />
                <b-icon-edit v-if="formBill.id != null" :click="updateBill" />
                <b-icon-cancel v-if="formBill.id != null" :click="resetFromBill" />
              </td>
              <td />
            </tr>
            <tr v-for="(item,index) in billList" :key="index">
              <td>
                <b-icon-edit :click="()=>{getBillByIndex(index)}" />
                <b-icon-delete :click="()=>{doDelete(item.id)}" />
              </td>
              <td>{{ index+1 }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.amount }}</td>
              <td />
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import SwalUtils from '@/common/SwalUtils'
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      table: {
        perPage: 10,
        perPages: [10, 25, 50, 100],
        page: 1
      },
      formBill: {
        id: null,
        description: '',
        amount: 0,
        title: ''
      },
      billList: []
    }
  },
  mounted () {
    this.getBillAll()
  },
  methods: {
    createBill () {
      this.$axios.post(process.env.VUE_BASE_URL + '/api/bill/', this.formBill).then((res) => {
        this.getBillAll()
        this.$toast.success('ทำรายการ]สำเร็จ')
      })
    },
    getBillByIndex (index) {
      this.formBill = {
        id: this.billList[index].id,
        title: this.billList[index].title,
        description: this.billList[index].description,
        amount: this.billList[index].amount
      }
    },
    updateBill () {
      this.$axios.put(`${process.env.VUE_BASE_URL}/api/bill/${this.formBill.id}`, this.formBill).then((res) => {
        this.getBillAll()
        this.$toast.success('ทำรายการ]สำเร็จ')
        this.resetFromBill()
      })
    },
    resetFromBill () {
      this.formBill = {
        id: null,
        description: '',
        amount: 0,
        title: ''
      }
    },
    getBillAll () {
      this.$axios.get(process.env.VUE_BASE_URL + '/api/bill/').then((res) => {
        this.billList = res.data
      })
    },
    doDelete (id) {
      Swal.fire(SwalUtils.CONFIRM).then((rs) => {
        if (rs.value) {
          this.$axios.delete(process.env.VUE_BASE_URL + '/api/bill/' + id).then((res) => {
            this.getBillAll()
            this.$toast.success('ทำรายการสำเร็จ')
          })
          // Swal.fire("แจ้งเตือน")
        }
      })
    }

  }
}
</script>
