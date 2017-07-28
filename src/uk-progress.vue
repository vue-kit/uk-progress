<template lang="pug">
    .uk-progress(:style="{ width: width }")
        .uk-progress-bar(:style="style") {{ percentage }}
</template>
<script>
    export default {
        props: {
            width: {
                type: String,
                default: "100%"
            },
            value: {
                type: [String, Number],
                default: 0
            },
            max: {
                type: [String, Number],
                default: 100
            },
            color: {
                type: String,
                default: "default"
            }
        },
        computed: {
            percentage() {
                let per = parseFloat(this.value / this.max * 100).toFixed(2);
                if (per > 100) per = 100;
                return parseFloat(per) + "%";
            },
            style() {
                let bg = this.color;
                if (bg == "default") {
                    bg = "#1e87f0";
                } else if (bg == "success") {
                    bg = "#32d296";
                } else if (bg == "warning") {
                    bg = "#faa05a";
                } else if (bg == "danger") {
                    bg = "#f0506e";
                }
                return {
                    width: this.percentage,
                    background: bg
                }
            }
        }
    }
</script>
<style lang="less" scoped>
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
</style>
