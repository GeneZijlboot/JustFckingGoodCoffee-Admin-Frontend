<template>
<div class="d-flex vh-100 bg-light">
        <!-- Taskbar Section -->
        <Taskbar />
        <!-- Main Content Section -->
        <div v-if="showDatabase" class="table-container p-5 d-flex flex-column gap-5">
            <div class="d-flex justify-content-center">
                <div class="col-md-12">
                    <nav class="">
                        <div class="nav nav-tabs d-flex column-gap-4" id="nav-tab" role="tablist">
                            <button class="nav-link active fs-5" id="nav-users-tab" data-bs-toggle="tab" data-bs-target="#nav-users" type="button" role="tab" aria-controls="nav-users" aria-selected="false">Users</button>
                            <button class="nav-link fs-5" id="nav-products-tab" data-bs-toggle="tab" data-bs-target="#nav-products" role="tab" aria-controls="nav-products" aria-selected="true">Products</button>
                            <button class="nav-link fs-5" id="nav-product-variants-tab" data-bs-toggle="tab" data-bs-target="#nav-product-variants" type="button" role="tab" aria-controls="nav-product-variants" aria-selected="false">Product Variants</button>
                            <button class="nav-link fs-5" id="nav-roles-tab" data-bs-toggle="tab" data-bs-target="#nav-roles" type="button" role="tab" aria-controls="nav-roles" aria-selected="false">Roles</button>
                            <button class="nav-link fs-5" id="nav-api-keys-tab" data-bs-toggle="tab" data-bs-target="#nav-api-keys" type="button" role="tab" aria-controls="nav-api-keys" aria-selected="false">Api Keys</button>
                            <button class="nav-link fs-5" id="nav-carts-tab" data-bs-toggle="tab" data-bs-target="#nav-carts" type="button" role="tab" aria-controls="nav-carts" aria-selected="false">Carts</button>
                        </div>
                    </nav>

                    <div class="tab-content" id="nav-tabContent">
                        <!-- Users Table -->
                        <div class="tab-pane fade show active" id="nav-users" role="tabpanel" aria-labelledby="nav-users-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="CrudAction('C', users[0].controller)">Create user</button>
                            <div class="table-responsive">
                                <table v-if="users.length > 0" class="w-100 table table-striped">
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
                                            <td>
                                                <div class="icon" v-on:click="CrudAction('R', user.controller, user.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="icon" v-on:click="CrudAction('U', user.controller, user.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="icon" v-on:click="CrudAction('D', user.controller, user.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 v-else>
                                    Loading data...
                                </h3>
                            </div>
                        </div>

                        <!-- Products Table -->
                        <div class="tab-pane fade" id="nav-products" role="tabpanel" aria-labelledby="nav-products-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="CrudAction('C', products[0].controller)">Create product</button>
                            <div class="table-responsive">
                                <table v-if="products.length > 0" class="w-100 table table-striped">
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
                                                <div class="icon" v-on:click="CrudAction('R', product.controller, product.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                                </div>
                                            </td>
                                             <td class="d-flex justify-content-around">
                                                <div class="icon" v-on:click="CrudAction('U', product.controller, product.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                </div>
                                            </td>
                                             <td class="d-flex justify-content-around">
                                                <div class="icon" v-on:click="CrudAction('D', product.controller, product.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 v-else>
                                    Loading data...
                                </h3>
                            </div>
                        </div>

                        <!-- Product Variants Table -->
                        <div class="tab-pane fade" id="nav-product-variants" role="tabpanel" aria-labelledby="nav-product-variants-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="CrudAction('C', product_variants[0].controller)">Create product variant</button>
                            <div class="table-responsive">
                                <table v-if="product_variants.length > 0" class="w-100 table table-striped">
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
                                                <div class="icon" v-on:click="CrudAction('R', product_variant.controller)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                                </div>
                                                <div class="icon" v-on:click="CrudAction('U', product_variant.controller)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                </div>
                                                <div class="icon" v-on:click="CrudAction('D', product_variant.controller)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 v-else>
                                    Loading data...
                                </h3>
                            </div>
                        </div>

                        <!-- Roles Table -->
                        <div class="tab-pane fade" id="nav-roles" role="tabpanel" aria-labelledby="nav-roles-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="CrudAction('C', roles[0].controller)">Create role</button>
                            <div class="table-responsive">
                                <table v-if="roles.length > 0" class="w-100 table table-striped">
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
                                                <div class="icon" v-on:click="CrudAction('R', role.controller)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                                </div>
                                                <div class="icon" v-on:click="CrudAction('U', role.controller)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                </div>
                                                <div class="icon" v-on:click="CrudAction('D', role.controller)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 v-else>
                                    Loading data...
                                </h3>
                            </div>
                        </div>

                        <!-- Api Keys Table -->
                        <div class="tab-pane fade" id="nav-api-keys" role="tabpanel" aria-labelledby="nav-api-keys-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="CrudAction('C', api_keys[0].controller)">Create api key</button>
                            <div class="table-responsive">
                                <table v-if="api_keys.length > 0" class="w-100 table table-striped">
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
                                                <div class="icon" v-on:click="CrudAction('R', api_key.controller)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                                </div>
                                                <div class="icon" v-on:click="CrudAction('U', api_key.controller)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                </div>
                                                <div class="icon" v-on:click="CrudAction('D', api_key.controller)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 v-else>
                                    Loading data...
                                </h3>
                            </div>
                        </div>

                        <!-- Carts Table -->
                        <div class="tab-pane fade d-flex" id="nav-carts" role="tabpanel" aria-labelledby="nav-carts-tab">
                            <div class="table-responsive">
                                <table v-if="api_keys.length > 0" class="w-100 table table-striped">
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
                                                <div class="icon" v-on:click="CrudAction('R', cart.controller)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                                </div>
                                                <div class="icon" v-on:click="CrudAction('R', cart.controller)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                </div>
                                                <div class="icon" v-on:click="CrudAction('D', cart.controller)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 v-else>
                                    Loading data...
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CreateComponent v-if="showCreateComponent" @cancel="handleCancel"/>
    </div>
</template>
<script>
    import Taskbar from './Taskbar.vue';
    import CreateComponent from './CreateComponent.vue';
    import Swal from 'sweetalert2';
    
    export default {
        components: {
            Taskbar,
            CreateComponent
        },

        data() {
            return {
                showDatabase: true,
                showCreateComponent: false,
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
                    '',
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
                    '',
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

            //user table crud CrudActions
            CrudAction(action, controller, id) {
                const data = {
                    id: id
                }

                if (action == 'C') { //create
                    if (controller = 'User') { //show screen to create a user
                        this.showCreateComponent = true;
                    }
                    this.showDatabase = false;

                } else if(action == 'R'){ //read

                } else if (action == 'U') { //update

                } else if (action == 'D') { //delete
                    Swal.fire({
                        title: 'Warning!',
                        text: 'Are you sure you wanna delete this user?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes',
                        cancelButtonText: 'No'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // User clicked 'Yes', perform the deletion CrudAction
                            console.log(controller);
                            this.req('POST', '/' + controller + '/DeleteById', data).then((res) => {
                                if (res.status) {
                                    this.getUsers(); //reload users adter delete
                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'You have successfully logged in.',
                                        icon: 'success',
                                        confirmButtonText: 'OK'
                                    });
                                }
                            })
                        }
                    });
                }
            },

           handleCancel() {
                this.showDatabase = true; // Show the database again
                this.showCreateComponent = false; // Hide the create component
            }
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

    td {
        min-width: 150px;
    }
</style>