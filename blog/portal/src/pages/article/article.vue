<template>
	<el-col :span="24">
		<div id="about-main">
			<div id="about-title">
				<div>关于自己</div>
			</div>
		</div>
		<el-col
			:span="6"
			:xs="1"
			:sm="2"
			:md="3"
			:lg="4"
			:xl="5"
			style="min-height: 1px"
		>
		</el-col>
		<el-col :span="12" :xs="22" :sm="20" :md="18" :lg="16" :xl="12">
			<el-card shadow="always">
				<div class="content"></div>
			</el-card>
		</el-col>
	</el-col>
</template>

<script>
import { findDimensions } from "@/utils/window";
import $ from "jquery";
export default {
	data() {
		return {
			winWidth: 0,
			winHeight: 0,
		};
	},
	mounted() {
		this.getWindow();
		window.onresize = this.getWindow;
		$.getScript("https://gitee.com/qiaoshengda/website/widget_preview");
	},
	methods: {
		getWindow() {
			findDimensions((winWidth, winHeight) => {
				this.winWidth = winWidth;
				this.winHeight = winHeight;
			});
			$("#about-title").css("width", this.winWidth);
			$("#about-main").css("width", this.winWidth);
			let h = this.winHeight / 3;
			if (h > 152) {
				$("#about-title").css("padding-top", h);
				$("#about-main").css("height", h * 2 - 92);
			}

			this.$parent.isSm = this.winWidth < 768;
		},
	},
};
</script>

<style scoped>
img {
	max-width: 100%;
}
#about-main {
	font-size: 40px;
	color: #ffffff;
}
.content {
	font-size: 16px;
	padding-left: 10px;
}
</style>