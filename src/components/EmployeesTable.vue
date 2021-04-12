<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="employees"
            :items-per-page="5"
            class="elevation-1"
            @click:row="selectRow"
            :multi-sort="true"
        >
        </v-data-table>
    </div>
</template>

<script>
export default {
    name: 'EmployeesTable',
    props: {
        employees: {
            type: Array,
            required: true,
        },
        selectedEmployee: {},
    },
    data: () => ({
        headers: [
            { text: 'Cin', value: 'cin' },
            { text: 'nom', value: 'name' },
            { text: 'prenom', value: 'prenom' },
            { text: 'date de naissance', value: 'dateN' },
        ],
    }),

    methods: {
        selectRow(item) {
            this.$emit('select-employee', item);
        },
    },
};
</script>

<style lang="scss" scoped></style>
