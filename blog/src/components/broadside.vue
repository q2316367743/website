<template>
	<div>
		<el-card shadow="hover" class="card" style="text-align: center">
			<div>
				<el-avatar :size="100" :src="admin.avatar"></el-avatar>
			</div>
			<div class="admin-name" v-text="admin.name"></div>
			<div class="admin-describe" v-text="admin.description"></div>
			<div class="admin-web">
				<el-row type="flex" justify="space-between">
					<el-col :span="8">
						<router-link tag="a" to="article">
							<div>文章</div>
							<div
								v-text="webInfo.articleCount"
								style="margin-top: 5px"
							></div>
						</router-link>
					</el-col>
					<el-col :span="8">
						<router-link tag="a" to="tag">
							<div>标签</div>
							<div
								v-text="webInfo.tagCount"
								style="margin-top: 5px"
							>
							</div>
						</router-link>
					</el-col>
					<el-col :span="8">
						<router-link tag="a" to="classify">
							<div>分类</div>
							<div
								v-text="webInfo.classifyCount"
								style="margin-top: 5px"
							></div>
						</router-link>
					</el-col>
				</el-row>
			</div>
			<div class="admin-gitee" @click="toTarget(admin.gitee)">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-mayun"></use>
				</svg>
				<span>&emsp;我的Gitee</span>
			</div>
			<div class="admin-other">
				<img
					v-for="other in admin.other"
					:key="other.name"
					:src="other.icon"
					:alt="other.name"
					:title="other.name"
					@click="toTarget(other.href)"
				/>
			</div>
		</el-card>
		<el-card shadow="hover" class="card">
			<div class="card-title">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-gonggao"></use>
				</svg>
				<span>公告</span>
			</div>
			<div class="card-content">
				<div
					v-for="(notice, index) in webInfo.notices"
					:key="index"
					v-html="notice"
				></div>
			</div>
		</el-card>
		<el-card shadow="hover" class="card">
			<div class="card-title">
				<i class="iconfont icon-biaoqian my-icon"></i>
				<span>分类</span>
			</div>
            <div class="card-content">
				<div v-for="(item, index) in categorys" :key="index" class="category" @click="toA('/category/' + item.id)">
					<div v-text="item.name"></div>
					<div v-text="item.count"></div>
				</div>
			</div>
		</el-card>
		<el-card shadow="hover" class="card">
			<div class="card-title">
				<i class="iconfont icon-biaoqian my-icon"></i>
				<span>标签</span>
			</div>
            <div class="card-content">
			<wordCloud :datas="tags"></wordCloud>
			</div>
		</el-card>
		<el-card shadow="hover" class="card">
			<div class="card-title">
				<i class="my-icon el-icon-info"></i>
				<span>网站资讯</span>
			</div>
            <div class="card-content">
                <div class="info-item">
                    <div>文章数目：</div>
                    <div v-text="webInfo.articleCount"></div>
                </div>
                <div class="info-item">
                    <div>以运行时间：</div>
                    <div>{{webInfo.runTime}}&emsp;天</div>
                </div>
                <div class="info-item">
                    <div>文章总字数：</div>
                    <div>{{webInfo.AllCount}}&emsp;K</div>
                </div>
                <div class="info-item">
                    <div>本站访客数：</div>
                    <div v-text="webInfo.articleCount"></div>
                </div>
                <div class="info-item">
                    <div>本站总访问量：</div>
                    <div v-text="webInfo.accessCount"></div>
                </div>
                <div class="info-item">
                    <div>最后更新时间：</div>
                    <div v-text="webInfo.lastUpdate"></div>
                </div>
            </div>
		</el-card>
	</div>
</template>

<script>
import wordCloud from "@/components/wordCloud"
import { getTags, getCategory } from "@/api/base"
import { getAdmin, getWebInfo } from "@/api/admin";

export default {
	components: {
		wordCloud
	},
	data() {
		return {
			admin: {
				avatar: "",
				name: "",
				description: "",
				gitee: "",
				other: [],
			},
			webInfo: {
				articleCount: 0,
				tagCount: 0,
				classifyCount: 0,
				notices: [],
				runTime: "1",
                AllCount: 0,
                personCount: 0,
				accessCount: 0,
				lastUpdate: "",
			},
			tags: [],
			categorys: []
		};
	},
	created() {
		getAdmin((res) => {
			if (res.success) {
				this.admin = res.data.item;
				try{
					this.admin.other = JSON.parse(this.admin.other);
				}catch{
					console.log('额外连接解析错误')
				}
			}
		});
		getWebInfo((res) => {
			if (res.success) {
				this.webInfo = res.data.item;
			}
		});
		getTags(res=>{
			if (res.success) {
				this.tags = res.data.items;
			}
		})
		getCategory(res=>{
			if (res.success) {
				this.categorys = res.data.items;
			}
		})
	},
	methods: {
		toTarget(target) {
			window.open(target);
		},
		toA(href){
			this.$router.push(href)
		}
	},
};
</script>

<style scoped>
a {
	color: #000000;
	text-decoration: none;
}
.card {
	margin-top: 20px;
}
.admin-name {
	margin-top: 20px;
	font-size: 20px;
	color: #409eff;
}
.admin-describe {
	font-size: 14px;
	margin-top: 5px;
}
.admin-web {
	margin-top: 20px;
}
.admin-gitee {
	margin-top: 20px;
	background-color: #52a6fa;
	color: #ffffff;
	line-height: 33px;
	height: 100%;
	font-size: 14px;
	cursor: pointer;
}
.admin-gitee:hover,
.admin-gitee:focus,
.admin-gitee:active {
	-webkit-transition: all 0.5s linear;
	-moz-transition: all 0.5s linear;
	-o-transition: all 0.5s linear;
	transition: all 0.5s linear;
	background-color: #303643;
}

.admin-other {
	margin-top: 20px;
	height: 14px;
	margin-bottom: 20px;
	cursor: pointer;
}
.admin-other img {
	border-radius: 16px;
}
.card-title {
	font-size: 20px;
}
.card-title svg {
	font-size: 25px;
	animation-name: scaleDraw; /*关键帧名称*/
	animation-timing-function: ease-in-out; /*动画的速度曲线*/
	animation-iteration-count: infinite; /*动画播放的次数*/
	animation-duration: 2s; /*动画所花费的时间*/
}
.card-title span {
	margin-left: 10px;
}

@keyframes scaleDraw {
	/*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
	0% {
		transform: scale(1); /*开始为原始大小*/
	}
	25% {
		transform: scale(1.3); /*放大1.3倍*/
	}
	50% {
		transform: scale(1);
	}
	75% {
		transform: scale(1.3);
	}
}

.card-content {
	margin-top: 20px;
}
.card-content div {
	padding: 5px 0px;
}

.my-icon {
	font-size: 20px;
}

.info-item{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}

.category{
	display: flex;
	justify-content: space-between;
}
.category>div{
	padding: 5px 5px;
}
.category:hover{
	background-color: rgba(0, 0, 0, 0.1);
	cursor: url(http://esion.xyz/assets/pointer/link.png), pointer;
}
</style>