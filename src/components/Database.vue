<template>
<div class="d-flex vh-100 bg-light">
        <!-- Taskbar Section -->
        <Taskbar />
        <!-- Main Content Section -->
        <div v-if="showDatabase" class="table-container p-5 d-flex flex-column gap-5">
            <div class="d-flex justify-content-center">
                <div class="col-md-12">
                    <nav>
                        <div class="nav nav-tabs d-flex column-gap-4" id="nav-tab" role="tablist">
                            <button class="nav-link active fs-5" id="nav-users-tab" data-bs-toggle="tab" data-bs-target="#nav-users" type="button" role="tab" aria-controls="nav-users" aria-selected="false">Users</button>
                            <button class="nav-link fs-5" id="nav-products-tab" data-bs-toggle="tab" data-bs-target="#nav-products" role="tab" aria-controls="nav-products" aria-selected="true">Products</button>
                            <button class="nav-link fs-5" id="nav-product-variants-tab" data-bs-toggle="tab" data-bs-target="#nav-product-variants" type="button" role="tab" aria-controls="nav-product-variants" aria-selected="false">Product Variants</button>
                            <button class="nav-link fs-5" id="nav-roles-tab" data-bs-toggle="tab" data-bs-target="#nav-roles" type="button" role="tab" aria-controls="nav-roles" aria-selected="false">Roles</button>
                            <button class="nav-link fs-5" id="nav-api-keys-tab" data-bs-toggle="tab" data-bs-target="#nav-api-keys" type="button" role="tab" aria-controls="nav-api-keys" aria-selected="false">Api Keys</button>
                            <button class="nav-link fs-5" id="nav-messages-tab" data-bs-toggle="tab" data-bs-target="#nav-messages" type="button" role="tab" aria-controls="nav-messages" aria-selected="false">Messages</button>
                            <button class="nav-link fs-5" id="nav-carts-tab" data-bs-toggle="tab" data-bs-target="#nav-carts" type="button" role="tab" aria-controls="nav-carts" aria-selected="false">Carts</button>
                        </div>
                    </nav>

                    <div class="tab-content" id="nav-tabContent">
                        <!-- Users Table -->
                        <div class="tab-pane fade show active" id="nav-users" role="tabpanel" aria-labelledby="nav-users-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="dynamicCrudAction('C', users[0].controller, null, null)">Create user</button>
                            
                            <div class="d-flex gap-3 align-items-center">
                                <div><SearchBar :data="'user'" @search-result="handleSearchResult" @remove-search="removeSearchParam" /></div>
                                <svg v-on:click="openHelpModal(users[0].controller)" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-question-circle icon" style="margin-bottom: 17px;" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                                </svg>
                            </div>
                            <div class="table-responsive">
                                <table class="w-100 table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th v-for="title in users_header">
                                                {{ title }}
                                            </th>
                                            <!-- 3 empty th for delete, update and read -->
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="user in users">
                                            <td>{{user.id}}</td>
                                            <td>{{user.user_role ? user.user_role : user.user_role_id + ' - ' + user.role_name}}</td>
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
                                            <td class="crud-icon">
                                                <svg class="icon" data-bs-toggle="tooltip" title="delete.api.key" v-on:click="dynamicCrudAction('D', user.controller, null, user.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                            <td class="crud-icon">
                                                <svg class="icon" data-bs-toggle="tooltip" title="update.api.key" v-on:click="dynamicCrudAction('U', user.controller, user, null)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                            </td>
                                            <td class="crud-icon" style="border-right: 1px solid lightgray;">
                                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Products Table -->
                        <div class="tab-pane fade" id="nav-products" role="tabpanel" aria-labelledby="nav-products-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="dynamicCrudAction('C', products[0].controller, null, null)">Create product</button>
                            <div class="d-flex gap-3 align-items-center">
                                <SearchBar :data="'product'" @search-result="handleSearchResult" @remove-search="removeSearchParam" />
                                <svg v-on:click="openHelpModal(products[0].controller)" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-question-circle icon" style="margin-bottom: 17px;" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                                </svg>
                            </div>
                            <div class="table-responsive">
                                <table class="w-100 table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th v-for="title in products_header">
                                                {{ title }}
                                            </th>
                                            <!-- 3 empty th for delete, update and read -->
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="product in products">
                                            <td>{{product.id}}</td>
                                            <td>{{product.name}}</td>
                                            <td>
                                                <img class="product_image" :src="baseUrl + product.image_url" alt="Coffee Image" style="cursor:pointer;" v-on:click="imageToFullscreen(product.image_url) "/>
                                            </td>
                                            <td>
                                                <img class="product_image" :src="baseUrl + product.infobar_image_url" alt="Coffee Image" style="cursor:pointer;" v-on:click="imageToFullscreen(product.infobar_image_url)" />
                                            </td>
                                            <td>{{product.roast_type}}</td>
                                            <td>{{product.origin}}</td>
                                            <td >
                                                <div class="scroll" v-html="$t(product.description)"></div>
                                            </td>
                                            <td >
                                                <div class="scroll" v-html="$t(product.data)"></div>
                                            </td>
                                            <td >
                                                <div class="scroll" v-html="$t(product.information)"></div>
                                            </td>
                                            <td>{{product.reviews}}</td>
                                            <td class="crud-icon">
                                                <svg class="icon" v-on:click="dynamicCrudAction('D', product.controller, null, product.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                            <td class="crud-icon">
                                                <svg class="icon" v-on:click="dynamicCrudAction('U', product.controller, product, null)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                            </td>
                                            <td class="crud-icon" style="border-right: 1px solid lightgray;">
                                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Product Variants Table -->
                        <div class="tab-pane fade" id="nav-product-variants" role="tabpanel" aria-labelledby="nav-product-variants-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="dynamicCrudAction('C', productvariants[0].controller, null, null)">Create product variant</button>
                            <div class="d-flex gap-3 align-items-center">
                                <SearchBar :data="'productvariant'" @search-result="handleSearchResult" @remove-search="removeSearchParam" />
                                <svg v-on:click="openHelpModal(productvariants[0].controller)" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-question-circle icon" style="margin-bottom: 17px;" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                                </svg>
                            </div>
                            <div class="table-responsive">
                                <table class="w-100 table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th v-for="title in productvariants_header">
                                                {{ title }}
                                            </th>
                                            <!-- 3 empty th for delete, update and read -->
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="productvariants in productvariants">
                                            <td>{{productvariants.id}}</td>
                                            <td>{{productvariants.product_id}} - {{productvariants.product_name}}</td>
                                            <td>{{productvariants.weight}} gram</td>
                                            <td>€{{productvariants.price}},-</td>
                                            <td class="crud-icon">
                                                 <svg class="icon" v-on:click="dynamicCrudAction('D', productvariants.controller, null, productvariants.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                            <td class="crud-icon">
                                                <svg class="icon" v-on:click="dynamicCrudAction('U', productvariants.controller, productvariants, null)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                            </td>
                                            <td class="crud-icon" style="xborder-right: 1px solid lightgray;">
                                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Roles Table -->
                        <div class="tab-pane fade" id="nav-roles" role="tabpanel" aria-labelledby="nav-roles-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="dynamicCrudAction('C', roles[0].controller, null, null)">Create role</button>
                            <div class="d-flex gap-3 align-items-center">
                                <SearchBar :data="'role'" @search-result="handleSearchResult" @remove-search="removeSearchParam" />
                                <svg v-on:click="openHelpModal(roles[0].controller)" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-question-circle icon" style="margin-bottom: 17px;" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                                </svg>
                            </div>
                            <div class="table-responsive">
                                <table class="w-100 table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th v-for="title in roles_header">
                                                {{ title }}
                                            </th>
                                            <!-- 3 empty th for delete, update and read -->
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="role in roles">
                                            <td>{{role.id}}</td>
                                            <td>{{role.name}}</td>
                                            <td class="crud-icon">
                                                <svg class="icon" v-on:click="dynamicCrudAction('D', role.controller, null, role.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                            <td class="crud-icon">
                                               <svg class="icon" v-on:click="dynamicCrudAction('U', role.controller, role, null)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                            </td>
                                            <td class="crud-icon" style="border-right: 1px solid lightgray;">
                                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Api Keys Table -->
                        <div class="tab-pane fade" id="nav-api-keys" role="tabpanel" aria-labelledby="nav-api-keys-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="dynamicCrudAction('C', apikeys[0].controller, null, null)">Create api key</button>
                            <div class="d-flex gap-3 align-items-center">
                                <SearchBar :data="'apikey'" @search-result="handleSearchResult" @remove-search="removeSearchParam" />
                                <svg v-on:click="openHelpModal(apikeys[0].controller)" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-question-circle icon" style="margin-bottom: 17px;" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                                </svg>
                            </div>
                            <div class="table-responsive">
                                <table class="w-100 table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th v-for="title in apikeys_header">
                                                {{ title }}
                                            </th>
                                            <!-- 3 empty th for delete, update and read -->
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="apikey in apikeys">
                                            <td>{{apikey.id}}</td>
                                            <td>{{apikey.provider}}</td>
                                            <td>{{apikey.public_key}}</td>
                                            <td style="padding-right: 20px;">{{apikey.secret_key}}</td>
                                            <td class="crud-icon">
                                                <svg class="icon" v-on:click="dynamicCrudAction('D', apikey.controller, null, apikey.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                            <td class="crud-icon">
                                                <svg class="icon" v-on:click="dynamicCrudAction('U', apikey.controller, apikey, null)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                            </td>
                                            <td class="crud-icon" style="border-right: 1px solid lightgray;">
                                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Message Table -->
                        <div class="tab-pane fade" id="nav-messages" role="tabpanel" aria-labelledby="nav-messages-tab">
                            <button type="button" class="btn btn-primary my-3" v-on:click="dynamicCrudAction('C', messages[0].controller, null, null)">Create messages</button>
                            <div class="d-flex gap-3 align-items-center">
                                <SearchBar :data="'message'" @search-result="handleSearchResult" @remove-search="removeSearchParam"/>
                                <svg v-on:click="openHelpModal(messages[0].controller)" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-question-circle icon" style="margin-bottom: 17px;" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                                </svg>
                            </div>
                            <div class="table-responsive">
                                <table class="w-100 table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th v-for="title in messages_header">
                                                {{ title }}
                                            </th>
                                            <!-- 3 empty th for delete, update and read -->
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       <tr v-for="message in messages">
                                            <td>{{message.id}}</td>
                                            <td>{{message.language}}</td>
                                            <td>{{message.name}}</td>
                                            <td>{{message.message}}</td>
                                            <td class="crud-icon">
                                                <svg class="icon" v-on:click="dynamicCrudAction('D', message.controller, null, message.id)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                            <td class="crud-icon">
                                                <svg class="icon" v-on:click="dynamicCrudAction('U', message.controller, message, null)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                            </td>
                                            <td class="crud-icon" style="border-right: 1px solid lightgray;">
                                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
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
                                            <!-- 3 empty th for delete, update and read -->
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="cart in carts">
                                            <td>{{cart.id}}</td>
                                            <td>{{cart.cart_user}}</td>
                                            <td>{{cart.cart_product}}</td>
                                            <td>{{cart.variant_id}}</td>
                                            <td>{{cart.quantity}}</td>
                                            <td class="crud-icon">
                                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </td>
                                            <td class="crud-icon">
                                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                            </td>
                                            <td class="crud-icon" style="border-right: 1px solid lightgray;">
                                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- Help button modal -->
                    <div id="helpModal" class="modal fade" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Documentation - {{helpModalTitle}}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body" v-html="helpModalSubtitle">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <CrudHandler v-if="showPage" v-model="showPage" :updateValues="updateValues" @cancel="handleCancel" @row-created="handleRowCreated"/>
    </div>
