<template>
    <div class="bg-white d-flex flex-column" style="height: 100vh;">
        <!-- Logo -->
        <div class="d-flex justify-content-center">
            <img class="logo" src="../assets/images/logo_images/logo_dark.png" alt="Logo" />
        </div>
        
        <!-- devider -->
        <div class="d-flex justify-content-center"><div class="devider"></div></div>

        <!-- Taskbar items -->
        <div class="flex-grow-1">
            <div v-for="(item, index) in taskbar.slice(0, -2)" :key="index" class="d-flex align-items-center column-gap-3 p-3 menu-item spacing" style="cursor: pointer;" v-on:click="changeRoute(item.route)">
                <span v-html="item.icon"></span>
                <span v-if="item.text" class="item_text">{{ item.text }}</span>
            </div>
        </div>

        <!-- Divider and last two items -->
        <div>
            <SwitchLanguageButton />
            <div class="d-flex justify-content-center"><div class="devider"></div></div>
            <div v-for="(item, index) in taskbar.slice(-2)" :key="taskbar.length + index" class="d-flex align-items-center column-gap-3 p-3 menu-item spacing" style="cursor: pointer;" v-on:click="changeRoute(item.route)">
                <span v-html="item.icon"></span>
                <span v-if="item.text" class="item_text">{{ item.text }}</span>
            </div>
        </div>
    </div>
</template>


<script>
    import SwitchLanguageButton from './SwitchLanguageButton.vue';

    export default {
        components: {
                SwitchLanguageButton
        },
        
        data() {
            return {
                taskbar: [
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="26" height="26" fill="black" class="bi bi-house-door" viewBox="0 0 16 16"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/></svg></div>',
                        text: 'Dashboard',
                        route: 'dashboard',
                    },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" class="bi bi-database" viewBox="0 0 16 16"><path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/></svg>',
                        text: 'Database',
                        route: 'database',
                    },
                    // {
                    //     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" class="bi bi-graph-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/></svg>',
                    //     text: 'Analytics',
                    //     route: 'analytics',
                    // },
                    // {
                    //     icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-40q-112 0-206-51T120-227v107H40v-240h240v80h-99q48 72 126.5 116T480-120q75 0 140.5-28.5t114-77q48.5-48.5 77-114T840-480h80q0 91-34.5 171T791-169q-60 60-140 94.5T480-40Zm-36-160v-52q-47-11-76.5-40.5T324-370l66-26q12 41 37.5 61.5T486-314q33 0 56.5-15.5T566-378q0-29-24.5-47T454-466q-59-21-86.5-50T340-592q0-41 28.5-74.5T446-710v-50h70v50q36 3 65.5 29t40.5 61l-64 26q-8-23-26-38.5T482-648q-35 0-53.5 15T410-592q0 26 23 41t83 35q72 26 96 61t24 77q0 29-10 51t-26.5 37.5Q583-274 561-264.5T514-250v50h-70ZM40-480q0-91 34.5-171T169-791q60-60 140-94.5T480-920q112 0 206 51t154 136v-107h80v240H680v-80h99q-48-72-126.5-116T480-840q-75 0-140.5 28.5t-114 77q-48.5 48.5-77 114T120-480H40Z"/></svg>',
                    //     text: 'Mollie',
                    //     route: 'mollie',
                    // },
                    // {
                    //     icon: '<svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="black"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z"/></svg>',
                    //     text: 'SendCloud',
                    //     route: 'sendcloud',
                    // },
                    //  {
                    //     icon: '<svg width="26" height="26" viewBox="0 0 210 150" fill="black" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M102.925 126.57C61.1448 123.302 47.5736 99.9869 43.7851 83.8588C43.7851 83.8588 51.9546 86.1068 62.6254 87.5941C62.6544 87.5983 65.5121 88.002 65.5701 87.2286C65.6805 85.7399 41.5145 78.5003 29.8051 58.0802C20.6674 42.1461 20.1107 26.8651 20.1107 26.8651C44.6276 31.6811 59.696 37.7139 136.829 35.7592C160.716 35.7592 171.373 40.7849 171.373 70.5693C171.373 91.3676 162.433 126.166 102.925 126.57ZM209.801 69.4574C209.801 65.5592 205.742 63.0591 200.722 61.4557L200.822 61.3508C200.822 61.3508 200.523 61.3268 200.046 61.2474C199.24 61.0052 198.412 60.7857 197.575 60.5859C196.446 60.1624 195.236 59.5137 194.328 58.515C193.28 57.3634 192.646 55.896 192.263 54.6424C189.08 33.0381 177.042 13.2725 136.829 13.2725H66.99C64.6255 13.1932 58.2072 12.8178 43.0007 11.1237C28.2528 9.48196 15.0572 4.75373 14.9357 4.70982L1.99011 0L0.382448 13.9906C0.187705 15.6904 -4.00686 55.1551 20.8484 75.1814L20.8277 75.4137C19.8733 86.009 23.8552 109.12 45.4495 127.817C92.2596 168.342 155.878 142.904 172.152 125.077C182.338 113.918 189.643 100.739 192.17 84.924C192.537 83.6081 193.19 81.9834 194.328 80.7326C194.823 80.1901 195.408 79.7552 196.019 79.3983C197.653 78.9705 199.281 78.4747 200.82 77.8982L200.822 77.8968C205.796 76.0313 209.801 73.3287 209.801 69.4574ZM148.589 49.2512C143.169 49.2512 139.521 52.672 139.521 58.9796C139.521 64.8595 143.169 68.1741 148.589 68.1741C153.906 68.1741 157.762 64.6456 157.762 58.8734C157.762 52.5658 154.53 49.2512 148.589 49.2512Z" fill="#081245"/></svg>',
                    //     text: 'MoneyBird',
                    //     route: 'moneybird',
                    // },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/></svg>',
                        text: 'Account',
                        route: 'account',
                    },
                    // {
                    //     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/></svg>',
                    //     text: 'Settings',
                    //     route: 'settings',
                    // },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" class="bi bi-box-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/><path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/></svg>',
                        text: 'Sign Out',
                        route: 'logout',
                    },
                ],
            }
        },
        methods: {
            changeRoute(route) {
                //currentUser to false = logged out
                if (route == 'logout') {
                    localStorage.setItem('currentUser', 'false');
                } else {

                }
                this.$router.push('/page/' + route);
            },
        },
    }
</script>

<style scoped>
    .menu-item:hover {
        background-color: lightblue;
        border-radius: 15px;
        transition: background-color 0.3s ease;
    }

    .devider {
        height: 2px;
        margin: 15px 0;
        background-color: black;
        width: 80%;
    }

    .logo {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .item_text {
        font-size: 20px;
    }

    .icon {
        width: 26px;
        height: 26px;
    }

    .spacing {
        margin: 24px;
    }

    @media only screen and (max-width: 1920px) {
        .logo {
            width: 65%;
            height: auto;
            object-fit: cover;
        }

        .item_text {
            font-size: 14px;
        }

        .spacing {
            margin: 0px;
            margin-left: 12px;
            margin-right: 12px;
        }
    }
</style>
