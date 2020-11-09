<template>
<div>
    <div>
        <Tümkategoriler />
        <router-view></router-view>
    </div>

</div>
</template>

<script>
import Tümkategoriler from "@/components/Tümkategoriler";

import "@/assets/styles.css";

export default {
    components: {
        Tümkategoriler
    }
};
</script>

<style>
.bosluk {
    padding: 20px;
}
</style>
