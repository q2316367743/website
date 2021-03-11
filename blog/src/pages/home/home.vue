<template>
	<div class="main">
		<div id="welcome">
			<div id="main">
				<div id="title">你好</div>
				<p id="subtitle"></p>
			</div>
			<div id="down">
				<i
					class="el-icon-arrow-down"
					style="cursor: url(http://esion.xyz/assets/pointer/link.png), pointer"
					@click="downMain"
				></i>
			</div>
		</div>
		<el-row style="margin-top: 20px">
			<el-col :span="5" :xs="2" :sm="3" :md="4" :lg="4" :xl="5" style="min-height:1px;">
			</el-col>
			<el-col :span="14" :xs="20" :sm="18" :md="16" :lg="16" :xl="14">
				<el-row :gutter="20">
					<el-col
						:xs="24"
						:sm="10"
						:md="10"
						:lg="8"
						:xl="6"
						:span="6"
					>
						<broadside></broadside>
					</el-col>
					<el-col
						:xs="24"
						:sm="14"
						:md="14"
						:lg="16"
						:xl="18"
						:span="18"
					>
						<el-card
							shadow="hover"
							class="item"
							v-for="(article, index) in articles"
							:key="index"
						>
							<el-row>
								<el-col :span="10" class="item-img">
									<el-image
										style="width: 100%; height: 100%"
										:src="article.image"
										fit="fill"
										@click="toA('/article/' + article.id)"
									></el-image>
								</el-col>
								<el-col :span="14" class="item-content">
									<div
										class="item-title item-link"
										v-text="article.title"
										@click="toA('/article/' + article.id)"
									></div>
									<div class="item-extra">
										<span v-if="article.stick">
											<span style="color: #49b1f5">
												<span
													class="iconfont icon-zhiding"
												></span>
												<span>置顶</span>
											</span>
											<span> | </span></span
										>
										<span
											><i class="el-icon-date"></i>发表于
										</span>
										<span
											v-text="article.createTime"
										></span>
										<span> | </span>
										<span
											><i class="el-icon-refresh"></i
											>更新于
										</span>
										<span
											v-text="article.updateTime"
										></span>
										<span v-if="article.categoryId != ''">
											<span> | </span>
											<span
												class="iconfont icon-leimupinleifenleileibie"
											></span>
											<span
												class="item-link"
												@click="
													toA(
														'/category/' +
															article.categoryId
													)
												"
											>
												{{ article.categoryName }}</span
											>
										</span>
										<span v-if="article.tags.length > 0">
											<span> | </span>
											<span
												class="iconfont icon-biaoqian"
											></span>
											<span
												v-for="(
													tag, index
												) in article.tags"
												:key="index"
											>
												<span v-if="index != 0">
													·</span
												>
												<span
													class="item-link"
													@click="
														toA('/tag/' + tag.id)
													"
												>
													{{ tag.name }}</span
												>
											</span>
										</span>
									</div>
									<div
										class="item-describe"
										v-text="article.describe"
									></div>
								</el-col>
							</el-row>
						</el-card>
						<el-pagination
							background
							layout="prev, pager, next"
							:total="total"
							class="pagination"
							@current-change="currentChange"
						>
						</el-pagination>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import $ from "jquery";
import TypeIt from "typeit";
import broadside from "@/components/broadside";
import { findDimensions } from "@/utils/window";
import { getList } from "@/api/article";

export default {
	components: {
		broadside,
	},
	data() {
		return {
			winWidth: 0,
			winHeight: 0,
			index: 0,
			limit: 5,
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
		new TypeIt("#subtitle", {
			strings: [
				"真正的大师永远怀着一颗学徒的心。",
				"任何时候都不要被骄傲蒙蔽了双眼！",
				"绝对不要坐等胜利的到来。",
				"愤怒，带来冲动。",
			],
			speed: 150,
			loop: true,
			lifeLike: true,
			startDelay: 500,
			breakLines: false,
		}).go();
	},
	methods: {
		getWindow() {
			findDimensions((winWidth, winHeight) => {
				this.winWidth = winWidth;
				this.winHeight = winHeight;
			});
			$("#welcome").css("width", this.winWidth);
			$("#welcome").css("height", this.winHeight);
			$("#main").css("width", this.winWidth);
			$("#main").css("padding-top", this.winHeight / 2 - 92);
			$("#down").css("width", this.winWidth);
			$("#down").css("padding-top", this.winHeight / 2 - 92);

			this.$parent.isSm = this.winWidth < 768;
		},
		downMain() {
			// 下滑
			$("#app").animate({ scrollTop: this.winHeight + "px" }, 800);
		},
		getArticle() {
			getList(
				{
					page: this.index,
					limit: this.limit,
				},
				(res) => {
					if (res.success) {
						this.total = res.data.total;
						this.articles = res.data.items;
					}
				}
			);
		},
		currentChange(page) {
			this.page = page;
			this.getArticle();
		},
		toA(href) {
			this.$router.push(href);
		},
	},
};
</script>

<style scoped>
#main {
	text-align: center;
}
#title {
	font-size: 40px;
	font-weight: bold;
	color: #ffffff;
}
#subtitle {
	font-size: 30px;
	color: #ffffff;
	margin: 10px;
}
#down {
	color: #ffffff;
	font-size: 30px;
	text-align: center;
	animation: shadow 1.5s linear infinite;
}
@keyframes shadow {
	0%,
	100% {
		transform: scaleY(1);
	}
	50% {
		transform: scaleY(1.1);
	}
}

.item {
	margin-top: 20px;
	height: 280px;
}
.item-img {
	transition: all 0.6s;
	cursor: url(http://esion.xyz/assets/pointer/link.png), pointer;
}
.item:hover .item-img {
	transform: scale(1.1);
}
.item-content {
	text-align: left;
	margin-top: 8%;
	padding-left: 40px;
	width: 50%;
}
.item-title {
	font-size: 26px;
}

.item-link:hover,
.item-link:focus,
.item-link:active {
	-webkit-transition: all 0.5s linear;
	-moz-transition: all 0.5s linear;
	-o-transition: all 0.5s linear;
	transition: all 0.5s linear;
	cursor: url(http://esion.xyz/assets/pointer/link.png), pointer;
	color: #49b1f5;
}

.item-extra {
	font-size: 14px;
	color: darkgray;
	padding-top: 10px;
}
.item-describe {
	font-size: 16px;
	padding-top: 10px;
}

.pagination {
	margin-top: 30px;
	text-align: center;
}
</style>