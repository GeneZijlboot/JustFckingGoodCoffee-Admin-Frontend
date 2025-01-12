<template>
    <div class="container-fluid p-5">
        <!-- Create User Component -->  
        <div v-if="modelValue == 'User'">
            <div class="row">
                <!-- Personal information -->
                <div class="col-md-6">
                    <div class="d-flex align-items-center">
                        <h3>Personal Information</h3>
                        <span class="text-secondary">(required)</span>
                    </div>
                    <div class="row my-4">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="first_name" class="form-label">First Name*</label>
                                <input type="text" class="p-2 form-control" id="first_name" placeholder="Enter first name" v-model="first_name" required />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="last_name" class="form-label">Last Name*</label>
                                <input type="text" class="p-2 form-control" id="last_name" placeholder="Enter last name" v-model="last_name" required />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-12">
                            <div class="form-group">
                                 <label for="email" class="form-label">Email*</label>
                                <input type="text" class="p-2 form-control" id="email" placeholder="Enter email" v-model="email" required />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="password" class="form-label">Password*</label>
                                <input type="password" class="p-2 form-control" id="password" placeholder="Enter password" v-model="password" required />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="password_confirm" class="form-label">Confirm password*</label>
                                <input type="password" class="p-2 form-control" id="password_confirm" placeholder="Confirm password" v-model="password_confirm" required />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="role" class="form-label">Role*</label>
                                <multiselect v-model="user_role_id" track-by="name" label="name" placeholder="Select a role" :options="roleOptions" :searchable="false" :allow-empty="false"><template v-slot:singleLabel="{ option }">{{ option.name }}</template></multiselect>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Billing information -->
                <div class="col-md-6">
                    <div class="d-flex align-items-center">
                        <h3>Billing Information</h3>
                        <span class="text-secondary">(optional)</span>
                    </div>
                    <div class="row my-4">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="city" class="form-label">City</label>
                                <input type="text" class="p-2 form-control" id="city" placeholder="Enter city" v-model="city" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="zipcode" class="form-label">Zipcode</label>
                                <input type="text" class="p-2 form-control" id="zipcode" placeholder="Enter zipcode" v-model="zipcode" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="street_name" class="form-label">Street name</label>
                                <input type="text" class="p-2 form-control" id="street_name" placeholder="Enter street name" v-model="street_name" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="house_number" class="form-label">House number</label>
                                <input type="text" class="p-2 form-control" id="house_number" placeholder="Enter house number" v-model="house_number" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="phone_number" class="form-label">Phone number</label>
                                <input type="text" class="p-2 form-control" id="phone_number" placeholder="Enter phone number" v-model="phone_number" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                <button class="btn btn-primary" type="button" v-on:click="dynamiclyCreateTableRow(modelValue)">Create User</button>
                <button class="btn btn-secondary" type="button" v-on:click="cancelCreateScreen()">Cancel</button>
            </div>
        </div>

        <!-- Create Product Component -->  
        <div v-if="modelValue == 'Product'">
            <p>Porducts create</p>
            <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                <button class="btn btn-primary" type="button">Create Product</button>
                <button class="btn btn-secondary" type="button" v-on:click="cancelCreateScreen()">Cancel</button>
            </div>
        </div>

         <!-- Create ProductVariant Component -->  
        <div v-if="modelValue == 'ProductVariant'">
            <p>ProductVariant create</p>
            <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                <button class="btn btn-primary" type="button">Create Product Variant</button>
                <button class="btn btn-secondary" type="button" v-on:click="cancelCreateScreen()">Cancel</button>
            </div>
        </div>

        <!-- Create Role Component -->
        <div v-if="modelValue == 'Role'">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="role_name" class="form-label">Role name</label>
                        <input type="text" class="p-2 form-control" id="role_name" placeholder="Enter role name" v-model="role_name" required />
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                <button class="btn btn-primary" type="button" v-on:click="dynamiclyCreateTableRow(modelValue)">Create Role</button>
                <button class="btn btn-secondary" type="button" v-on:click="cancelCreateScreen()">Cancel</button>
            </div>
        </div>

        <!-- Create ApiKey Component -->
        <div v-if="modelValue == 'ApiKey'">
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="provider" class="form-label">provider</label>
                        <input type="text" class="p-2 form-control" id="provider" placeholder="Enter provider name" v-model="provider" required />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="public_key" class="form-label">Public key</label>
                        <input type="text" class="p-2 form-control" id="public_key" placeholder="Enter public key" v-model="public_key" required />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="secret_key" class="form-label">Secret Key</label>
                        <input type="text" class="p-2 form-control" id="secret_key" placeholder="Enter private key" v-model="secret_key" required />
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                <button class="btn btn-primary" type="button" v-on:click="dynamiclyCreateTableRow(modelValue)">Create ApiKey</button>
                <button class="btn btn-secondary" type="button" v-on:click="cancelCreateScreen()">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
    import Taskbar from './Taskbar.vue';
    import Multiselect from 'vue-multiselect';
    import 'vue-multiselect/dist/vue-multiselect.min.css';
    import Swal from 'sweetalert2';
    
    export default {
        components: {
            Taskbar,
            Multiselect
        },

        props: {
            modelValue: {
                type: String,
                required: true,
            },
        },
        
        data() {
            return {
                //USERS
                first_name: null,
                last_name: null,
                email: null,
                phone_number: null,
                city: null,
                zipcode: null,
                street_name: null,
                house_number: null,
                password: null,
                password_confirm: null,

                //PRODUCTS

                //PRODUCT VARIANTS

                //ROLES
                user_role_id: null,
                role_options: ['1 - admin', '2 - customer'],

                //API KEY
                provider: null,
                public_key: null,
                secret_key: null, 

                roleValue: null,
                roleOptions: [],
            }
        },

        methods: {
            //cancle create screen, go back to database tabs
            cancelCreateScreen() {
                this.$emit('cancel'); // Emit a cancel event
            },

            //create a new table row based on the given controller
            dynamiclyCreateTableRow(controller) {
                //set empty data array for fields
                let data = {};
                if (controller == 'User') {
                    data = { //define data fields by User
                        first_name: this.first_name,
                        last_name: this.last_name,
                        email: this.email,
                        password: this.password,
                        password_confirm: this.password_confirm,
                        user_role_id: this.user_role_id.id,
                    };

                    if (this.city) data.city = this.city;
                    if (this.zipcode) data.zipcode = this.zipcode;
                    if (this.phone_number) data.phone_number = this.phone_number;
                    if (this.house_number) data.house_number = this.house_number;
                    if (this.street_name) data.street_name = this.street_name;
                } else if (controller == 'Product') {
                    data = { //define data fields by Product

                    };
                } else if (controller == 'ProductVariant') {
                    data = { //define data fields by ProductVariant

                    };
                } else if (controller == 'Role') {
                    data = { //define data fields by Role
                        name: this.role_name,
                    };
                } else if (controller == 'ApiKey') {
                    data = { //define data fields by ApiKey
                        provider: this.provider,
                        secret_key: this.secret_key,
                        public_key: this.public_key
                    };
                }
                
                //check if data fields are defined
                if (Object.values(data).every(value => value !== null && value !== undefined && value !== '')) {
                    this.req('POST', '/' + controller + '/create' + controller, data).then((res) => {
                        if (res.status) {
                            this.cancelCreateScreen();
                            this.$emit('row-created', controller); //get the table again when succesfully inserted new row
                        }

                        Swal.fire({ //show correct data for true or false
                            title: res.status ? 'Succes!' : 'Error!',
                            text: res.message,
                            icon: res.status ? 'success' : 'error',
                        });
                    })
                } else {
                    Swal.fire({ //show correct data for true or false
                        title: 'Warning!',
                        text: 'Make sure to fill in every field :)',
                        icon: 'warning',
                    });
                }
            },

            dynamiclyGetOptions(controller) {
                this.req('Get', '/' + controller + '/getOptions').then((res) => {
                    if (res.status) {
                        res.data.forEach(role => {
                            this.roleOptions.push(role);
                        });
                    }
                })
            }
        },

        mounted() {
            if (this.modelValue == 'User') { //get Role options to create a User
                this.dynamiclyGetOptions('Role');
            }
        }
    }
</script>