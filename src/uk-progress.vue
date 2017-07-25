<template lang="pug">
    div.uk-margin-top
        p {{ greeting }} vue!
</template>
<script>
    export default {
        data() {
            return {
                greeting: "Hello"
            }
        }
    }
</script>
<style lang="less" scoped>
    .uk-margin-top {
        margin-top: 20px;
    }
</style>
