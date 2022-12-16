<script setup lang="ts">

</script>

<template>
    <div class="log-item">
        <p class="text">Joseph Admin just logged in</p>
        <p class="text">IP address: 00.000.00.0</p>
        <p class="text">May 35th 2022, 08:08:45 PM</p>
    </div>
</template>

<style scoped>
.log-item {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    padding: 16px;
    margin: 4px 0px;
    transition: all .10s;
}

.log-item:hover {
    box-shadow: 0px 1px 5px #E7EAF480;
    border: 1px solid #E7EAF4;
    border-radius: 24px;
}

.log-item .text {
    font-size: 12px;
    letter-spacing: 0px;
    color: #646464;
}
</style>