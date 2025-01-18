<template>
    <div class="container-fluid px-5">
        <!-- Create User Component -->  
        <div v-if="modelValue == 'User'">
            <div class="d-flex justify-content-center">
                <div class="container">
                    <div class="row d-flex justify-content-between mb-4">
                        <div class="col-md-6 pe-5">
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
                        <div class="col-md-6 ps-5">
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
            </div>
        </div>

        <!-- Create Product Component -->  
        <div v-if="modelValue == 'Product'">
            <div class="scrollable vh-100">
                <div class="row justify-content-center align-items-center mt-5">
                    <div class="col-md-5 d-flex flex-column justify-content-center">
                        <h3>New Product:</h3>
                        <div class="row my-4">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="product_name" class="form-label">product name*</label>
                                    <input type="text" class="p-2 form-control" id="product_name" placeholder="Enter product name" v-model="product_name" required />
                                </div>
                            </div>
                        </div>

                        <!-- Product Image -->
                        <div class="row mb-4">
                            <div class="col-md-12">
                                <!-- Display image preview -->
                                <div v-if="productImageUrl" class="shop_image_container">
                                    <label>Product Image:</label>
                                    <img class="shop_image card-img-top mt-2" style="cursor: pointer;" @click="productImageFullscreen(productImageUrl)" :src="productImageUrl" alt="Product Image" />
                                </div>
                                <form @submit.prevent>
                                    <input type="file" accept="image/*" id="product-file-input" style="display: none;" @change="onFileChange($event, 'productImageFile', 'productImageUrl')" />
                                </form>
                                <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                                    <button v-if="productImageUrl" class="btn btn-primary" @click="productImageFullscreen(productImageUrl)">Image Fullscreen</button>
                                    <button v-if="productImageUrl" class="btn btn-danger" @click="removeImage('productImageFile', 'productImageUrl')">Remove product image</button>
                                </div>
                            </div>
                        </div>

                        <!-- Infobar Image -->
                        <div class="row mb-4">
                            <div class="col-md-12">
                                <!-- Display image preview -->
                                <div v-if="infobarImageUrl" class="shop_image_container">
                                    <label>Infobar Image:</label>
                                    <img class="img-fluid w-100 infobar-img mt-2" style="cursor: pointer;" @click="productImageFullscreen(infobarImageUrl)" :src="infobarImageUrl" alt="Infobar Image" />
                                </div>
                                <form @submit.prevent>
                                    <input type="file" accept="image/*" id="infobar-file-input" style="display: none;" @change="onFileChange($event, 'infobarImageFile', 'infobarImageUrl')" />
                                </form>
                                <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                                    <button v-if="infobarImageUrl" class="btn btn-primary" @click="productImageFullscreen(infobarImageUrl)">Image Fullscreen</button>
                                    <button v-if="infobarImageUrl" class="btn btn-danger" @click="removeImage('infobarImageFile', 'infobarImageUrl')">Remove infobar image</button>
                                </div>
                            </div>
                        </div>

                        <!-- handle buttons for adding the images -->
                        <div v-if="!productImageUrl && infobarImageUrl" class="d-flex justify-content-end align-items-end">
                            <label for="product-file-input" class="btn btn-primary">Add product image</label>
                        </div>
                        <div v-if="!infobarImageUrl && productImageUrl" class="d-flex justify-content-end align-items-end">
                            <label for="infobar-file-input" class="btn btn-primary">Add infobar image</label>
                        </div>
                        <div v-if="!infobarImageUrl && !productImageUrl" class="d-flex justify-content-end align-items-end gap-2">
                            <label for="product-file-input" class="btn btn-primary">Add product image</label>
                            <label for="infobar-file-input" class="btn btn-primary">Add infobar image</label>
                        </div>

                        <div class="row my-4">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="roast_type" class="form-label">Roast type*</label>
                                    <input type="text" class="p-2 form-control" id="roast_type" placeholder="Enter roast type" v-model="roast_type" required />
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="origin" class="form-label">Origin*</label>
                                    <input type="text" class="p-2 form-control" id="origin" placeholder="Enter origin" v-model="origin" required />
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-12">
                            <label for="provider" class="form-label">Description*</label>
                            <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="message" style="height: 100px" v-model="product_description" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-12">
                            <label for="provider" class="form-label">Data*</label>
                            <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="message" style="height: 100px" v-model="product_data" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-12">
                            <label for="provider" class="form-label">information*</label>
                            <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="message" style="height: 100px" v-model="product_information" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label for="language" class="form-label">Language*</label>
                                        <multiselect 
                                            v-model="selectedLanguage" 
                                            :options="languageOptions" 
                                            :searchable="false" 
                                            :allow-empty="false"
                                            placeholder="Select a language">
                                            <template v-slot:singleLabel="{ option }">{{ option }}</template>
                                        </multiselect>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Action Buttons -->
                        <div class="d-flex justify-content-end align-items-end gap-2 my-3">
                            <button class="btn btn-primary" type="button" @click="dynamiclyCreateTableRow(modelValue)">Create Product</button>
                            <button class="btn btn-secondary" type="button" @click="cancelCreateScreen()">Cancel</button>
                        </div>

                    </div>
                </div>
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
            <div class="row justify-content-center align-items-center mt-5">
                <div class="col-md-5 d-flex flex-column justify-content-center">
                    <h3>New Role:</h3>
                    <div class="row my-4">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="role_name" class="form-label">Role name*</label>
                                <input type="text" class="p-2 form-control" id="role_name" placeholder="Enter role name" v-model="role_name" required />
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                        <button class="btn btn-primary" type="button" v-on:click="dynamiclyCreateTableRow(modelValue)">Create Role</button>
                        <button class="btn btn-secondary" type="button" v-on:click="cancelCreateScreen()">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Create ApiKey Component -->
        <div v-if="modelValue == 'ApiKey'">
            <div class="row justify-content-center align-items-center mt-5">
                <div class="col-md-5 d-flex flex-column justify-content-center">
                    <h3>New Api Key:</h3>
                    <div class="row my-4">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="provider" class="form-label">provider*</label>
                                <input type="text" class="p-2 form-control" id="provider" placeholder="Enter provider name" v-model="provider" required />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="public_key" class="form-label">Public key*</label>
                                <input type="text" class="p-2 form-control" id="public_key" placeholder="Enter public key" v-model="public_key" required />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="secret_key" class="form-label">Secret Key*</label>
                                <input type="text" class="p-2 form-control" id="secret_key" placeholder="Enter private key" v-model="secret_key" required />
                            </div>
                        </div>
                    </div>
                     <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                        <button class="btn btn-primary" type="button" v-on:click="dynamiclyCreateTableRow(modelValue)">Create Api Key</button>
                        <button class="btn btn-secondary" type="button" v-on:click="cancelCreateScreen()">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Create Message Component -->
        <div v-if="modelValue == 'Message'">
            <div class="row justify-content-center align-items-center mt-5">
                <div class="col-md-5 d-flex flex-column justify-content-center">
                    <h3>New Message:</h3>
                    <div class="row my-4">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="provider" class="form-label">Variable*</label>
                                <input type="text" class="p-2 form-control" id="provider" placeholder="Enter provider name" v-model="variable" required />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-12">
                        <label for="provider" class="form-label">Message*</label>
                        <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="message" style="height: 100px" v-model="message" required></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="form-group">
                                    <label for="language" class="form-label">Language*</label>
                                    <multiselect 
                                        v-model="selectedLanguage" 
                                        :options="languageOptions" 
                                        :searchable="false" 
                                        :allow-empty="false"
                                        placeholder="Select a language">
                                        <template v-slot:singleLabel="{ option }">{{ option }}</template>
                                    </multiselect>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                        <button class="btn btn-primary" type="button" v-on:click="dynamiclyCreateTableRow(modelValue)">Create Message</button>
                        <button class="btn btn-secondary" type="button" v-on:click="cancelCreateScreen()">Cancel</button>
                    </div>
                </div>
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
                product_name: null,
                productImageUrl: '',
                productImageFile: null,
                infobarImageUrl: '',
                infobarImageFile: null,
                roast_type: null,
                origin: null,

                //PRODUCT VARIANTS
                product_description: null,
                product_data: null,
                product_information: null,

                //ROLES
                user_role_id: null,
                roleOptions: [],

                //API KEY
                provider: null,
                public_key: null,
                secret_key: null, 

                //MESSAGES
                selectedLanguage: null,
                languageOptions: ['EN', 'NL'],
                variable: null,
                message: null,
            }
        },

        methods: {
            onFileChange(event, typeFile, typeUrl) {
                const file = event.target.files[0];

                if (file) {
                    this[typeFile] = file; // Store the file in the productImageFile variable
                    this[typeUrl] = URL.createObjectURL(file); // Generate a temporary URL for preview
                }
            },

            productImageFullscreen(typeUrl) {
                window.open(typeUrl, "_blank");
            },

            removeImage(typeFile, typeUrl) {
                this[typeFile] = null;
                this[typeUrl] = '';
            },

            //cancle create screen, go back to database tabs
            cancelCreateScreen() {
                this.$emit('cancel'); // Emit a cancel event
            },

            // Helper function to get data for specific controllers
            getDataByController(controller) {
                switch (controller) {
                    case 'User':
                        return {
                            first_name: this.first_name,
                            last_name: this.last_name,
                            email: this.email,
                            password: this.password,
                            password_confirm: this.password_confirm,
                            user_role_id: this.user_role_id?.id,
                            city: this.city || null,
                            zipcode: this.zipcode || null,
                            phone_number: this.phone_number || null,
                            house_number: this.house_number || null,
                            street_name: this.street_name || null,
                        };
                    case 'Product':
                        return {
                            name: this.product_name,
                            image_url: this.productImageFile?.name,
                            infobar_image_url: this.infobarImageFile?.name,
                            roast_type: this.roast_type,
                            origin: this.origin,
                            description: this.product_description,
                            data: this.product_data,
                            information: this.product_information,
                            language: this.selectedLanguage,
                        };
                    case 'Role':
                        return { name: this.role_name };
                    case 'ApiKey':
                        return {
                            provider: this.provider,
                            secret_key: this.secret_key,
                            public_key: this.public_key,
                        };
                    case 'Message':
                        return {
                            name: this.variable,
                            language: this.selectedLanguage,
                            message: this.message,
                        };
                    default:
                        return null;
                }
            },

            //dynamicly create table row
            async dynamiclyCreateTableRow(controller) {
                //create data array
                let data = this.getDataByController(controller);

                // Validation for required fields
                if (!data || Object.values(data).some(value => value === null || value === undefined || value === '')) {
                    Swal.fire({
                        title: 'Warning!',
                        text: 'Make sure to fill in every required field :)',
                        icon: 'warning',
                    });
                    return;
                }

                // Handle special cases (e.g., Product with images)
                if (controller === 'Product') {
                    try {
                        const formData = new FormData();
                        formData.append('productImage', this.productImageFile);
                        formData.append('infobarImage', this.infobarImageFile);

                        const resWebshop = await this.reqWebshop('POST', '/SaveImage/saveProductImage', formData);
                        if (!resWebshop.status) throw new Error('Failed to save images in the webshop backend');

                        const res = await this.req('POST', '/SaveImage/saveProductImage', formData);
                        if (!res.status) throw new Error('Failed to save images in the main backend');
                    } catch (error) {
                        Swal.fire({
                            title: 'Error!',
                            text: error.message,
                            icon: 'error',
                        });
                        return;
                    }
                }

                // Save the main data
                try {
                    const res = await this.req('POST', `/${controller}/create${controller}`, data);
                    if (res.status) {
                        this.cancelCreateScreen();
                        this.$emit('row-created', controller);

                        Swal.fire({
                            title: 'Success!',
                            text: res.message,
                            icon: 'success',
                        });
                    } else {
                        throw new Error(res.message || 'Unknown error occurred');
                    }
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error.message,
                        icon: 'error',
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
<style scoped>
    .infobar-img {
        max-height: 15vh;
        object-fit: cover;
    }
    .scrollable {
        overflow-y: auto;
    }
</style>