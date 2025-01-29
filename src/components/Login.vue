<template>
    <div class="d-flex flex-column vh-90">
        <div class="container flex-grow-1 d-flex justify-content-center align-items-center">
            <div class="row justify-content-center w-100">
                <div class="col-md-5">
                    <div class="text-beige">
                        <div class="text-center m-4">
                            <p class="fs-48 mb-5">{{ $t('login') }}</p>
                        </div>
                        <form v-on:submit.prevent="handleLogin" method="post">
                            <div class="d-grid gap-3">
                                <div class="form-group">
                                    <input :placeholder="$t('email_text')" type="email" class="authentication_input_border p-3 form-control" id="email" v-model="email" required/>
                                </div>
                                <div class="form-group">
                                    <input :placeholder="$t('password')" type="password" class="authentication_input_border p-3 form-control" id="password" v-model="password" required/>
                                </div>
                                <button class="btn btn-primary p-3" type="submit">{{ $t('login') }}</button>
                                <div class="devider"></div>
                                <div class="text-center">{{ $t('forgot_password') }} <RouterLink to="/page/forgot_password" class="text-beige">{{ $t('click_here') }}</RouterLink></div>
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
                password: '',
            }
        },

        methods: {
            handleLogin() {
                //set payload
                const data = {
                    email: this.email,
                    password: this.password,
                }

                //login req
                this.req('POST', '/user/login', data).then((res) => {
                    //set the storage item to the status ( not logged in => false + vice versa)
                    localStorage.setItem('currentUser', res.status);

                    //handle true or false
                    if (res.status) {
                        localStorage.setItem('authentication', res.status); // login succesfull -> authenticated = true
                        this.$router.push('/page/dashboard');
                        //swal notification -> for true
                        Swal.fire({
                            title: 'Success!',
                            text: 'You have successfully logged in.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                    } else {
                        Swal.fire({
                            title: 'error!',
                            text: res.message,
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    }
                })
            },
        }
    }
</script>

