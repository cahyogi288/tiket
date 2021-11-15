<template>
<v-app>
    <v-main>
    <v-container>
        <v-row class="contain" justify="center" align-self="center">
            <v-col
            md="6"
            >
                <v-card >
                    
                    <v-card-text>
                        <div class="mx-10"> 
                            <v-img
                            height="150"
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                            ></v-img>
                        </div>
                        <v-form ref="form">
                            <v-text-field
                            class="mx-8"
                                v-model="username"
                                :rules="[() => !!username || 'Username field is required']"
                                label="Username"
                                required
                            ></v-text-field>
                            <v-text-field
                            class="mx-8"
                                v-model="password"
                                :rules="[() => !!username || 'Password field is required']"
                                label="Password"
                                type="password"
                                required
                            ></v-text-field>
                            <v-text-field
                            class="mx-8"
                                v-model="imei"
                                :rules="[() => !!imei || 'Imei field is required']"
                                label="Imei"
                                required
                            ></v-text-field>
                            <div class="d-flex flex-column justify-content-center">
                                <v-btn
                                class="mx-8"
                                    color="primary"
                                    text
                                    @click="login"
                                >
                                    Submit
                                </v-btn>
                            </div>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
         </v-row>
    </v-container>
    </v-main>
</v-app>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
            imei: ''
        }
    },
    methods: {
        login() {
            let formLogin = {
                username: this.username,
                password: this.password,
                imei: this.imei
            }
            if(this.$refs.form.validate()){
                let url = 'https://yantek.padipresence.id'
                axios.post(url + '/api/authentication/login', formLogin)
                .then( resp => {
                    console.log(resp)
                }).catch( err => {
                    console.log(err)
                })
                console.log(formLogin)
            }else{
                alert('error')
            }
        }
    },
}
</script>

<style scoped>
.contain{
    margin-top: 50px;
}
</style>