<template>
<div class="dropdown">
    <button :style="{ color: textColor }" class="btn dropdown-toggle d-flex align-items-center gap-2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        <img v-if="this.$i18n.locale === 'en' " src="../assets/images/translation_images/en.png" :alt="$t('english')" />
        <img v-else src="../assets/images/translation_images/nl.png" :alt="$t('dutch')" />
        <span>{{ $t(selectedLanguage) }}</span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
            <a v-on:click="setLocale('nl')" class="dropdown-item d-flex align-items-center gap-2" href="#">
                <img src="../assets/images/translation_images/nl.png" alt="Dutch" />
                <span>{{ $t('dutch') }}</span>
            </a>
        </li>
        <li>
            <a v-on:click="setLocale('en')" class="dropdown-item d-flex align-items-center gap-2" href="#">
                <img src="../assets/images/translation_images/en.png" alt="English" />
                <span>{{ $t('english') }}</span>
            </a>
        </li>
    </ul>
</div>

</template>
<script>
    export default {
        data() {
            return {
                selectedLanguage: '',
                textColor: undefined,
            }
        },

        mounted() {
            this.defineLanguage();
            this.setTextColor();
        },

        methods: {
            //change language
            setLocale(locale) {
                this.$i18n.locale = locale;
                this.defineLanguage();
            },

            //define language
            defineLanguage() {
                if (this.$i18n.locale === 'en') {
                    this.selectedLanguage = 'english';
                    localStorage.setItem('currentLanguage', 'en');
                } else if (this.$i18n.locale === 'nl') {
                    this.selectedLanguage = 'dutch';
                    localStorage.setItem('currentLanguage', 'nl');
                }
            },

            //change text color
            setTextColor() {
                const textColor = localStorage.getItem('textColor');
                this.textColor = textColor;
            }
        }
    }
</script>