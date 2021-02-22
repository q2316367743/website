<template>
	<div id="app" @scroll="appScroll($event)">
		<div :class="{ topT: isT, topS: !isT }" v-show="showTop">
			<div
				style="
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
				"
			>
				<div>
					<div class="logo" :class="{ 'nav-item-a': scrollOver }">
						<router-link tag="a" to="/">落雨不悔的博客</router-link>
					</div>
				</div>
				<div v-show="!isSm">
					<ul class="nav" :class="{ 'nav-item-a': scrollOver }">
						<li class="nav-item" to="/">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-zhuye"></use>
							</svg>
							<span>首页</span>
						</li>
						<li class="nav-item" to="shijianzhou">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-shijianzhou"></use>
							</svg>
							<a href="javascript:;"> 时间轴</a>
						</li>
						<li class="nav-item" to="tag">
							<svg
								class="icon"
								aria-hidden="true"
								style="font-size: 16px"
							>
								<use xlink:href="#icon-biaoqian"></use>
							</svg>
							<a href="javascript:;"> 标签</a>
						</li>
						<li class="nav-item" to="classify">
							<svg class="icon" aria-hidden="true">
								<use
									xlink:href="#icon-leimupinleifenleileibie"
								></use>
							</svg>
							<a href="javascript:;"> 分类</a>
						</li>
						<li class="nav-item" to="about">
							<svg
								class="icon"
								aria-hidden="true"
								style="font-size: 18px"
							>
								<use xlink:href="#icon-mingpian-copy"></use>
							</svg>
							<a href="javascript:;"> 关于作者</a>
						</li>
					</ul>
				</div>
				<div v-show="isSm" style="padding: 0 20px">
					<i
						class="el-icon-menu"
						style="font-size: 20px; cursor: pointer"
						@click="openMenu"
					></i>
				</div>
			</div>
		</div>
		<router-view></router-view>

		<!-- 固定块 -->
		<div
			id="fixbar"
			@click="fixbarClick"
			:style="{ right: fixbarX + 'px' }"
		></div>
		<div class="footer" align="center">
			<div>©2020 - 2021 By Esion</div>
		</div>

		<!-- 回到顶部 -->
		<el-backtop
			target="#app"
			:bottom="0"
			:right="200"
			style="
				border-radius: 0%;
				background-color: transparent;
				box-shadow: 0 0 0;
			"
			v-if="!isSm"
		>
			<div class="backtop">
				<svg
					class="icon"
					aria-hidden="true"
					style="font-size: 40px; color: #c71d23"
				>
					<use xlink:href="#icon-huidaodingbu-shixin"></use>
				</svg>
			</div>
		</el-backtop>
		<el-backtop target="#app" v-if="isSm"></el-backtop>

		<!-- 侧边菜单 -->
		<el-drawer
			:visible.sync="monuShow"
			direction="rtl"
			:show-close="false"
			size="250"
		>
			<div style="width: 205px; text-align: left">
				<div style="margin-top: 80px">
					<ul class="nav" :class="{ 'nav-item-a': scrollOver }">
						<li class="nav-item" to="/">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-zhuye"></use>
							</svg>
							<span>首页</span>
						</li>
						<li class="nav-item" to="shijianzhou">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-shijianzhou"></use>
							</svg>
							<a href="javascript:;"> 时间轴</a>
						</li>
						<li class="nav-item" to="tag">
							<svg
								class="icon"
								aria-hidden="true"
								style="font-size: 16px"
							>
								<use xlink:href="#icon-biaoqian"></use>
							</svg>
							<a href="javascript:;"> 标签</a>
						</li>
						<li class="nav-item" to="classify">
							<svg class="icon" aria-hidden="true">
								<use
									xlink:href="#icon-leimupinleifenleileibie"
								></use>
							</svg>
							<a href="javascript:;"> 分类</a>
						</li>
						<li class="nav-item" to="about">
							<svg
								class="icon"
								aria-hidden="true"
								style="font-size: 18px"
							>
								<use xlink:href="#icon-mingpian-copy"></use>
							</svg>
							<a href="javascript:;"> 关于作者</a>
						</li>
					</ul>
				</div>
			</div>
		</el-drawer>
	</div>
</template>

<script>
import $ from "jquery";
import { getBaseInfo } from "@/api/admin";

