<template>
	<el-col :span="24">
		<div id="tag-main">
			<div id="tag-title">
				<div>标签</div>
			</div>
		</div>
		<el-row style="margin-top: 20px">
			<el-col
				:span="5"
				:xs="2"
				:sm="3"
				:md="4"
				:lg="4"
				:xl="5"
				style="min-height: 1px"
			>
			</el-col>
			<el-col :span="14" :xs="20" :sm="18" :md="16" :lg="16" :xl="14">
				<el-row :gutter="20">
					<el-col
						:xs="24"
						:sm="10"
						:md="10"
						:lg="7"
						:xl="6"
						:span="6"
					>
						<broadside></broadside>
					</el-col>
					<el-col
						:xs="24"
						:sm="14"
						:md="14"
						:lg="17"
						:xl="18"
						:span="18"
					>
						<el-card shadow="hover" style="margin-top: 20px">
                            <div style="font-size: 36px;text-align: center;margin-top: 20px;margin-bottom: 40px;">
                                一共{{tags.length}}个标签
                            </div>
							<wordCloud :datas="tags" size="big"></wordCloud>
						</el-card>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</el-col>
</template>

<script>
import { findDimensions } from "@/utils/window";
import $ from "jquery";
import broadside from "@/components/broadside";
import wordCloud from "@/components/wordCloud"
import { getTags } from "@/api/base";

export default {
	components: {
		broadside,
        wordCloud
	},
	data() {
		return {
			winWidth: 0,
			winHeight: 0,
			page: 1,
			limit: 10,
			total: 0,
			tags: [],
		};
	},
	created() {
		getTags((res) => {
			if (res.success) {
				this.tags = res.data.items;
			}
		});
	},
	mounted() {
		this.getWindow();
		window.onresize = this.getWindow;
	},
	methods: {
		getWindow() {
			findDimensions((winWidth, winHeight) => {
				this.winWidth = winWidth;
				this.winHeight = winHeight;
			});
			$("#tag-title").css("width", this.winWidth);
			$("#tag-main").css("width", this.winWidth);
			let h = this.winHeight / 3;
			if (h > 152) {
				$("#tag-title").css("padding-top", h);
				$("#tag-main").css("height", h * 2 - 92);
			}

			this.$parent.isSm = this.winWidth < 768;
		},
		toA(href) {
			this.$router.push(href);
		},
	},
};
</script>

<style scoped>
#tag-main {
	text-align: center;
	font-size: 40px;
	color: #ffffff;
	font-weight: bold;
}
.tag-title {
	margin-left: 20px;
	line-height: 60px;
	font-size: 20px;
}
.tag-title > span {
	cursor: url(http://esion.xyz/assets/pointer/link.png), pointer;
}
.tag-title > span:hover {
	color: #49b1f5;
}
</style>