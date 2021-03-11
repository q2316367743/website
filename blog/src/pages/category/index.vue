<template>
	<el-col :span="24">
		<div id="sjz-main">
			<div id="sjz-title">
				<div>分类</div>
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
						<el-card
							shadow="hover"
							style="margin-top: 20px; padding: 10px 20px"
						>
							<ul>
								<li
									v-for="(item, index) in categorys"
									:key="index"
									class="category-tree"
                                    @click="toA('/category/' + item.id)"
								>
									{{ item.name }}（{{ item.count }}）
								</li>
							</ul>
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
import { getCategory } from "@/api/base";

export default {
	components: {
		broadside,
	},
	data() {
		return {
			winWidth: 0,
			winHeight: 0,
			categorys: [],
		};
	},
	created() {
		getCategory((res) => {
			if (res.success) {
				this.categorys = res.data.items;
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
			$("#sjz-title").css("width", this.winWidth);
			$("#sjz-main").css("width", this.winWidth);
			let h = this.winHeight / 3;
			if (h > 152) {
				$("#sjz-title").css("padding-top", h);
				$("#sjz-main").css("height", h * 2 - 92);
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
#sjz-main {
	text-align: center;
	font-size: 40px;
	color: #ffffff;
	font-weight: bold;
}
.sjz-title {
	margin-left: 20px;
	line-height: 60px;
	font-size: 20px;
}
.sjz-title > span {
	cursor: url(http://esion.xyz/assets/pointer/link.png), pointer;
}
.sjz-title > span:hover {
	color: #49b1f5;
}
.category-tree {
	padding: 10px 0px;
    list-style: inside;
}

.category-tree:hover {
    background-color: rgba(0, 0, 0, 0.1);
	cursor: url(http://esion.xyz/assets/pointer/link.png), pointer;
}
</style>