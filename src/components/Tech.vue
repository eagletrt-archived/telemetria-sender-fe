<template>
    <div>        
        <div id="db">
            <h1>123</h1>
        </div>

        <footer class="footer mt-auto py-3">
            <div class="container">
                <span>Place sticky footer content here.</span>
            </div>
        </footer>
    </div>   
</template>

<script>

export default {
    name: 'Tech',
    data: function () {
        return {
        }
    },
    components: {
        
    },
    methods: {
        beforeMount: function () {
        },
        mounted: function () {
        }
    }
}
</script>

<style>
#db {
    background-color: green;
} 

h1 {
    color: #39454F;
}

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.container {
    width: auto;
    max-width: 680px;
    padding: 0 15px;
}

.footer {
    position: relative;
    background-color: #f5f5f5;
}
</style>