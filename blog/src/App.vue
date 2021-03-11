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
						<li class="nav-item" to="/shijianzhou">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-shijianzhou"></use>
							</svg>
							<a href="javascript:;"> 时间轴</a>
						</li>
						<li class="nav-item" to="/tag">
							<svg
								class="icon"
								aria-hidden="true"
								style="font-size: 16px"
							>
								<use xlink:href="#icon-biaoqian"></use>
							</svg>
							<a href="javascript:;"> 标签</a>
						</li>
						<li class="nav-item" to="/category">
							<svg class="icon" aria-hidden="true">
								<use
									xlink:href="#icon-leimupinleifenleileibie"
								></use>
							</svg>
							<a href="javascript:;"> 分类</a>
						</li>
						<li class="nav-item" to="/about">
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
						style="
							font-size: 20px;
							cursor: url(http://esion.xyz/assets/pointer/link.png),
								pointer;
						"
						@click="openMenu"
					></i>
				</div>
			</div>
		</div>
		<router-view></router-view>

		<!-- 底部 -->
		<div id="fixbar"></div>
		<el-col :span="24" class="footer" align="center">
			<div>©2020 - 2021 By Esion</div>
		</el-col>

		<!-- 回到顶部 -->
		<el-backtop
			target="#app"
			:bottom="40"
			:right="8"
			style="
				border-radius: 0%;
				background-color: transparent;
				box-shadow: 0 0 0;
				width: 30px;
				height: 30px;
			"
		>
			<div class="backtop">
				<i class="el-icon-top"></i>
			</div>
		</el-backtop>
		<!-- 设置音乐显示 -->
		<fixbar target="#app" :bottom="70" :right="8" @click="isShowMusic()">
			<div class="backtop">
				<span class="iconfont icon-yinle"></span>
			</div>
		</fixbar>

		<!-- 侧边菜单 -->
		<el-drawer
			:visible.sync="menuShow"
			direction="rtl"
			:show-close="false"
			size="250"
		>
			<div style="width: 205px; text-align: left">
				<div style="margin-top: 10%; margin-bottom: 100px">
					<ul class="nav" :class="{ 'nav-item-a': scrollOver }">
						<li class="nav-item" to="/">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-zhuye"></use>
							</svg>
							<span>首页</span>
						</li>
						<li class="nav-item" to="/shijianzhou">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-shijianzhou"></use>
							</svg>
							<a href="javascript:;"> 时间轴</a>
						</li>
						<li class="nav-item" to="/tag">
							<svg
								class="icon"
								aria-hidden="true"
								style="font-size: 16px"
							>
								<use xlink:href="#icon-biaoqian"></use>
							</svg>
							<a href="javascript:;"> 标签</a>
						</li>
						<li class="nav-item" to="/category">
							<svg class="icon" aria-hidden="true">
								<use
									xlink:href="#icon-leimupinleifenleileibie"
								></use>
							</svg>
							<a href="javascript:;"> 分类</a>
						</li>
						<li class="nav-item" to="/about">
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
import fixbar from "@/components/fixbar";

import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";

export default {
	name: "App",
	components: {
		fixbar,
	},
	data() {
		return {
			audio: null,
			scrollTop: 0,
			targetTop: true,
			isTop: true,
			isT: true,
			showTop: true,
			scrollOver: false,
			isSm: false,
			menuShow: false,
			baseInfo: {
				background: "",
				music: [],
			},
			showMusic: true,
		};
	},
	mounted() {
		//获取基本信息
		getBaseInfo((res) => {
			if (res.success) {
				let baseInfo = res.data.item;
				new APlayer({
					container: document.getElementById("fixbar"),
					fixed: true,
					loop: "all",
					audio: baseInfo.music,
				});
				$("#app").css(
					"background-image",
					"url(" + baseInfo.background + ")"
				);
			} else {
				const ap = new APlayer({
					container: document.getElementById("fixbar"),
					fixed: true,
					loop: "all",
					autoplay: true,
					audio: [
						{
							artist: "Childsion",
							cover:
								"http://p3.music.126.net/cTEm__BYVBwNyPwzUg7ZfA==/109951162856342375.jpg?param=300y300",
							name: "Start",
							url:
								"https://music.163.com/song/media/outer/url?id=458333550.mp3",
						},
					],
				});
				ap.play();
				$("#app").css(
					"background-image",
					"url(http://esion.xyz/image/background.jpg)"
				);
			}
		});

		let that = this;
		// 增加事件
		$(".nav-item").on("click", function (e) {
			that.$router.push($(e.currentTarget).attr("to"));
		});
	},
	watch: {
		$route() {
			// 返回顶部
			$("#app").animate({ scrollTop: "0px" }, 800);
		},
	},
	methods: {
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
			this.menuShow = true;
			let that = this;
			setTimeout(() => {
				$(".nav-item").on("click", function (e) {
					that.menuShow = false;
					that.$router.push($(e.currentTarget).attr("to"));
				});
			}, 100);
		},
		isShowMusic() {
			this.showMusic = !this.showMusic;
			this.showMusic ? $("#fixbar").show() : $("#fixbar").hide();
		},
	},
};
</script>

<style>
/* 全局样式 */
*::selection {
	color: #ffffff;
	background-color: #30c2b4;
	text-shadow: none;
}
*::-moz-selection {
	color: #ffffff;
	background-color: #30c2b4;
	text-shadow: none;
}
a {
	color: #14d1b2;
	text-decoration: none;
}
*::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}
*::-webkit-scrollbar-thumb {
	background-color: #49b1f5;
	background-image: -webkit-linear-gradient(
		45deg,
		rgba(255, 255, 255, 0.4) 25%,
		transparent 25%,
		transparent 50%,
		rgba(255, 255, 255, 0.4) 50%,
		rgba(255, 255, 255, 0.4) 75%,
		transparent 75%,
		transparent
	);
}
*::-webkit-scrollbar-track {
	background-color: transparent;
}
* {
	cursor: url(http://esion.xyz/assets/pointer/base.png), default;
}
a {
	cursor: url(http://esion.xyz/assets/pointer/link.png), pointer;
}

input {
	cursor: url(http://esion.xyz/assets/pointer/text.png), text;
}

img {
	cursor: url(http://esion.xyz/assets/pointer/link.png), pointer;
	max-width: 100%;
}

button {
	cursor: url(http://esion.xyz/assets/pointer/link.png), pointer !important;
}

button span {
	cursor: url(http://esion.xyz/assets/pointer/link.png), pointer;
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
	cursor: url(http://esion.xyz/assets/pointer/link.png), pointer;
}
.nav a {
	text-decoration: none;
}
.nav-item-a a:hover {
	color: #49b1f5;
}

/*利用:before实现下划线宽度从0-100%*/
.nav-item:before {
	content: "";
	position: absolute;
	top: -5px;
	width: 0;
	height: 100%;
	border-bottom: 5px solid #49b1f5;
	transition: 0.2s all linear; /*动画效果*/
	right: 100%; /*下划线从右侧开始显示*/
}
.nav-item:hover:before {
	right: 0; /*鼠标滑过时，下划线从右向左移动*/
	width: 100%; /*同时，下划线宽度从0-100%*/
}
.nav-item:hover ~ .nav-item:before {
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
	line-height: 30px;
	color: #ffffff;
	background-color: #1989fa;
}

.el-drawer {
	overflow: auto !important;
}
</style>
