<template>
    <div>
        <square-spinner v-if="spinnerId === 0"/>
        <circle-spinner v-if="spinnerId === 1"/>
        <fold-spinner v-if="spinnerId === 2"/>
        <tile-spinner v-if="spinnerId === 3"/>
        <cube-spinner v-if="spinnerId === 4"/>
        <bounce-spinner v-if="spinnerId === 5"/>
    </div>   
</template>

<script>

import { SquareSpinner, CircleSpinner, FoldSpinner, TileSpinner, CubeSpinner, BounceSpinner } from 'vue-spinners'

export default {
    name: 'RandomSpinner',
    components: {
        SquareSpinner,
        CircleSpinner,
        FoldSpinner,
        TileSpinner,
        CubeSpinner,
        BounceSpinner
    },     
    data: function() {
        return {
            spinnerId: 0
        };
    },
    methods: {
        generateRandomId() {
            this.spinnerId = Math.floor(Math.random() * 6); 
        }
    },
    created: function() {
        this.generateRandomId();
    }
}

</script>

<style>
</style>