<template>
	<el-col :span="24">
		<div id="article-main">
			<div id="article-title">
				<el-row>
					<el-col :span="2" style="min-height: 1px"></el-col>
					<el-col :span="20">
						<div
							style="font-size: 34px"
							v-text="article.title"
						></div>
						<div style="font-size: 14px">
							<div style="margin-top: 10px">
								<span><i class="el-icon-date"></i> 发表于</span>
								<span v-text="article.createTime"></span>
								<span> | </span>
								<span
									><i class="el-icon-refresh"></i>
									更新于</span
								>
								<span v-text="article.updateTime"></span>
							</div>
							<div>
								<span
									><i class="el-icon-document"></i>
									字数总计:</span
								>
								<span v-text="article.count"></span>
								<span> | </span>
								<span
									><i class="el-icon-time"></i>
									阅读时长:</span
								>
								<span>{{ article.readTime }}分钟</span>
								<span> | </span>
								<span
									><i class="el-icon-view"></i> 阅读量:</span
								>
								<span v-text="article.viewCount"></span>
								<span> | </span>
								<span
									><i class="el-icon-chat-line-square"></i>
									评论数:</span
								>
								<span v-text="article.commentCount"></span>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
		<el-col
			:span="6"
			:xs="1"
			:sm="2"
			:md="3"
			:lg="4"
			:xl="6"
			style="min-height: 1px"
		>
		</el-col>
		<el-col :span="12" :xs="22" :sm="20" :md="18" :lg="16" :xl="12">
			<el-card shadow="always">
				<div class="content">
					<!-- 文章内容 -->
					<div
						style="margin-top: 20px"
						v-html="article.content"
					></div>
					<div class="export-info">
						<div>
							<span class="export-title">文章作者：</span>
							<span
								><a href="mailto:m17762618644@163.com"
									>落雨不悔</a
								></span
							>
						</div>
						<div>
							<span class="export-title">文章链接：</span>
							<span><a :href="href" v-text="href"></a></span>
						</div>
						<div>
							<span class="export-title">版权声明：</span>
							<span
								>本博客所有文章除特别声明外，均采用<a
									href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
								>
									CC BY-NC-SA 4.0 </a
								>许可协议。转载请注明来自<a
									href="mailto:m17762618644@163.com"
								>
									落雨不悔的博客</a
								>！</span
							>
						</div>
					</div>
					<div class="share">
						<a href="javascript:;"
							><i
								class="layui-icon layui-icon-login-wechat"
								style="color: #83d942"
							></i>
						</a>
						<a href="javascript:;"
							><i
								class="layui-icon layui-icon-login-qq"
								style="color: #26cbfe"
							></i>
						</a>
						<a href="javascript:;"
							><i
								class="layui-icon layui-icon-login-weibo"
								style="color: #ed221b"
							></i>
						</a>
					</div>
					<el-divider content-position="left">我是分割线</el-divider>
					<div class="comment">
						<div class="comment-title">
							<i class="el-icon-chat-line-square"></i> 评论
						</div>
						<el-card shadow="always" class="comment-content">
							<el-row>
								<el-col :span="8">
									<el-input
										v-model="comment.nickname"
										placeholder="昵称"
									></el-input>
								</el-col>
								<el-col :span="8">
									<el-input
										v-model="comment.email"
										placeholder="邮箱（必填）"
									></el-input>
								</el-col>
								<el-col :span="8">
									<el-input
										v-model="comment.website"
										placeholder="个人网站（选填）"
									></el-input>
								</el-col>
							</el-row>
							<textarea
								id="comment"
								placeholder="1、昵称可自定义，大于3个字符即可。2、邮箱建议填写qq邮箱，可以收到评论回复，且评论区头像就可以采用QQ头像。"
							></textarea>
							<div align="right" style="margin-top: 10px">
								<el-button type="primary" @click="submitComment"
									>提交</el-button
								>
							</div>
						</el-card>
					</div>
					<div class="comment">
						<div
							class="comment-title"
							style="color: #49b1f5; margin-bottom: 40px"
						>
							<span v-text="comments.length"></span>
							<span> 评论</span>
						</div>
						<el-card
							shadow="always"
							style="margin-top: 20px"
							v-for="(comment, index) in comments"
							:key="index"
						>
							<el-row>
								<el-col
									:span="2"
									style="
										text-align: right;
										padding-right: 5px;
									"
								>
									<el-image
										class="comment-image"
										:src="
											'https://q2.qlogo.cn/headimg_dl?dst_uin=' +
											comment.email +
											',1583720084,&spec=100'
										"
									></el-image>
								</el-col>
								<el-col :span="22" style="padding-left: 5px">
									<div>
										<a
											href="javascript:;"
											v-text="comment.nickname"
										></a>
										<el-tag
											type="info"
											size="mini"
											style="margin-left: 5px"
											v-if="comment.type == 1"
										>
											<i
												class="layui-icon layui-icon-username"
											></i>
											<span>访客</span>
										</el-tag>
										<el-tag
											type="success"
											size="mini"
											style="margin-left: 5px"
											v-else-if="comment.type == 2"
										>
											<i
												class="layui-icon layui-icon-username"
											></i>
											<span>小伙伴</span>
										</el-tag>
										<el-tag
											type="warning"
											size="mini"
											style="margin-left: 5px"
											v-else-if="comment.type == 3"
										>
											<i
												class="layui-icon layui-icon-username"
											></i>
											<span>博主</span>
										</el-tag>
										<el-tag
											size="mini"
											style="margin-left: 5px"
										>
											<i
												class="layui-icon layui-icon-website"
											></i>
											<span
												v-text="comment.brower"
											></span>
										</el-tag>
										<el-tag
											size="mini"
											style="margin-left: 5px"
										>
											<i
												class="layui-icon layui-icon-windows"
											></i>
											<span
												v-text="comment.system"
											></span>
										</el-tag>
									</div>
									<div
										style="
											display: flex;
											justify-content: space-between;
											margin-top: 5px;
										"
									>
										<div
											style="
												color: #49b1f5;
												font-size: 14px;
											"
											v-text="comment.createTime"
										></div>
										<div>
											<el-button
												size="mini"
												@click="reply(comment)"
												>回复</el-button
											>
										</div>
									</div>
									<div
										style="margin-top: 10px"
										v-html="comment.content"
									></div>
								</el-col>
							</el-row>
							<el-row
								v-if="comment.reply"
								style="margin-top: 40px"
							>
								<el-col
									:span="2"
									:offset="1"
									style="
										text-align: right;
										padding-right: 5px;
									"
								>
									<el-image
										class="comment-image-reply"
										:src="
											'https://q2.qlogo.cn/headimg_dl?dst_uin=' +
											comment.reply.email +
											',1583720084,&spec=100'
										"
									></el-image>
								</el-col>
								<el-col :span="21" style="padding-left: 5px">
									<div>
										<a
											href="javascript:;"
											v-text="comment.reply.nickname"
										></a>
										<el-tag
											type="info"
											size="mini"
											style="margin-left: 5px"
											v-if="comment.reply.type == 1"
										>
											<i
												class="layui-icon layui-icon-username"
											></i>
											<span>访客</span>
										</el-tag>
										<el-tag
											type="success"
											size="mini"
											style="margin-left: 5px"
											v-else-if="comment.reply.type == 2"
										>
											<i
												class="layui-icon layui-icon-username"
											></i>
											<span>小伙伴</span>
										</el-tag>
										<el-tag
											type="warning"
											size="mini"
											style="margin-left: 5px"
											v-else-if="comment.reply.type == 3"
										>
											<i
												class="layui-icon layui-icon-username"
											></i>
											<span>博主</span>
										</el-tag>
										<el-tag
											size="mini"
											style="margin-left: 5px"
										>
											<i
												class="layui-icon layui-icon-website"
											></i>
											<span
												v-text="comment.reply.brower"
											></span>
										</el-tag>
										<el-tag
											size="mini"
											style="margin-left: 5px"
										>
											<i
												class="layui-icon layui-icon-windows"
											></i>
											<span
												v-text="comment.reply.system"
											></span>
										</el-tag>
									</div>
									<div
										style="
											display: flex;
											justify-content: space-between;
											margin-top: 5px;
										"
									>
										<div
											style="
												color: #49b1f5;
												font-size: 14px;
											"
											v-text="comment.reply.createTime"
										></div>
										<div>
											<el-button
												size="mini"
												@click="reply(comment.reply)"
												>回复</el-button
											>
										</div>
									</div>
									<div style="margin-top: 10px">
										<a :href="comment.reply.target.website">
											<span>@</span>
											<span
												v-text="
													comment.reply.target
														.nickname
												"
											></span>
										</a>
										<span>, </span>
										<span
											v-html="comment.reply.content"
										></span>
									</div>
								</el-col>
							</el-row>
						</el-card>
					</div>
				</div>
			</el-card>
		</el-col>
	</el-col>
