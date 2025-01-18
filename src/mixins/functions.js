export const functions = {
    methods: {
        ucfirst (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        req (method, uri, data, data_type, async) {
            return new Promise((resolve) => {
                //default method
                if (method === undefined) {
                    method = 'GET';
                }

                //data
                if (data === undefined) {
                    data = null;
                }

                //data type
                // if (data_type == undefined) {
                //     data_type = 'json'; // when its a form but undefined it gets fucked
                // }

                //async
                if (async == undefined) {
                    async = true;
                }

                var xhr = new XMLHttpRequest();

                switch (data_type && async) {
                    case 'json':
                        xhr.responseType = 'json';
                        break;
                }

                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        var response = {};
                        if (this.readyState == 4 && this.status == 200) {

                            //parse json
                            try {
                                response = xhr.response;
                                response = JSON.parse(response);
                                if (!(response.status !== undefined && response.data !== undefined)) {
                                    response = {
                                        status: false,
                                        data: response,
                                        message: 'Response malformed',
                                    };
                                }
                            } catch (e) {
                                response =  {
                                    status: false,
                                    data: [],
                                    message: (e.message !== undefined ? e.message : 'Error parsing JSON'),
                                };
                            }

                            resolve(response);
                        } else {
                            //build response
                            response = {
                                status: false,
                                data: [],
                                message: 'Request failed', 
                            };

                            resolve(response);
                        }
                    }
                }

                //do request
                let fullUri = import.meta.env.VITE_BASE_URL + uri
                if (uri.indexOf('http://') === 0 || uri.indexOf('https://') === 0) {
                    fullUri = uri;
                }
                xhr.open(method, fullUri, async);

                //keep session
                xhr.withCredentials = true;

                //if post 
                if (method == 'POST') {
                    if (data instanceof FormData) {
                        //xhr is already ok for request
                    } else if (data_type === 'json') {
                        //set content type
                        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                        if (typeof data !== 'string') {
                            data = JSON.stringify(data);
                        }
                    } else {
                        //set content type
                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

                        data = new URLSearchParams(data);
                    }
                }

                xhr.send(data);
            });
        },

        reqWebshop (method, uri, data, data_type, async) {
            return new Promise((resolve) => {
                //default method
                if (method === undefined) {
                    method = 'GET';
                }

                //data
                if (data === undefined) {
                    data = null;
                }

                //data type
                // if (data_type == undefined) {
                //     data_type = 'json'; // when its a form but undefined it gets fucked
                // }

                //async
                if (async == undefined) {
                    async = true;
                }

                var xhr = new XMLHttpRequest();

                switch (data_type && async) {
                    case 'json':
                        xhr.responseType = 'json';
                        break;
                }

                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        var response = {};
                        if (this.readyState == 4 && this.status == 200) {

                            //parse json
                            try {
                                response = xhr.response;
                                response = JSON.parse(response);
                                if (!(response.status !== undefined && response.data !== undefined)) {
                                    response = {
                                        status: false,
                                        data: response,
                                        message: 'Response malformed',
                                    };
                                }
                            } catch (e) {
                                response =  {
                                    status: false,
                                    data: [],
                                    message: (e.message !== undefined ? e.message : 'Error parsing JSON'),
                                };
                            }

                            resolve(response);
                        } else {
                            //build response
                            response = {
                                status: false,
                                data: [],
                                message: 'Request failed', 
                            };

                            resolve(response);
                        }
                    }
                }

                //do request
                let fullUri = import.meta.env.VITE_BASE_URL_WEBSHOP + uri
                if (uri.indexOf('http://') === 0 || uri.indexOf('https://') === 0) {
                    fullUri = uri;
                }
                xhr.open(method, fullUri, async);

                //keep session
                xhr.withCredentials = true;

                //if post 
                if (method == 'POST') {
                    if (data instanceof FormData) {
                        //xhr is already ok for request
                    } else if (data_type === 'json') {
                        //set content type
                        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                        if (typeof data !== 'string') {
                            data = JSON.stringify(data);
                        }
                    } else {
                        //set content type
                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

                        data = new URLSearchParams(data);
                    }
                }

                xhr.send(data);
            });
        }
    }
}