<template>
	<div class="tag">
		<router-link
			tag="a"
			v-for="(data, index) in datas"
			:key="index"
			v-text="data.name"
			:to="'/tag/' + data.id"
			:style="random()"
			style="margin-right: 10px"
		>
		</router-link>
	</div>
</template>

<script>
const colors = [
	"#404B6D",
	"#01B312",
	"#C64EAD",
	"#A960B3",
	"#6C5C46",
	"#BD99B9",
	"#7CB5D2",
	"#404C79",
	"#404C79",
];
const normal = ["14px", "16px", "18px", "20px"];
const big = ["20px", "22px", "24px", "26px"];

export default {
	name: "wordCloud",
	props: {
		datas: Array,
		size: {
			type: String,
			default: "normal",
			required: false,
		},
	},
	methods: {
		/**
		 * 获取一个随机大小，随机颜色的JSON数据
		 * 9种颜色
		 * 4种尺寸
		 */
		random() {
			let font_size = "16px";
			if (this.size == "big") {
				font_size = big[parseInt(Math.random() * 4)];
			} else {
				font_size = normal[parseInt(Math.random() * 4)];
			}
			let color = colors[parseInt(Math.random() * 9)];
			return {
				color: color,
				"font-size": font_size,
			};
		},
	},
};
</script>

<style scoped>
.tag {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
</style>