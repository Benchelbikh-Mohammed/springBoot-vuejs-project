<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Patients List</h4>
            <ul>
                <li v-for="(patient, index) in patients" :key="index">
                    {{ patient.nom }}
                </li>
            </ul>
        </div>
        <div class="col-md-6"></div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return { patients: [] };
    },
    methods: {
        /* eslint-disable no-console */
        getPatients() {
            axios.get('http://localhost:8080/api/patients')
                .then(response => {
                    this.patients = response.data; // JSON are parsed automatically.
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.getPatients();
    },
};
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>
