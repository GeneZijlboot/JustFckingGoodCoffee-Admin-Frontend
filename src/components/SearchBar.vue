<template>
    <div class="row">
        <div class="col-md-3">
            <div class="d-flex gap-3">
                <button v-if="SearchActive" type="button" class="btn btn-danger mb-3" @click="removeSearchData">
                    &times;
                </button>
                <div class="input-group mb-3">
                    <span v-on:click="Search" class="input-group-text click" id="searchbar-addon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </span>
                    <input type="text" class="form-control" placeholder="Search..." aria-label="searchbar" aria-describedby="searchbar-addon" v-model="search_param" @keyup.enter="Search">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Swal from 'sweetalert2';
    export default {
        props: {
            data: {
                type: Array,
                required: true,
            },
        },

        data() {
            return {
                search_param: null,
                controller: null, 
                SearchActive: false,
            }
        },

        methods: {
            //function to get data on search param
            Search() {
                //set payload 
                const payloadData = {
                    search_param: this.search_param,
                }

                //check if search query != empty, it doesnt make sensce to searhc on nothing, thats just getall
                if (this.search_param && this.search_param.trim() !== "") {
                    this.req('POST', '/' + this.controller + '/searchCrudTable', payloadData).then((res) => {
                        if (res.status) {
                            this.SearchActive = true;
                            this.$emit('search-result', { 
                                data: res.data,
                                controller: this.controller 
                            });
                            //nu heb je hier alle data in res.data, stuur deze terug en display het in 
                        } else {
                            Swal.fire({
                                title: 'Error!',
                                text: res.message,
                                icon: 'error',
                            });
                        }
                    })
                }
            },

            //remove search param and get all again for 'empty search param'
            removeSearchData() {
                if (this.SearchActive) {
                    this.$emit('remove-search', this.controller);
                    this.SearchActive = false;
                    this.search_param = null;
                }
            }
        },
        mounted() {
            if (this.data) {
                this.controller = this.data;
            }
        }
    }
</script>
<style scoped>
    .click {
        cursor: pointer;
    }
</style>