</template>
<script>
    import Taskbar from './Taskbar.vue';
    import CrudHandler from './CrudHandler.vue';
    import SearchBar from './SearchBar.vue';
    import Swal from 'sweetalert2';

    import { Modal } from 'bootstrap';
    
    export default {
        components: {
            Taskbar,
            CrudHandler,
            SearchBar
        },

        data() {
            return {
                helpModalTitle: null,
                helpModalSubtitle: null, 
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
                apikeys_header: [],

                //cart data
                carts: [],
                carts_header: [],

                //message data
                messages: [],
                messages_header: [],

                //controllers
                controllers: [
                    'User',
                    'Role',
                    'ProductVariant',
                    'Product',
                    'Cart',
                    'ApiKey',
                    'Message'
                ],

                //when user clicks on 'update' -> send that data through and display
                updateValues: null,
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
            dynamicCrudAction(action, controller, updateData, id) {
                const data = {
                    id: id
                }
                if (action == 'C') { //create
                    this.showPage = controller; //show the correct page for creating a table row
                    this.showDatabase = false; //hide the datbase component
                } else if (action == 'U') { //update
                    this.updateValues = updateData; //set data equal to updateValues
                    this.showPage = controller; //show the correct page for creating a table row
                    this.showDatabase = false; //hide the datbase component

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
                                    this.dynamiclyGetTable(controller); //reload users adter delete
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
            },
            
            handleRowCreated(controller) {
                // Call dynamiclyGetTable to reload the data
                this.dynamiclyGetTable(controller);
            },

            imageToFullscreen(imageName) {
                if (this.baseUrl) {
                    window.open(this.baseUrl + imageName, "_blank");
                }
            },

            handleSearchResult(resultData) {
                //set new data by search
                this[resultData.controller.toLowerCase() + 's'] = resultData.data.search_param;
            },

            removeSearchParam(resultData) {
                this.dynamiclyGetTable(resultData);
            },

            openHelpModal(controller) {
                //create help modal data
                switch (controller) {
                    case 'User':
                        this.helpModalTitle = 'User Table';
                        this.helpModalSubtitle = `
                            <section>
                                <p>This section allows you to create a new user or edit/delete an existing user.<br />When you create a new user, these fields:</p>
                                <ul>
                                    <li><strong>City</strong></li>
                                    <li><strong>Zip Code</strong></li>
                                    <li><strong>Street Name</strong></li>
                                    <li><strong>House Number</strong></li>
                                    <li><strong>Phone Number</strong></li>
                                </ul>
                                <p>are optional, They do not have to be filled in to create a user.<br />Lastly the search-bar allows you to search for a specific user.</p>
                            </section>
                        `;
                        break;

                    case 'Product':
                        this.helpModalTitle = 'Product Table';
                        this.helpModalSubtitle = 'product test description';
                        break;
                        
                    case 'ProductVariant':
                        this.helpModalTitle = 'ProductVariant Table';
                        this.helpModalSubtitle = 'productvariant test description';
                        break;

                    case 'Role':
                        this.helpModalTitle = 'Role Table';
                        this.helpModalSubtitle = 'role test description';
                        break;
                    
                    case 'ApiKey':
                        this.helpModalTitle = 'ApiKey Table';
                        this.helpModalSubtitle = 'apikey test description';
                        break;

                    case 'Message':
                        this.helpModalTitle = 'Message Table';
                        this.helpModalSubtitle = 'message test description';
                        break;

                    default:
                        throw new Error(`Controller "${controller}" is niet herkend.`);
                }

                //define modal
                let helpModal = new Modal(document.getElementById('helpModal'));

                //display modal
                helpModal.show();
            }
        },

        //loop through controllers and get its data table
        mounted() {
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
        max-height: 125px;
        max-width: auto;
    }

    td {
        min-width: 180px;
    }
    
    .scroll {
        max-height: 125px; /* Limit the height */
        overflow-y: auto; /* Enable vertical scrolling */
        overflow-x: hidden; /* Prevent horizontal scrolling */
        scrollbar-width: thin; /* For Firefox */
        scrollbar-color: #888 #f1f1f1; /* Scrollbar thumb and track color */
    }

    .crud-icon {
        text-align: center;
        min-width: 42px;
        max-width: 42px;
        border-left: 1px solid lightgray;
    }

</style>