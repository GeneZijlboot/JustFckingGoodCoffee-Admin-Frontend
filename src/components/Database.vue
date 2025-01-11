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
                            <button type="button" class="btn btn-primary my-3" v-on:click="dynamicCrudAction('C', users[0].controller)">Create user</button>
                            <div class="table-responsive">
                                <table class="w-100 table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th v-for="title in users_header">
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
                                            <td style="padding-right: 20px;">{{user.created_at}}</td>
                                            <td class="px-4" style="border-left: 1px solid lightgray;">
                                                <svg class="icon" v-on:click="dynamicCrudAction('R', user.controller, user.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                                <svg class="icon mx-4" v-on:click="dynamicCrudAction('U', user.controller, user.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                <svg class="icon" v-on:click="dynamicCrudAction('D', user.controller, user.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Products Table -->
                        <div class="tab-pane fade" id="nav-products" role="tabpanel" aria-labelledby="nav-products-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="dynamicCrudAction('C', products[0].controller)">Create product</button>
                            <div class="table-responsive">
                                <table class="w-100 table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th v-for="title in products_header">
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
                                            <td style="padding-right: 20px;">{{product.information}}</td>
                                            <td class="px-4" style="border-left: 1px solid lightgray;">
                                                <svg class="icon" v-on:click="dynamicCrudAction('R', product.controller, product.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                                <svg class="icon mx-4" v-on:click="dynamicCrudAction('U', product.controller, product.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                <svg class="icon" v-on:click="dynamicCrudAction('D', product.controller, product.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Product Variants Table -->
                        <div class="tab-pane fade" id="nav-product-variants" role="tabpanel" aria-labelledby="nav-product-variants-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="dynamicCrudAction('C', productvariantss[0].controller)">Create product variant</button>
                            <div class="table-responsive">
                                <table class="w-100 table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th v-for="title in productvariants_header">
                                                {{ title }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="productvariants in productvariants">
                                            <td>{{productvariants.id}}</td>
                                            <td>{{productvariants.productvariants_name}}</td>
                                            <td>{{productvariants.weight}} gram</td>
                                            <td style="padding-right: 20px;">€{{productvariants.price}},-</td>
                                            <td class="px-4" style="border-left: 1px solid lightgray;">
                                                <svg class="icon" v-on:click="dynamicCrudAction('R', productvariants.controller, productvariants.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                                <svg class="icon mx-4" v-on:click="dynamicCrudAction('U', productvariants.controller, productvariants.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                <svg class="icon" v-on:click="dynamicCrudAction('D', productvariants.controller, productvariants.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Roles Table -->
                        <div class="tab-pane fade" id="nav-roles" role="tabpanel" aria-labelledby="nav-roles-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="dynamicCrudAction('C', roles[0].controller)">Create role</button>
                            <div class="table-responsive">
                                <table class="w-100 table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th v-for="title in roles_header">
                                                {{ title }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="role in roles">
                                            <td>{{role.id}}</td>
                                            <td style="padding-right: 20px;">{{role.name}}</td>
                                            <td class="px-4" style="border-left: 1px solid lightgray;">
                                                <svg class="icon" v-on:click="dynamicCrudAction('R', role.controller, role.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                                <svg class="icon mx-4" v-on:click="dynamicCrudAction('U', role.controller, role.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                <svg class="icon" v-on:click="dynamicCrudAction('D', role.controller, role.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Api Keys Table -->
                        <div class="tab-pane fade" id="nav-api-keys" role="tabpanel" aria-labelledby="nav-api-keys-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="dynamicCrudAction('C', apikeys[0].controller)">Create api key</button>
                            <div class="table-responsive">
                                <table class="w-100 table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th v-for="title in apikeys_header">
                                                {{ title }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="apikey in apikeys">
                                            <td>{{apikey.id}}</td>
                                            <td>{{apikey.provider}}</td>
                                            <td>{{apikey.public_key}}</td>
                                            <td style="padding-right: 20px;">{{apikey.secret_key}}</td>
                                            <td class="px-4" style="border-left: 1px solid lightgray;">
                                                <svg class="icon" v-on:click="dynamicCrudAction('R', apikey.controller, apikey.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                                <svg class="icon mx-4" v-on:click="dynamicCrudAction('U', apikey.controller, apikey.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                <svg class="icon" v-on:click="dynamicCrudAction('D', apikey.controller, apikey.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Carts Table -->
                        <div class="tab-pane fade d-flex" id="nav-carts" role="tabpanel" aria-labelledby="nav-carts-tab">
                            <div class="table-responsive">
                                <table class="w-100 table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th v-for="title in carts_header">
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
                                            <td style="padding-right: 20px;">{{cart.quantity}}</td>
                                            <td class="px-4" style="border-left: 1px solid lightgray;">
                                                <svg class="icon" v-on:click="dynamicCrudAction('R', cart.controller, cart.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                                <svg class="icon mx-4" v-on:click="dynamicCrudAction('U', cart.controller, cart.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                <svg class="icon" v-on:click="dynamicCrudAction('D', cart.controller, cart.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CreateComponent v-if="showPage" v-model="showPage" @cancel="handleCancel"/>
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
                showPage: null, 
                showDatabase: true,
                baseUrl: import.meta.env.VITE_BASE_URL,

                //user data
                users: [],
                users_header: [],

                //product data
                products: [],
                products_header: [],

                //productvariant data
                productvariants: [],
                productvariants_header: [],

                //roles data
                roles: [],
                roles_header: [],
                
                //api keys data
                apikeys: [],
                api_keys_header: [],

                //cart data
                carts: [],
                carts_header: [],

                //controllers
                controllers: [
                    'User',
                    'Role',
                    'ProductVariant',
                    'Product',
                    'Cart',
                    'ApiKey'
                ],
            }
        },

        methods: {
            //dynamicly load in every table from database
            dynamiclyGetTable(controller) {
                this.req('GET', '/' + controller + '/getAll').then((res) => {
                    if (res.status) {
                        // Check if the response has 'field_headers' and separate it
                        const fieldHeaders = res.data.field_headers || [];  // Ensure we have a default empty array
                        const dataWithoutHeaders = Object.keys(res.data)
                            .filter(key => key !== 'field_headers')
                            .reduce((obj, key) => {
                                obj[key] = res.data[key];
                                return obj;
                            }, {});
                        
                        // Dynamically set the properties
                        this[controller.toLowerCase() + 's'] = dataWithoutHeaders;
                        this[controller.toLowerCase() + 's_header'] = fieldHeaders;
                    }
                });
            },

            //user table crud CrudActions
            dynamicCrudAction(action, controller, id) {
                const data = {
                    id: id
                }

                if (action == 'C') { //create
                    this.showPage = controller; //show the correct page for creating a table row
                    this.showDatabase = false; //hide the datbase component

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
                            // User clicked 'Yes', perform the deletion dynamicCrudAction
                            this.req('POST', '/' + controller + '/delete' + controller, data).then((res) => {
                                if (res.status) {
                                    this.get + controller + s();
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

            //cancle create page         
            handleCancel() {
                this.showDatabase = true; // Show the database again
                this.showPage = false; // Hide the create component
            }
        },

        mounted() {
            //loop through controllers and get its data table
            this.controllers.forEach(controller => {
                this.dynamiclyGetTable(controller);
            });
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
        min-width: 180px;
    }
</style>