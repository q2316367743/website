<template>
	<el-col :span="24">
		<div id="about-main">
			<div id="about-title">
				<div>关于自己</div>
			</div>
		</div>
		<el-col :span="6" :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="min-height:1px;">
			</el-col>
		<el-col :span="12" :xs="22" :sm="20" :md="18" :lg="16" :xl="12">
			<el-card shadow="always">
				<div class="title">落雨不悔</div>
				<div class="content">
					<h1>基本信息</h1>
					<p>👨基本情况：大四在读，计算机科学与技术专业。</p>
					<p>
						🎫昵称：落雨不悔。希望做任何事情都不要后悔，就像雨滴到了地上。
					</p>
					<p>🌍地址：目前在湖北孝感。</p>
					<p>
						📧邮箱：<a href="mailto:m17762618644@163.com"
							>m17762618644@163.com</a
						>
					</p>
					<p>🔨技术方向：主Java，会考虑学一点前端和大数据。</p>
					<p>💓兴趣爱好：游戏，编程。</p>
					<p>📝写作风格：一般以学习笔记为主，少量的心得感悟。</p>
                    <h1>个人开源情况</h1>
                    <img title="https://github.com/anuraghazra/github-readme-stats" src="https://github-readme-stats.vercel.app/api/top-langs/?username=q2316367743" /><br>
                        <img title="https://github.com/anuraghazra/github-readme-stats" src="https://github-readme-stats.vercel.app/api?username=q2316367743&bg_color=30,e96443,904e95&title_color=fff&text_color=fff" />
					<h1>本项目开源情况</h1>
					<div>
                        <h2>Gitee</h2>
						<div id="osc-gitee-widget-tag" style="width: 600px;max-width: 100%"></div>
                        <h2>Github</h2>
                        <img title="https://github.com/anuraghazra/github-readme-stats" src="https://github-readme-stats.vercel.app/api/pin/?username=q2316367743&repo=website" />
					</div>
				</div>
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
img{
	max-width: 100%;
}
h1{
	padding: 10px 0px;
}
#about-main {
	text-align: center;
	font-size: 40px;
	color: #ffffff;
	font-weight: bold;
}
.title {
	color: #49b1f5;
	text-align: center;
	font-size: 30px;
	margin-top: 20px;
}
.content {
	font-size: 16px;
	padding-left: 10px;
}

/* gitee */
.osc_pro_color {
	color: #393222 !important;
}
.osc_panel_color {
	background-color: #ebdfc1 !important;
}
.osc_background_color {
	background-color: #fffae5 !important;
}
.osc_border_color {
	border-color: #d8ca9f !important;
}
.osc_desc_color {
	color: #393222 !important;
}
.osc_link_color * {
	color: #a28b40 !important;
}
</style>