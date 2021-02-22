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
					style="cursor: pointer"
					@click="downMain"
				></i>
			</div>
		</div>
		<el-row style="margin-top: 20px">
			<el-col :span="14" :offset="5">
				<el-row :gutter="20">
					<el-col :xs="24" :sm="10" :md="10" :lg="8" :xl="6" :span="6">
						<broadside></broadside>
					</el-col>
					<el-col :xs="24" :sm="14" :md="14" :lg="16" :xl="18" :span="18">
						<el-card shadow="hover" class="card">
							鼠标悬浮时显示
						</el-card>
						<el-card shadow="hover" class="card">
							鼠标悬浮时显示
						</el-card>
						<el-card shadow="hover" class="card">
							鼠标悬浮时显示
						</el-card>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import $ from "jquery";
import TypeIt from "typeit";
import broadside from '@/components/broadside'
import {findDimensions} from '@/utils/window'

export default {
	components: {
		broadside
	},
	data() {
		return {
			winWidth: 0,
			winHeight: 0,
		};
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
			findDimensions((winWidth, winHeight)=>{
				this.winWidth = winWidth;
				this.winHeight = winHeight;
			})
			$("#welcome").css("width", this.winWidth);
			$("#welcome").css("height", this.winHeight);
			$("#main").css("width", this.winWidth);
			$("#main").css("padding-top", this.winHeight / 2 - 92);
			$("#down").css("width", this.winWidth);
			$("#down").css("padding-top", this.winHeight / 2 - 92);

			this.$parent.isSm = this.winWidth < 768
		},
		downMain() {
			// 下滑
			$("#app").animate({ scrollTop: this.winHeight + "px" }, 800);
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

.card {
	margin-top: 20px;
}
</style>