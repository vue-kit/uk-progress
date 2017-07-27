<template lang="pug">
    .uk-progress
        .uk-progress-bar.uk-progress-bar-default(:style="style") {{ percentage }}
</template>
<script>
    export default {
        props: {
            value: {
                type: [String, Number],
                default: 0
            },
            max: {
                type: [String, Number],
                default: 100
            }
        },
        computed: {
            percentage() {
                let per = parseFloat(this.value / this.max * 100).toFixed(2);
                if (per > 100) per = 100;
                return parseFloat(per) + "%";
            },
            style() {
                return {
                    width: this.percentage
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @default-color: #1e87f0;
    @success-color: #32d296;
    @warning-color: #faa05a;
    @danger-color: #f0506e;

    .transition() {
        -webkit-transition: width 0.6s ease;
                transition: width 0.6s ease;
    }
    .uk-progress {
        display: block;
        border: 0;
        border-radius: 500px;
        height: 20px;
        line-height: 20px;
        background: #f8f8f8;
        overflow: hidden;
    }
    .uk-progress-bar {
        width: 0;
        height: 100%;
        float: left;
        .transition();
        font-size: 12px;
        color: #fff;
        text-align: center;
    }
    .uk-progress-bar-default {
        background: @default-color;
    }
    .uk-progress-bar-success {
        background: @success-color;
    }
    .uk-progress-bar-warning {
        background: @warning-color;
    }
    .uk-progress-bar-danger {
        background: @danger-color;
    }
</style>