</template>

<script>
import { findDimensions } from "@/utils/window";
import $ from "jquery";
import { getArticle } from "@/api/article";
import { getComment } from "@/api/comment";
import hljs from "highlight.js";
import "highlight.js/styles/dracula.css";

let isAdd = true;

const highlightCode = () => {
	const preEl = document.querySelectorAll("pre");

	preEl.forEach((el) => {
		hljs.highlightBlock(el);
	});

	if (preEl.length > 0 && isAdd) {
		$("code").each(function () {
			$(this).html(
				"<ol><li>" +
					$(this).html().replace(/\n/g, "\n</li><li>") +
					"\n</li></ol>"
			);
		});
		isAdd = false;
	}
	console.log(preEl.length, isAdd);

	preEl.forEach((pre) => {
		pre.addEventListener("contextmenu", function (e) {
			let text = e.currentTarget.innerText;
			window.layer.open({
				type: 1,
				title: "代码",
				content:
					"<textarea id='copyCode' style='width: 99%;height: 97%;border-color: #ffffff;'> " +
					text +
					" </textarea>",
				area: ["800px", "350px"],
			});
			$("#copyCode").select();
			e.preventDefault();
		});
	});
};

export default {
	data() {
		return {
			winWidth: 0,
			winHeight: 0,
			href: "",
			article: {
				title: "",
				createTime: "",
				updateTime: "",
				count: 0,
				readTime: 0,
				viewCount: 0,
				commentCount: 0,
				content: "",
			},
			catalog: [],
			catelogId: -1,
			comment: {
				nickname: "",
				email: "",
				website: "",
				content: "",
			},
			editIndex: -1,
			replyIndex: -1,
			replyDialogIndex: -1,
			comments: [],
			total: 0,
		};
	},
	created() {
		// 获取文章信息
		this.href = window.location.href;
		// 获取文章信息
		getArticle((res) => {
			if (res.success) {
				this.article = res.data.article;
				this.catalog = res.data.catalog;
				this.createCatalog();
			}
		});
		getComment((res) => {
			if (res.success) {
				this.comments = res.data.items;
				this.total = res.data.total;
			}
		});
	},
	mounted() {
		// 监听窗口大小
		this.getWindow();
		window.onresize = this.getWindow;
		// 增加复制监听器
		document.addEventListener("copy", (e) => {
			let node = document.createElement("div");
			// cloneContents方法把范围（Range）的内容复制到一个DocumentFragment对象
			node.appendChild(
				window.getSelection().getRangeAt(0).cloneContents()
			);
			let copyInfo = node.innerText;
			if (e.path[0].value) {
				return;
			}
			let link =
				"\n\n\n文章作者：落雨不悔\n文章链接：http://localhost:8080/#/article/1\n版权声明：本博客所有文章除特别声明外，均采用 CC BY-NC-SA 4.0 许可协议。转载请注明来自 落雨不悔的博客！";
			copyInfo = copyInfo + link;

			if (e.clipboardData) {
				e.clipboardData.setData("text/plain", copyInfo);
			} else if (window.clipboardData) {
				return window.clipboardData.setData("text", copyInfo);
			}
			e.preventDefault();
			e.stopPropagation();
		});

		// 构建评论
		// 应该加入定时函数，查找class => layui-layedit
		let that = this;
		let interval = setInterval(() => {
			if (window.layedit && $(".layui-layedit").length == 0) {
				that.editIndex = window.layedit.build("comment", {
					height: 180, //设置编辑器高度
					hideTool: ["image"],
				}); //建立编辑器
				clearInterval(interval);
			}
		}, 100);
		highlightCode();
		// 增加复制事件
		// 给每一个pre设置事件
	},
	updated() {
		highlightCode();
		let that = this;
		if (window.layedit && that.editIndex == -1) {
			that.editIndex = window.layedit.build("comment", {
				height: 180, //设置编辑器高度
				hideTool: ["image"],
			}); //建立编辑器
		}
		if (this.article.content && this.article.content.length > 0) {
			// 有内容，增加事件
			$("img").on("click", function (e) {
				window.layer.open({
					type: 1,
					title: false,
					closeBtn: 0,
					area: ["auto"],
					skin: "layui-layer-nobg", //没有背景色
					shadeClose: true,
					content:
						'<img src="' + $(e.currentTarget).attr("src") + '" />',
				});
			});
		}
	},
	destroyed() {
		$("img").unbind("click");
		isAdd = true;
	},
	methods: {
		getWindow() {
			findDimensions((winWidth, winHeight) => {
				this.winWidth = winWidth;
				this.winHeight = winHeight;
			});
			$("#article-title").css("width", this.winWidth);
			$("#article-main").css("width", this.winWidth);
			let h = this.winHeight / 3;
			if (h > 152) {
				$("#article-title").css("padding-top", h - 23);
				$("#article-main").css("height", h * 2 - 92);
			}

			this.$parent.isSm = this.winWidth < 768;
		},
		/**
		 * 创建目录
		 */
		createCatalog() {},
		/**
		 * 提交评论
		 */
		submitComment() {
			this.comment.content = window.layedit.getContent(this.editIndex);
			console.log(this.comment);
			this.comment = {
				nickname: "",
				email: "",
				website: "",
				content: "",
			};
		},
		reply(comment) {
			// 打开对话框
			if (this.replyDialogIndex != -1) {
				window.layer.close(this.replyDialogIndex);
				this.replyDialogIndex = -1;
			}
			this.replyDialogIndex = window.layer.open({
				type: 1,
				title: "回复 " + comment.nickname,
				content:
					'<div class="layui-row">' +
					'<div class="layui-col-md4">' +
					'<input type="text" id="nickname" class="layui-input" placeholder="昵称">' +
					"</div>" +
					'<div class="layui-col-md4">' +
					'<input type="text" id="email" class="layui-input" placeholder="邮箱（必填）">' +
					"</div>" +
					'<div class="layui-col-md4">' +
					'<input type="text" id="website" class="layui-input" placeholder="个人网站（选填）">' +
					"</div>" +
					"</div>" +
					'<textarea id="reply"></textarea>' +
					'<div align="right" style="margin-top: 10px;"><button id="addReply" class="layui-btn" style="background-color: #409EFF;">提交</button></div>',
				area: ["500px", "360px"],
			});
			//建立编辑器
			let that = this;
			this.replyIndex = window.layedit.build("reply", {
				height: 180, //设置编辑器高度
				hideTool: ["image"],
			});
			// 增加评论事件
			$("#addReply").on("click", function () {
				// 获取信息
				let nickname = $("#nickname").val();
				let email = $("#email").val();
				let website = $("#website").val();
				let content = window.layedit.getContent(that.replyIndex);
				console.log(nickname, email, website, content);
				window.layer.close(that.replyDialogIndex);
				that.replyDialogIndex = -1;
			});
		},
	},
};
</script>