export default {
	name: "App",
	data() {
		return {
			fixbarX: 100,
			audio: null,
			scrollTop: 0,
			targetTop: true,
			isTop: true,
			isT: true,
			showTop: true,
			scrollOver: false,
			isSm: false,
			monuShow: false,
			baseInfo: {
				background: "",
			},
			musicIndex: 0,
			musicCount: 0,
		};
	},
	created() {
		//获取基本信息
		getBaseInfo((res) => {
			if (res.success) {
				this.baseInfo = res.data.item;
			}
		});
	},
	mounted() {
		if (this.baseInfo.music.length > 0) {
			this.musicCount = this.baseInfo.music.length;
			let that = this;
			this.audio = new window.Daudio({
				ele: "#fixbar",
				src: this.baseInfo.music[0].src,
				imageurl: this.baseInfo.music[0].imageurl,
				name: this.baseInfo.music[0].name,
				singer: this.baseInfo.music[0].singer,
				showprogress: true,
				initstate: "cricle",
				next: function () {
					if (that.musicIndex < that.musicCount - 1) {
						that.musicIndex = that.musicIndex + 1;
					} else {
						that.musicIndex = 0;
					}
					that.audio.checkAudio(
						that.baseInfo.music[that.musicIndex].src,
						that.baseInfo.music[that.musicIndex].imageurl,
						that.baseInfo.music[that.musicIndex].name,
						that.baseInfo.music[that.musicIndex].singer
					);
				},
				ended: function () {
					if (that.musicIndex < that.musicCount - 1) {
						that.musicIndex = that.musicIndex + 1;
					} else {
						that.musicIndex = 0;
					}
					that.audio.checkAudio(
						that.baseInfo.music[that.musicIndex].src,
						that.baseInfo.music[that.musicIndex].imageurl,
						that.baseInfo.music[that.musicIndex].name,
						that.baseInfo.music[that.musicIndex].singer
					);
				},
			});
		}

		// this.audio.play();
		this.audio.hideLoading();

		let that = this;
		// 增加事件
		$(".nav-item").on("click", function (e) {
			let to = $(e.currentTarget).attr("to");
			let href = window.location.href.split("#")[1];
			// 特殊情况：首页
			if (to == "/") {
				if (href != "/") {
					that.$router.push("/");
					return;
				}
			}

			if (href.indexOf(to) < 0) {
				that.$router.push($(e.currentTarget).attr("to"));
			}
		});
		$("#app").css(
			"background-image",
			"url(" + this.baseInfo.background + ")"
		);
	},
	methods: {
		fixbarClick() {
			if (this.fixbarX == 100) {
				this.fixbarX = 240;
			} else {
				this.fixbarX = 100;
			}
		},
		appScroll(e) {
			this.isTop = e.target.scrollTop == 0;
			this.targetTop = e.target.scrollTop - this.scrollTop < 0;
			this.scrollTop = e.target.scrollTop;
			this.scrollOver = e.target.scrollTop > 60;
			if (this.scrollOver) {
				if (this.targetTop) {
					if (!this.isTop) {
						this.showTop = true;
					}
				} else {
					this.showTop = false;
				}
				this.isT = false;
			} else {
				this.showTop = true;
				this.isT = true;
			}
		},
		openMenu() {
			this.monuShow = true;
			let that = this;
			setTimeout(() => {
				$(".nav-item").on("click", function (e) {
					let to = $(e.currentTarget).attr("to");
					let href = window.location.href.split("#")[1];
					// 特殊情况：首页
					if (to == "/") {
						if (href != "/") {
							that.$router.push("/");
							return;
						}
					}

					if (href.indexOf(to) < 0) {
						that.$router.push($(e.currentTarget).attr("to"));
					}
				});
			}, 100);
		},
	},
};
</script>

<style>
#fixbar {
	position: fixed;
	bottom: 50px;
	z-index: 999;
	width: 55px;
	height: 55px;
	margin-bottom: 1px;
	text-align: center;
	cursor: pointer;
}
#app {
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0px;
	bottom: 0px;
	position: absolute;
	overflow-y: auto;
	overflow-x: hidden;
}
#app {
	width: 100%;
	height: 100%;
}
*::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}
*::-webkit-scrollbar-thumb {
	background: #49b1f5;
}
*::-webkit-scrollbar-track {
	background-color: transparent;
}

/* 布局 */
.topT {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 60px;
	line-height: 60px;
	background-color: transparent;
	color: #ffffff;
}
.topT .nav .nav-item a {
	color: #ffffff;
}
.topT .logo a {
	color: #ffffff;
}
.topS {
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 999;
	width: 100%;
	height: 60px;
	line-height: 60px;
	background: rgba(255, 255, 255, 0.8);
	color: #000000;
}
.topS .nav-item a {
	color: #000000;
}
.topS .logo a {
	color: #000000;
}

.logo {
	font-size: 20px;
	font-weight: bold;
	padding-left: 20px;
}
.logo a {
	text-decoration: none;
}

.nav {
	position: relative;
	padding: 0 20px;
	background: transparent;
	border-radius: 2px;
	font-size: 0;
}
.nav-item {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	font-size: 14px;
	line-height: 60px;
	list-style: none;
	padding: 0px 20px;
	cursor: pointer;
}
.nav a {
	text-decoration: none;
}
.nav-item-a a:hover {
	color: #49b1f5;
}

/*利用:before实现下划线宽度从0-100%*/
li:before {
	content: "";
	position: absolute;
	top: -5px;
	width: 0;
	height: 100%;
	border-bottom: 5px solid #49b1f5;
	transition: 0.2s all linear; /*动画效果*/
	right: 100%; /*下划线从右侧开始显示*/
}
li:hover:before {
	right: 0; /*鼠标滑过时，下划线从右向左移动*/
	width: 100%; /*同时，下划线宽度从0-100%*/
}
li:hover ~ li:before {
	/*~ 选择器：查找指定元素后面的所有兄弟结点*/
	left: 0; /*处于hover后面元素的下划线从左侧开始显示*/
}

.footer {
	color: #ffffff;
	padding: 40px;
}
.backtop {
	height: 100%;
	width: 100%;
	text-align: center;
	line-height: 40px;
	color: #1989fa;
}
</style>
