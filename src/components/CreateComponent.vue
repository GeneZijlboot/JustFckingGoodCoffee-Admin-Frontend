<template>
    <div class="container-fluid px-5">
        <!-- Create User Component -->  
        <div v-if="modelValue == 'User'">
            <div class="d-flex justify-content-center mt-5">
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
                <div class="row">
                    <!-- product details -->
                    <div class="col-md-6 p-5">
                        <div class="row">
                            <div class="col-md-12">
                                <h3 class="mt-3">New Product:</h3>
                                <div class="row my-4">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="product_name" class="form-label">product name*</label>
                                            <input type="text" class="p-2 form-control" id="product_name" placeholder="Enter product name" v-model="product_name" required />
                                        </div>
                                    </div>
                                </div>

                                <!-- Product Image -->
                                <div v-if="productImageUrl"  class="row mb-4">
                                    <div class="col-md-12">
                                        <!-- Display image preview -->
                                        <div class="shop_image_container">
                                            <label>Product Image:</label>
                                            <img class="shop_image card-img-top mt-2" style="cursor: pointer;" @click="productImageFullscreen(productImageUrl)" :src="productImageUrl" alt="Product Image" />
                                        </div>
                                        <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                                            <button v-if="productImageUrl" class="btn btn-primary" @click="productImageFullscreen(productImageUrl)">Image Fullscreen</button>
                                            <button v-if="productImageUrl" class="btn btn-danger" @click="removeImage('productImageFile', 'productImageUrl')">Remove product image</button>
                                        </div>
                                    </div>
                                </div>

                                <!-- hidden submit button outside of col -> so it could be hidden -->
                                <form @submit.prevent>
                                    <input type="file" accept="image/*" id="product-file-input" style="display: none;" @change="onFileChange($event, 'productImageFile', 'productImageUrl', 'productImageName')" />
                                </form>

                                <!-- Infobar Image -->
                                <div v-if="infobarImageUrl" class="row mb-4">
                                    <div class="col-md-12">
                                        <!-- Display image preview -->
                                        <div class="shop_image_container">
                                            <label>Infobar Image:</label>
                                            <img class="img-fluid w-100 infobar-img mt-2" style="cursor: pointer;" @click="productImageFullscreen(infobarImageUrl)" :src="infobarImageUrl" alt="Infobar Image" />
                                        </div>
                                        <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                                            <button v-if="infobarImageUrl" class="btn btn-primary" @click="productImageFullscreen(infobarImageUrl)">Image Fullscreen</button>
                                            <button v-if="infobarImageUrl" class="btn btn-danger" @click="removeImage('infobarImageFile', 'infobarImageUrl')">Remove infobar image</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- hidden submit button outside of col -> so it could be hidden -->
                                <form @submit.prevent>
                                    <input type="file" accept="image/*" id="infobar-file-input" style="display: none;" @change="onFileChange($event, 'infobarImageFile', 'infobarImageUrl', 'infobarImageName')" />
                                </form>

                                <!-- handle buttons for adding the images -->
                                <div v-if="!productImageUrl && infobarImageUrl" class="d-flex justify-content-end align-items-end">
                                    <label for="product-file-input" class="btn btn-primary">Add product image</label>
                                </div>
                                <div v-if="!infobarImageUrl && productImageUrl" class="d-flex justify-content-end align-items-end">
                                    <label for="infobar-file-input" class="btn btn-primary">Add infobar image</label>
                                </div>
                                <div v-if="!infobarImageUrl && !productImageUrl" class="d-flex align-items-end gap-2">
                                    <label for="product-file-input" class="btn btn-primary">Add product image</label>
                                    <label for="infobar-file-input" class="btn btn-primary">Add infobar image</label>
                                </div>

                                <div class="row my-4">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="roast_type" class="form-label">Roast type*</label>
                                            <input type="text" class="p-2 form-control" id="roast_type" placeholder="Enter roast type" v-model="roast_type" required />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="origin" class="form-label">Origin*</label>
                                            <input type="text" class="p-2 form-control" id="origin" placeholder="Enter origin" v-model="origin" required />
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- devider -->
                                <div class="devider-translations"></div>

                                <!-- producuct type(s) -->
                                <h3>Product type:</h3>

                                <div class="d-grid gap-2 d-md-block my-4">
                                    <button class="btn btn-primary" type="button" @click="addProductTypeFields">+ Create a product type</button>
                                </div>

                                <div class="row mb-4">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="product_name" class="form-label">product name*</label>
                                            <input type="text" class="p-2 form-control" id="product_name" placeholder="Enter product name" v-model="product_name" disabled />
                                        </div>
                                    </div>
                                </div>

                                <div class="row my-4" v-for="index in productTypeIncrementField" :key="'price_weight' + index">
                                    <div class="col-md-11">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label :for="'weight_' + index" class="form-label">Weight*</label>
                                                    <multiselect
                                                        v-model="product_types[index - 1].weight"
                                                        :options="filteredWeightOptions(index)"
                                                        :searchable="false"
                                                        :allow-empty="false"
                                                        label="name"
                                                        track-by="value"
                                                        placeholder="Select a weight">
                                                        <template v-slot:singleLabel="{ option }">{{ option.name }}</template>
                                                    </multiselect>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label :for="'product_price_' + index" class="form-label">Product Price*</label>
                                                    <div class="d-flex gap-2">
                                                        <span class="fs-5 d-flex align-items-center">$</span>
                                                        <input
                                                            type="text"
                                                            class="p-2 form-control"
                                                            :id="'product_price_' + index"
                                                            placeholder="Enter price"
                                                            v-model="product_types[index - 1].price"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-1 d-flex align-items-end mb-1">
                                        <button type="button" class="btn btn-danger" @click="removeProductTypeField(index)">
                                            &times;
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- product translations -->
                    <div class="col-md-6 p-5">
                        <div class="row">
                            <div class="col-md-12">
                                <!-- translations -->
                                <h3 class="mt-3">Translations:</h3>
                                <!-- Dynamic translation rows -->
                                <div v-for="(translation, index) in translations" :key="'translation_' + index">
                                    <h5 v-if="translation.selectedLanguage">
                                        {{ index === 0 ? 'First' : 'Second' }} translation - 
                                        {{ translation.selectedLanguage === 'NL' ? 'Nederlands' : 'English' }}
                                    </h5>
                                
                                    <!-- Language Selection -->
                                    <div class="row my-4">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label :for="'language_' + index" class="form-label">Language*</label>
                                                <multiselect 
                                                    v-model="translation.selectedLanguage" 
                                                    :options="languageOptions" 
                                                    :searchable="false" 
                                                    :allow-empty="false"
                                                    :input="syncLanguages(index)"
                                                    placeholder="Select a language">
                                                    <template v-slot:singleLabel="{ option }">{{ option }}</template>
                                                </multiselect>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Description -->
                                    <div class="row mb-4">
                                        <div class="col-md-12">
                                            <label :for="'description_' + index" class="form-label">Description*</label>
                                            <div class="form-floating">
                                                <textarea 
                                                    class="form-control" 
                                                    :id="'description_' + index" 
                                                    placeholder="Leave a comment here" 
                                                    style="height: 100px" 
                                                    v-model="translation.description" 
                                                    required>
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Data -->
                                    <div class="row mb-4">
                                        <div class="col-md-12">
                                            <label :for="'data_' + index" class="form-label">Data*</label>
                                            <div class="form-floating">
                                                <textarea 
                                                    class="form-control" 
                                                    :id="'data_' + index" 
                                                    placeholder="Leave a comment here" 
                                                    style="height: 100px" 
                                                    v-model="translation.data" 
                                                    required>
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Information -->
                                    <div class="row mb-4">
                                        <div class="col-md-12">
                                            <label :for="'information_' + index" class="form-label">Information*</label>
                                            <div class="form-floating">
                                                <textarea 
                                                    class="form-control" 
                                                    :id="'information_' + index" 
                                                    placeholder="Leave a comment here" 
                                                    style="height: 100px" 
                                                    v-model="translation.information" 
                                                    required>
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="devider-translations"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-end align-items-center mt-5">
                        <div class="col-md-5 d-flex flex-column justify-content-center">
                            <!-- Action Buttons -->
                            <div class="d-flex justify-content-end align-items-end gap-2 my-3">
                                <button class="btn btn-primary" type="button" @click="dynamiclyCreateTableRow(modelValue)">Create Product</button>
                                <button class="btn btn-secondary" type="button" @click="cancelCreateScreen()">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Create ProductVariant Component -->
        <div v-if="modelValue == 'ProductVariant'">
            <div class="row justify-content-center align-items-center mt-5">
                <div class="col-md-5 d-flex flex-column justify-content-center">

                    <!-- producuct type(s) -->
                    <h3>ProductVariant create</h3>

                    <!-- add another product type -->
                    <div class="d-grid gap-2 d-md-block my-4">
                        <button class="btn btn-primary" type="button" @click="addProductTypeFields">+ Create a product type</button>
                    </div>

                    <div v-if="productVariantOptions" class="row my-4">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="product_variant" class="form-label">Product name*</label>
                                <multiselect
                                    v-model="selectedProductVariant"
                                    :options="productVariantOptions"
                                    :searchable="false"
                                    :allow-empty="false"
                                    label="name"
                                    track-by="id"
                                    placeholder="Select a product">
                                    <template v-slot:singleLabel="{ option }">{{ option.name }}</template>
                                </multiselect>
                            </div>
                        </div>
                    </div>

                    <div class="row my-4" v-for="index in productTypeIncrementField" :key="'price_weight' + index">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label :for="'weight_' + index" class="form-label">Weight*</label>
                                        <multiselect
                                            v-model="product_types[index - 1].weight"
                                            :options="filteredWeightOptions(index)"
                                            :searchable="false"
                                            :allow-empty="false"
                                            label="name"
                                            track-by="value"
                                            placeholder="Select a weight">
                                            <template v-slot:singleLabel="{ option }">{{ option.name }}</template>
                                        </multiselect>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label :for="'product_price_' + index" class="form-label">Product Price*</label>
                                        <div class="d-flex gap-2">
                                            <span class="fs-5 d-flex align-items-center">$</span>
                                            <input
                                                type="text"
                                                class="p-2 form-control"
                                                :id="'product_price_' + index"
                                                placeholder="Enter price"
                                                v-model="product_types[index - 1].price"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1 d-flex align-items-end mb-1">
                            <button type="button" class="btn btn-danger" @click="removeProductTypeField(index)">
                                &times;
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end align-items-end gap-2 mt-3">
                        <button class="btn btn-primary" type="button">Create Product Variant</button>
                        <button class="btn btn-secondary" type="button" v-on:click="cancelCreateScreen()">Cancel</button>
                    </div>
                </div>
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

        <!-- Create   Component -->
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
                productImageName: null,
                productImageUrl: null,
                productImageFile: null,
                infobarImageName: null,
                infobarImageUrl: null,
                infobarImageFile: null,
                roast_type: null,
                origin: null,
                
                //PRODUCTVARIANTS
                productTypeIncrementField: 1,
                weightOptions: [
                    {
                        name:  '250 gram',
                        value: 250,
                    },
                    {
                        name:  '500 gram',
                        value: 500,
                    },
                    {
                        name:  '1 kg',
                        value: 1000,
                    },
                ],
                product_types: [
                    {
                        weight: null,
                        price: null,
                    },
                    {
                        weight: null,
                        price: null,
                    },
                    {
                        weight: null,
                        price: null,
                    },
                ],

                productVariantOptions: [],
                selectedProductVariant: null,
                translations: [
                    { selectedLanguage: '', description: '', data: '', information: '' }, 
                    { selectedLanguage: '', description: '', data: '', information: '' }
                ],

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

                asyncFlow: null,
            }
        },

        methods: {
            //handle on file upload
            onFileChange(event, typeFile, typeUrl, typeName) {
                const file = event.target.files[0];
                if (file) {
                    this[typeFile] = file; //store the file in the productImageFile variable
                    this[typeUrl] = URL.createObjectURL(file); //generate a temporary URL for preview
                    this[typeName] = file.name; //set name
                }
            },

            //open product image in fullscreen
            productImageFullscreen(typeUrl) {
                window.open(typeUrl, "_blank");
            },

            //remove added image
            removeImage(typeFile, typeUrl) {
                this[typeFile] = null;
                this[typeUrl] = '';
            },

            //cancle create screen, go back to database tabs
            cancelCreateScreen() {
                this.$emit('cancel');
            },

            //create product type fields
            addProductTypeFields() {
                if (this.productTypeIncrementField < 3) {
                    this.productTypeIncrementField += 1;
                } else {
                    Swal.fire({
                        title: 'Warning!',
                        text: 'You.can.only.have.3.types',
                        icon: 'warning',
                    });
                }
            },

            //remove a product type field based on its index
            removeProductTypeField(index) {
                if (this.productTypeIncrementField == 1) {
                    Swal.fire({
                        title: 'Warning!',
                        text: 'you.need.at.least.one.type',
                        icon: 'warning',
                    });
                } else {
                    this.productTypeIncrementField -= 1; // Decrease the count
                }
            },

            //sync language -> so select the other when selecting one 
            syncLanguages(selectedIndex) {
                if(this.translations[selectedIndex].selectedLanguage ) {
                    if (selectedIndex == 0) {
                        if (this.translations[selectedIndex].selectedLanguage == 'EN') {
                            this.translations[1].selectedLanguage = 'NL';
                        } else {
                            this.translations[1].selectedLanguage = 'EN';
                        }
                    } else {
                        if (this.translations[selectedIndex].selectedLanguage == 'EN') {
                            this.translations[0].selectedLanguage = 'NL';
                        } else {
                            this.translations[0].selectedLanguage = 'EN';
                        }
                    }
                }
            },

            filteredWeightOptions(index) {
                let newWeightOptions = [...this.weightOptions];

                // Filter out the weights from newWeightOptions that are present in product_types, where product_types[index].weight is not null
                newWeightOptions = newWeightOptions.filter(option =>
                    !this.product_types.some(productType =>
                        productType.weight !== null && productType.weight.value === option.value
                    )
                );

                return newWeightOptions;
            },

            async dynamiclyCreateTableRow(controller) {
                //define empty data
                let data = {};

                //for when product is selected so that function runs asynchronisly!
                this.asyncFlow = true;

                //define data first
                switch (controller) {
                    case 'User':
                        //define data for User
                        data = {
                            //required fields:
                            first_name: this.first_name,
                            last_name: this.last_name,
                            email: this.email,
                            password: this.password,
                            password_confirm: this.password_confirm,
                            user_role_id: this.user_role_id.id, 

                            //optional fields
                            city: this.city || '',
                            zipcode: this.zipcode || '',
                            phone_number: this.phone_number || '',
                            house_number: this.house_number || '',
                            street_name: this.street_name || '',
                        };
                        this.asyncFlow = false;
                        break;

                    case 'Product':
                        //define data for Product
                        data = {
                            product_name: this.product_name,
                            product_image_name: this.productImageName,
                            infobar_image_name: this.infobarImageName,
                            roast_type: this.roast_type,
                            origin: this.origin,
                            product_types: JSON.stringify(this.product_types),
                            translations: JSON.stringify(this.translations)
                        };
                        
                        //handle image upload
                        try {
                            const formData = new FormData();
                            formData.append('productImageFile', this.productImageFile);
                            formData.append('infobarImageFile', this.infobarImageFile);

                            //first request
                            const resWebshop = await this.reqWebshop('POST', `/${controller}/saveImage`, formData);
                            if (!resWebshop.status) {
                                Swal.fire({
                                    title: 'Error!',
                                    text: 'failed.to.upload.image.to.webshop',
                                    icon: 'error',
                                });
                            } else {
                                //second request
                                const resAdmin = await this.req('POST', `/${controller}/saveImage`, formData);
                                if (resAdmin.status) {
                                    this.asyncFlow = false;
                                } else {
                                    Swal.fire({
                                        title: 'Error!',
                                        text: 'failed.to.upload.image.to.admin',
                                        icon: 'error',
                                    });

                                }
                            }
                        } catch (error) {
                            Swal.fire({
                                title: 'Error!',
                                text: error.message,
                                icon: 'error',
                            });
                        }
                        break;
                        
                    case 'ProductVariant':
                        //define data for ProductVariant
                        this.data = {

                        };
                        this.asyncFlow = false;
                        break;

                    case 'Role':
                        //define data for ApiKey
                        data = {
                            name: this.role_name,
                        };
                        this.asyncFlow = false;
                        break;
                    
                    case 'ApiKey':
                        //define data for ApiKey
                        data = {
                            provider: this.provider,
                            secret_key: this.secret_key,
                            public_key: this.public_key
                        }; 
                        this.asyncFlow = false;
                        break;

                    case 'Message':
                        //define data for Message
                        data = {
                            name: this.variable,
                            language: this.selectedLanguage,
                            message: this.message,
                        };
                        this.asyncFlow = false;
                        break;

                    default:
                        throw new Error(`Controller "${controller}" is niet herkend.`);
                }

                if (data) {
                    if (!this.asyncFlow) {
                        //post payload to its controller
                        this.req('POST', '/' + controller + '/create' + controller, data).then((res) => {
                            if (res.status) {
                                this.cancelCreateScreen();
                                this.$emit('row-created', controller); //get the table again when succesfully inserted new row

                            }

                            //fire swall for erro or succes
                            Swal.fire({
                                title: res.status ? 'Succes!' : 'Error!',
                                text: this.$t(res.message),
                                icon: res.status ? 'success' : 'error',
                            });
    
                        })
                    }
                } else {
                    Swal.fire({ //error creating payload data
                        title: 'Error!',
                        text: this.$t('error.creating.payload'),
                        icon: 'error',
                    });
                }
            },
            
            //getting role options 'now hardcodet to be posted into roleOptions -> rewrite this cuz also needed to get options for the product type weight'
            dynamiclyGetOptions(controller) {
                this.req('Get', '/' + controller + '/getOptions').then((res) => {
                    if (res.status) {
                        if (controller == 'Role') {
                            res.data.forEach(role => {
                                this.roleOptions.push(role);
                            });
                        }

                    }
                })
            },

            getProductVariants() {
                this.req('Get', '/Product/getOptions').then((res) => {
                    if (res.status) {
                        this.productVariantOptions = res.data;
                    }
                })
            }
        },

        mounted() {
            if (this.modelValue == 'User') { //get Role options to create a User
                this.dynamiclyGetOptions('Role');
            }

            if (this.modelValue == 'ProductVariant') {
                 this.getProductVariants();
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
    .devider-translations {
        width: 100%;
        height: 3px;
        border: gray solid 1px;
        background-color: gray;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>