<template>
    <v-container class="grey lighten-4">
        <h1>Dashboard</h1>
        <!-- <v-row align="stretch">
            <v-col
                v-for="sale in sales"
                :key="`${sale.title}`"
                cols="12"
                md="4"
            >
                <SalesGraph :sale="sale" />
            </v-col>
        </v-row>

        <v-row>
            <v-col
                v-for="statistic in statistics"
                :key="`${statistic.title}`"
                cols="12"
                md="4"
            >
                <StatisticCard :statistic="statistic" />
            </v-col>
        </v-row> -->

        <v-row>
            <v-col cols="12">
                <EmployeesTable
                    :employees="employees"
                    @select-employee="setEmployee"
                />
            </v-col>
            <!-- <v-col cols="12" md="4">
                <EventTimeline :timeline="timeline" />
            </v-col> -->
        </v-row>

        <v-snackbar v-model="snackbar" :left="$vuetify.breakpoint.lgAndUp">
            You have selected {{ selectedEmployee.name }},
            {{ selectedEmployee.title }}
            <v-btn color="pink" text @click="snackbar = false">
                Close
            </v-btn>
        </v-snackbar>

        <v-dialog v-model="show">
            <v-card>
                <v-toolbar color="primary" dark>Opening from the top</v-toolbar>
                <v-card-text>
                    <div v-if="selectedEmployee != null">
                        <readOnlyUserInfos
                            :infected="infected"
                            :citoyen="selectedEmployee"
                        />
                    </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                    <v-btn text @click="show = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import EmployeesTable from '../components/EmployeesTable';
// import EventTimeline from '../components/EventTimeline';
// import SalesGraph from '../components/SalesGraph';
// import StatisticCard from '../components/StatisticCard';
import timelineData from '../data/timeline.json';
import salesData from '../data/sales.json';
import statisticsData from '../data/statistics.json';
import readOnlyUserInfos from '@/components/readOnlyUserInfos.vue';
import axios from 'axios';

export default {
    name: 'DashboardPage',
    components: {
        EmployeesTable,
        // EventTimeline,
        // SalesGraph,
        // StatisticCard,
        readOnlyUserInfos,
    },

    mounted() {
        const apiCall = async () => {
            const cit = await axios.get('https://localhost:44347/api/citoyen');
            const inf = await axios.get('https://localhost:44347/api/infected');
            this.employees = cit.data;
            this.infected = inf.data;
        };

        apiCall();
    },
    data() {
        return {
            employees: [],
            infected: [],
            sales: salesData,
            selectedEmployee: {},
            show: false,
            snackbar: false,
            statistics: statisticsData,
            timeline: timelineData,
        };
    },
    methods: {
        setEmployee(citoyen) {
            this.show = true;
            this.selectedEmployee = { ...citoyen };
        },
    },
};
</script>
