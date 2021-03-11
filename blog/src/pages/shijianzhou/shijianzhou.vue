<template>
	<el-col :span="24">
		<div id="sjz-main">
			<div id="sjz-title">
				<div>时间轴</div>
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
							<el-timeline>
								<el-timeline-item
									v-for="(article, index) in articles"
									:key="index"
									:timestamp="article.createTime"
									placement="top"
								>
									<el-card>
										<div style="display: flex">
											<div>
												<el-image
													style="
														width: 100px;
														height: 100px;
													"
													:src="article.image"
													fit="fill"
													@click="
														toA(
															'/article/' +
																article.id
														)
													"
												></el-image>
											</div>
											<div class="sjz-title">
												<span
													v-text="article.title"
													@click="
														toA(
															'/article/' +
																article.id
														)
													"
												></span>
											</div>
										</div>
									</el-card>
								</el-timeline-item>
							</el-timeline>
							<el-pagination
								align="center"
								background
								layout="prev, pager, next"
								:total="total"
								class="pagination"
								@current-change="currentChange"
							>
							</el-pagination>
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
import { getSjz } from "@/api/article";

export default {
	components: {
		broadside,
	},
	data() {
		return {
			winWidth: 0,
			winHeight: 0,
			page: 1,
			limit: 10,
			total: 0,
			articles: [],
		};
	},
	created() {
		this.getArticle();
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
		getArticle() {
			getSjz(
				{
					page: this.page,
					limit: this.limit,
				},
				(res) => {
					if (res.success) {
						this.articles = res.data.items;
						this.total = res.data.total;
					}
				}
			);
		},
		toA(href) {
			this.$router.push(href);
		},
		currentChange(page) {
			this.page = page;
			this.getArticle();
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
</style>