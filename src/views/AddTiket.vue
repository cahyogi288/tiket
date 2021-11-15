<template>
    <v-main class="mx-5 mt-5">
        <v-card>
            <v-card-title>Tiket Penugasan Support CC</v-card-title>
            <v-card-text>
                <v-form ref="form">
                <v-row>
                    <v-col md="6">
                        <v-text-field
                        class="mx-8"
                           
                            label="No Laporan"
                            disabled
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                        class="mx-8"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            label="Tanggal Laporan"
                            prepend-icon="mdi-calendar"
                            readonly
                            :rules="[() => !!date || 'Date field is required']"
                            v-bind="attrs"
                            v-on="on"
                            dense
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="date"
                        @input="menu2 = false"
                        ></v-date-picker>
                    </v-menu>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-select
                        class="mx-8"
                        :items="itemJenis"
                        item-text="nama"
                        :rules="[() => !!jenis_gangguan || 'Jenis Gangguan field is required']"
                        item-value="sub_type_ticket"
                        label="Jenis Gangguan"
                        v-model="jenis_gangguan"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-select
                        class="mx-8"
                        :items="jenis_gangguan"
                        :rules="[() => !!sub_jenis || 'Sub Jenis Gangguan field is required']"
                        item-text="nama"
                        item-value="id"
                        label="Sub Jenis Gangguan"
                        v-model="sub_jenis"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="3">
                        <v-btn
                        class="mx-8"
                            color="primary"
                            text
                            @click="addData"
                        >
                            Submit
                        </v-btn>
                    </v-col>
                </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-main>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            menu2: '',
            date: '',
            no_laporan: '',
            tgl_laporan: '',
            itemJenis: [],
            jenis_gangguan: [],
            sub_jenis: ''
        }
    },
    mounted () {
        this.getDataGangguan();
    },
    methods: {
        addData(){
            if(this.$refs.form.validate()){
                console.log('masuk')
                console.log(this.date)
                console.log(this.jenis_gangguan[0].wo_supportid)
                console.log(this.sub_jenis)
                let url = "https://yantek.padipresence.id/api/ticket/createsupport"
                let addData = {
                    type_ticket_id: this.jenis_gangguan[0].wo_supportid,
                    sub_type_ticket_id: this.sub_jenis,
                    permasalahan: 'gagal kirim pesan'
                }
                axios.post(url,addData).then(( resp => {
                    console.log(resp)
                })).catch( err => {
                    console.log(err)
                })
            }else{
                console.log('tidak')
            }

        },
        getDataGangguan() {
            let url = "https://yantek.padipresence.id/api/mastersupport/getdata"
            axios.get(url).then( resp => {
                console.log(resp)
                this.itemJenis = resp.data.data
            }).catch( err => {
                console.log(err)
            })
        }
    },
}
</script>