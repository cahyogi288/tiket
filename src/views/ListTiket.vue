<template>
    <!-- <v-app> -->
        <v-main>
            <!-- <v-card> -->
                <v-card-text>
                    <v-data-table
                    dense
                    :headers="headers"
                    :items="desserts"
                    item-key="name"
                    class="elevation-1 mx-5 mt-5"
                    ></v-data-table>
                </v-card-text>
            <!-- </v-card> -->
        </v-main>
    <!-- </v-app> -->
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            desserts: [],
            headers: [
                {name: 'No'},
                {name: 'No Laporan'},
                {name: 'Tgl Laporan'},
                {name: 'Jenis'},
                {name: 'Sub Jenis'},
                {name: 'Petugas'},
                {name: 'Permasalahan'},
                {name: 'Status'}
            ]
        }
    },
    mounted () {
        this.getData();
    },
    methods: {
        getData() {
            let url = 'https://yantek.padipresence.id/api/ticket/support'
            axios.get(url + '?offset=0&limit=10')
            .then( resp => {
                console.log(resp)
            }).catch( err => {
                console.log(err)
            })
        }
    },
}
</script>