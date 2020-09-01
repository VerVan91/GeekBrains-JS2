Vue.component('search-form', {
    data: {
        userSearch: '',
    },
    template: `
                <form action="#" class="search-form" @submit.prevent="filter">
                <input type="text" class="search-field" v-model="userSearch">
                <button type="submit" class="btn-search">
                </button>
            </form>
    `
});
