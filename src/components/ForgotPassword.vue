<template>
    <div class="d-flex flex-column vh-90">
        <div class="container flex-grow-1 d-flex justify-content-center align-items-center">
            <div class="row justify-content-center w-100">
                <div class="col-md-5">
                    <div class="text-beige">
                        <div class="text-center m-4">
                            <h1 class="mb-5">{{ $t('forgot_password') }}</h1>
                        </div>
                        <div class="text-danger text-center postition-static">{{ $t(errorMessage) }}</div>
                        <form v-on:submit.prevent="handleResetPassword" method="post">
                            <div class="d-grid gap-3">
                                <div class="form-group">
                                    <input :placeholder="$t('email_text')" type="email" class="authentication_input_border p-3 form-control" id="email" v-model="email" required/>
                                </div>
                                <button class="btn btn-primary p-3" type="submit" :disabled="isLoading">
                                    {{ isLoading ? 'Loading...' : $t('submit') }}
                                </button>
                                <div class="devider"></div>
                                <RouterLink class="btn btn-primary p-3" to="/page/login">{{ $t('login') }}</RouterLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Swal from 'sweetalert2';

    export default {
        data() {
            return {
                email: '',
                errorMessage: '',
                isLoading: false,
            }
        },
        
        methods: {
            handleResetPassword() {
                this.isLoading = true;

                //set payload
                const data = {
                    email: this.email,
                }

                //forgot password req
                this.req('POST', '/user/forgotpassword', data).then((res) => {
                    if (res.status) {
                        this.isLoading = false;
                        this.$router.push('/page/login');
                        Swal.fire({
                            title: 'Success!',
                            text: this.$t(res.message),
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                    }
                })
            }  
        }
    }
</script>
