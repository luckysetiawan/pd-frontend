<template>
  <div class="table" id="app">
    <center>
      <table>
        <tr>
          <th>ID</th>
          <th>Customer Email</th>
          <th>Date</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
        <tr v-for="order in orderData" :key="order.id">
          <td v-if="order.status == 3">{{ order.id }}</td>
          <td v-if="order.status == 3">{{ order.customer_email }}</td>
          <td v-if="order.status == 3">{{ order.waktu }}</td>
          <td v-if="order.status == 3">{{ order.alamat }}</td>
          <td v-if="order.status == 3">
            <button
              class="button is-small is-light"
              v-on:click="onProcess(order.id)"
            >
              <b-icon pack="fas" icon="play" size="is-small" type="is-primary">
              </b-icon>
            </button>
            <button
              class="button is-small is-danger second"
              v-on:click="onDelete(order.id)"
            >
              <b-icon pack="fas" icon="trash" size="is-small" type="is-primary">
              </b-icon>
            </button>
          </td>
        </tr>
      </table>
    </center>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.fetchData();
  },
  name: "App",
  props: ["order"],
  data() {
    return {
      orderData: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await axios.get("/order/allorder");
      this.orderData = res.data.dataOrder;
    },
    onProcess(id) {
      for (let i = 0; i < this.orderData.length; i++) {
        if (this.orderData[i].id == id) {
          this.orderData[i].status = 0;
          axios.put("/order/" + id, this.orderData[i]);
          const res = axios.get("/order/allorder");
          this.orderData = res.data.dataOrder;
          break;
        }
      }
    },
    onDelete(id) {
      for (let i = 0; i < this.orderData.length; i++) {
        if (this.orderData[i].id == id) {
          this.orderData[i].status = 4;
          axios.put("/order/" + id, this.orderData[i]);
          const res = axios.get("/order/allorder");
          this.orderData = res.data.dataOrder;
          break;
        }
      }
    },
  },
};
</script>
<style scoped>
table {
  width: 100%;
  text-align: center;
}
button.second {
  margin-left: 5%;
}
</style>