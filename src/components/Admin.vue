<template>
    <div class="container">
        <Layouts />
        <table class="table table-hover position-absolute top-50 start-50 translate-middle">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">password</th>
                    <th scope="col">role_id</th>
                    <th scope="col">action</th>
                </tr>
            </thead>
            <tbody v-for="users in user" :key="users.id">
                <tr scope="row">
                    <td>{{ users.id}}</td>
                    <td>{{ users.name}}</td>
                    <td>{{ users.email}}</td>
                    <td>{{ users.password}}</td>
                    <td>{{ users.role_id}}</td>
                    <td> edit | delete </td>
                </tr>
            </tbody>
        </table>

        <!-- <input type="button" value="Add User" class="mt-4 p-2"> -->
    </div>
</template>

<script>
import Layouts from '@/components/Layouts.vue'
import axios from 'axios' 

    export default{
        name: 'Admin',
        components:{
            Layouts
        },
        data(){
            return{
                user:Array
            }
        },
        created(){
            this.getUser()
        },
        methods: {
            async getUser(){
                let url = 'http://127.0.0.1:8000/api/show'
                await axios.get(url).then(response => {
                    this.user = response.data.user
                    console.log(this.user)
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        mounted(){
            console.log('User List Mounted...')
        }
    }
</script>