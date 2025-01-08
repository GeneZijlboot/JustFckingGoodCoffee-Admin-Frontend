<template>
<div class="d-flex vh-100 bg-light">
        <!-- Taskbar Section -->
        <Taskbar />
        <!-- Main Content Section -->
        <div class="table-container w-100 p-5 d-flex flex-column gap-5">
            <div class="">
                <h3>Users</h3>
                <table class="w-100 table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th v-for="(title, index) in users_header" :key="index">
                                {{ title }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users">
                            <td>{{user.id}}</td>
                            <td>{{user.user_role}}</td>
                            <td>{{user.first_name}}</td>
                            <td>{{user.last_name}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.phone_number}}</td>
                            <td>{{user.street_name}}</td>
                            <td>{{user.house_number}}</td>
                            <td>{{user.city}}</td>
                            <td>{{user.zipcode}}</td>
                            <td>{{user.subscription}}</td>
                            <td>{{user.created_at}}</td>
                            <td class="d-flex justify-content-around">
                                <div class="icon" v-on:click="userAction('read')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                </div>
                                <div class="icon" v-on:click="userAction('update')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                </div>
                                <div class="icon" v-on:click="userAction('delete')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="">
                <h3>Products</h3>
                <table class="w-100 table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th v-for="(title, index) in products_header" :key="index">
                                {{ title }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products">
                            <td>{{product.id}}</td>
                            <td>{{product.name}}</td>
                            
                            <td>
                                <img class="product_image" :src="baseUrl + product.image_url" alt="Coffee Image" />
                            </td>
                            <td>
                                <img class="product_image" :src="baseUrl + product.infobar_image_url" alt="Coffee Image" />
                            </td>
                            <td>{{product.roast_type}}</td>
                            <td>{{product.origin}}</td>
                            <td>{{product.description}}</td>
                            <td>{{product.data}}</td>
                            <td>{{product.information}}</td>
                            <td>{{product.information}}</td>
                            <td class="d-flex justify-content-around">
                                <div class="icon" v-on:click="userAction('read')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                </div>
                                <div class="icon" v-on:click="userAction('update')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                </div>
                                <div class="icon" v-on:click="userAction('delete')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="">
                <h3>Product variants</h3>
                <table class="w-100 table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th v-for="(title, index) in product_variants_header" :key="index">
                                {{ title }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product_variant in product_variants">
                            <td>{{product_variant.id}}</td>
                            <td>{{product_variant.product_variant_name}}</td>
                            <td>{{product_variant.weight}} gram</td>
                            <td>€{{product_variant.price}},-</td>
                            <td class="d-flex justify-content-around">
                                <div class="icon" v-on:click="userAction('read')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                </div>
                                <div class="icon" v-on:click="userAction('update')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                </div>
                                <div class="icon" v-on:click="userAction('delete')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="">
                <h3>Roles</h3>
                <table class="w-100 table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th v-for="(title, index) in roles_header" :key="index">
                                {{ title }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="role in roles">
                            <td>{{role.id}}</td>
                            <td>{{role.name}}</td>
                            <td class="d-flex justify-content-around">
                                <div class="icon" v-on:click="userAction('read')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                </div>
                                <div class="icon" v-on:click="userAction('update')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                </div>
                                <div class="icon" v-on:click="userAction('delete')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="">
                <h3>Api keys</h3>
                <table class="w-100 table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th v-for="(title, index) in api_keys_header" :key="index">
                                {{ title }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="api_key in api_keys">
                            <td>{{api_key.id}}</td>
                            <td>{{api_key.provider}}</td>
                            <td>{{api_key.public_key}}</td>
                            <td>{{api_key.secret_key}}</td>
                            <td class="d-flex justify-content-around">
                                <div class="icon" v-on:click="userAction('read')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                </div>
                                <div class="icon" v-on:click="userAction('update')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                </div>
                                <div class="icon" v-on:click="userAction('delete')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="">
                <h3>Carts</h3>
                <table class="w-100 table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th v-for="(title, index) in carts_header" :key="index">
                                {{ title }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cart in carts">
                            <td>{{cart.id}}</td>
                            <td>{{cart.cart_user}}</td>
                            <td>{{cart.cart_product}}</td>
                            <td>{{cart.variant_id}}</td>
                            <td>{{cart.quantity}}</td>
                            <td class="d-flex justify-content-around">
                                <div class="icon" v-on:click="userAction('read')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                </div>
                                <div class="icon" v-on:click="userAction('update')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                </div>
                                <div class="icon" v-on:click="userAction('delete')">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import Taskbar from './Taskbar.vue';
    import Swal from 'sweetalert2';
    
    export default {
        components: {
            Taskbar
        },

        data() {
            return {
                baseUrl: import.meta.env.VITE_BASE_URL,
                users_header: [ //define table headers
                    '#',
                    'Role',
                    'First name',
                    'Last name',
                    'Email',
                    'Phone number',
                    'Street name',
                    'House number',
                    'City',
                    'Zipcode',
                    'Subscription',
                    'Member from',
                    '',
                ],
                users: [], //define users

                // -------------------------------------------- //

                products_header: [ //define table headers
                    '#',
                    'Name',
                    'Image',
                    'Infobar image',
                    'Roast type',
                    'Origin',
                    'Description',
                    'Data',
                    'Information',
                    'Reviews',
                    '',
                ],
                products: [], //define products

                // -------------------------------------------- //

                product_variants_header: [ //define table headers
                    '#',
                    'Product',
                    'Weight',
                    'Price',
                    '',
                ],
                product_variants: [], //define users
                
                // -------------------------------------------- //

                roles_header: [ //define table headers
                    '#',
                    'Name',
                    '',
                ],
                roles: [], //define users
                
                // -------------------------------------------- //

                api_keys_header: [ //define table headers
                    '#',
                    'Provider',
                    'Public Key',
                    'Secret Key',
                    '',
                ],
                api_keys: [], //define users

                // -------------------------------------------- //

                carts_header: [ //define table headers
                    '#',
                    'User',
                    'Product',
                    'Variant',
                    'Quantity',
                    '',
                ],
                carts: [], //define users
            }
        },

        methods: {
            //getting all the users
            getUsers() {
                this.req('GET', '/user/getAll').then((res) => {
                    if (res.status) {
                        this.users = res.data;
                    }
                })
            },

            //getting all the products
            getProducts() {
                this.req('GET', '/product/getAll').then((res) => {
                    if (res.status) {
                        this.products = res.data;
                    }
                })
            },

            //getting all the products
            getProductVariants() {
                this.req('GET', '/ProductVariant/getAll').then((res) => {
                    if (res.status) {
                        this.product_variants = res.data;
                    }
                })
            },

            //getting all the products
            getRoles() {
                this.req('GET', '/Role/getAll').then((res) => {
                    if (res.status) {
                        this.roles = res.data;
                    }
                })
            },

            //getting all the products
            getApiKeys() {
                this.req('GET', '/ApiKey/getAll').then((res) => {
                    if (res.status) {
                        this.api_keys = res.data;
                    }
                })
            },


            //getting all the products
            getCarts() {
                this.req('GET', '/cart/getAll').then((res) => {
                    if (res.status) {
                        this.carts = res.data;
                    }
                })
            },

            //user table crud actions
            userAction(action) {
                if (action == 'create') { //create
                    
                } else if(action == 'read'){ //read

                } else if (action == 'update') { //update

                } else if (action == 'delete') { //delete
                   Swal.fire({
                        title: 'Warning!',
                        text: 'Are you sure you wanna delete this user?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes',
                        cancelButtonText: 'No'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // User clicked 'Yes', perform the deletion action
                            console.log('User confirmed deletion');
                        }
                    });
                }
            },

        },

        mounted() {
            this.getUsers();
            this.getProducts();
            this.getProductVariants();
            this.getRoles();
            this.getApiKeys();
            this.getCarts();
        }
    }
</script>
<style scoped>
    .icon {
        cursor: pointer;        
    }

    .table-container {
        overflow-y: auto;
    }

    .product_image {
        max-height: 70px;
        max-width: auto;
    }
</style>