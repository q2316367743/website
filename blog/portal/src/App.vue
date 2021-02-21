<template>
	<div id="app" @scroll="appScroll($event)">
		<div :class="{ topT: isT, topS: !isT }" v-show="showTop">
			<div style="display: flex;flex-flow: row nowrap;justify-content: space-between;">
				<div>
					<div class="logo" :class="{'nav-item-a': scrollOver}">
						<router-link tag="a" to="/">落雨不悔的博客</router-link>
					</div>
				</div>
				<div>
					<ul class="nav" :class="{'nav-item-a': scrollOver}">
						<li class="nav-item">
              <router-link tag="a" to="/">首页</router-link>
						</li>
						<li class="nav-item">
							<a href="javascript:;">时间轴</a>
						</li>
						<li class="nav-item">
							<a href="javascript:;">归档</a>
						</li>
						<li class="nav-item">
							<a href="javascript:;">分类</a>
						</li>
            <span id="bar"></span>
					</ul>
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
	</div>
</template>

<script>
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
		};
	},
	mounted() {
		this.audio = new window.Daudio({
			ele: "#fixbar",
			src:
				"https://m10.music.126.net/20210221173615/add65f517c4fcd7b899390ecf048305a/ymusic/f951/b64f/c711/3bacec351bec1bce69d981103de663ec.mp3",
			imageurl:
				"http://p4.music.126.net/aGIyB5JJ7gn5wE1UjzIsNA==/109951162849021467.jpg?param=300y300",
			name: "CX",
			singer: "LevitateXC",
			showprogress: true,
			initstate: "cricle",
			next: function () {
				// this.audio.checkAudio(src, imageurl, name, singer)
			},
			ended: function () {
				// this.audio.checkAudio(src, imageurl, name, singer)
			},
		});
		// this.audio.play();
    this.audio.hideLoading();
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
    mouseUp(e){
      console.log(e.currentTarget.offsetLeft)
    },
    mouseOut(e){
      console.log(e.currentTarget)
    }
	},
};
</script>

<style>
#fixbar {
	position: fixed;
	bottom: 50px;
	z-index: 999999;
	width: 55px;
	height: 55px;
	margin-bottom: 1px;
	text-align: center;
	cursor: pointer;
}
#app {
	background-image: url(./assets/image/background.jpg);
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
.topT .nav .nav-item a{
  color: #ffffff;
}
.topT .logo a{
  color: #ffffff;
}
.topS {
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 9999;
	width: 100%;
	height: 60px;
  line-height: 60px;
  background: rgba(255, 255, 255, 0.8);
  color: #000000;
}
.topS .nav-item a{
  color: #000000;
}
.topS .logo a{
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
	color: #fff;
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
}
.nav a {
	text-decoration: none;
}
.nav-item-a a:hover {
	color: #49b1f5;
}

.bar{
  height: 5px;
  color: #49b1f5;
}
</style>
