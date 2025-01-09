<template>
<!-- Create User Component -->
    <div class="container-fluid p-5">
        <div class="row">
            <!-- personal information -->
            <div class="col-md-6">
                <div class="d-flex align-items-center">
                    <h3>Personal Information</h3>
                    <span class="text-secondary">&nbsp;(required)</span>
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
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="email" class="form-label">Email*</label>
                            <input type="text" class="p-2 form-control" id="email" placeholder="Enter email" v-model="email" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="phone_number" class="form-label">Phone number</label>
                            <input type="text" class="p-2 form-control" id="phone_number" placeholder="Enter phone number" v-model="phone_number" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="role" class="form-label">Role*</label>
                            <multiselect v-model="role" :options="role_options"></multiselect>
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
                            <label for="confirm_password" class="form-label">Confirm password</label>
                            <input type="password" class="p-2 form-control" id="confirm_password" placeholder="Confirm password" v-model="confirm_password" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- billing information -->
            <div class="col-md-6">
                <div class="d-flex align-items-center">
                    <h3>Billing Information</h3>
                    <span class="text-secondary">&nbsp;(optional)</span>
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
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="street_name" class="form-label">Street name</label>
                            <input type="text" class="p-2 form-control" id="street_name" placeholder="Enter street name" v-model="street_name" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="house_number" class="form-label">House number</label>
                            <input type="text" class="p-2 form-control" id="house_number" placeholder="Enter house number" required />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
            <button class="btn btn-primary" type="button">Create User</button>
            <button class="btn btn-secondary" type="button" v-on:click="cancelCreateScreen()">Cancel</button>
        </div>
    </div>
</template>
<script>
    import Taskbar from './Taskbar.vue';
    import Multiselect from 'vue-multiselect'
    
    export default {
        components: {
            Taskbar,
            Multiselect
        },

        data() {
            return {
                //define create users
                first_name: null,
                last_name: null,
                email: null,
                phone_number: null,
                city: null,
                zipcode: null,
                street_name: null,
                house_number: null,

                //role multiselect
                role: null,
                role_options: ['1 - admin', '2 - customer'],

            }
        },

        methods: {
            cancelCreateScreen() {
                this.$emit('cancel'); // Emit a cancel event
            },

            getRoleOptions () {

            }
        },

        mounted() {

        }
    }
</script>   