<style>
#article-main {
	color: #ffffff;
}
.content {
	font-size: 16px;
	padding-left: 10px;
}

.export-info {
	border: 1px solid #eeeeee;
	padding: 20px;
	margin: 40px auto 10px auto;
}
.export-title {
	font-weight: bold;
	color: #49b1f5;
}

.share {
	text-align: right;
}
.share i {
	font-size: 26px;
	padding-left: 5px;
}
.share i:hover {
	cursor: url(http://esion.xyz/assets/pointer/link.png), pointer;
}

.comment {
	margin-top: 40px;
}
.comment-title {
	font-size: 20px;
	font-weight: bold;
	color: #424242;
}
.comment-content {
	margin-top: 20px;
}
.comment-content input {
	border-color: #ffffff;
}
.comment-image {
	text-align: right;
	width: 40px;
	height: 40px;
	border-radius: 20px;
}
.comment-image-reply {
	text-align: right;
	width: 30px;
	height: 30px;
	border-radius: 15px;
}
.layui-input {
	border-color: #ffffff;
}

.hljs {
	border: 0;
	font-size: 13px;
	display: block;
	padding: 1px;
	margin: 0;
	width: 100%;
	white-space: pre-wrap;
	position: relative;
}
.hljs ol {
	list-style: decimal;
	margin: 0px 0px 0 40px !important;
	padding: 0px;
}
.hljs ol li {
	list-style: decimal-leading-zero;
	border-left: 1px solid #ddd !important;
	padding: 5px !important;
	margin: 0 !important;
	white-space: pre;
	font-family: JetBrainsMono;
}
</style>