<template>
	<transition name="el-fade-in">
		<div
			v-if="visible"
			:style="{
				right: styleRight,
				bottom: styleBottom,
			}"
			class="my-backtop"
      @click="handClick"
		>
			<slot>
				<el-icon name="caret-top"></el-icon>
			</slot>
		</div>
	</transition>
</template>

<script>
import throttle from "throttle-debounce/throttle";

export default {
	name: "fixbar",

	props: {
		visibilityHeight: {
			type: Number,
			default: 200,
		},
		target: [String],
		right: {
			type: Number,
			default: 40,
		},
		bottom: {
			type: Number,
			default: 40,
		},
	},

	data() {
		return {
			el: null,
			container: null,
			visible: false,
		};
	},

	computed: {
		styleBottom() {
			return `${this.bottom}px`;
		},
		styleRight() {
			return `${this.right}px`;
		},
	},

	mounted() {
		this.init();
		this.throttledScrollHandler = throttle(300, this.onScroll);
		this.container.addEventListener("scroll", this.throttledScrollHandler);
	},

	methods: {
		init() {
			this.container = document;
			this.el = document.documentElement;
			if (this.target) {
				this.el = document.querySelector(this.target);
				if (!this.el) {
					throw new Error(`target is not existed: ${this.target}`);
				}
				this.container = this.el;
			}
		},
		onScroll() {
			const scrollTop = this.el.scrollTop;
			this.visible = scrollTop >= this.visibilityHeight;
    },
    handClick(){
      this.$emit('click')
    }
	},

	beforeDestroy() {
		this.container.removeEventListener(
			"scroll",
			this.throttledScrollHandler
		);
	},
};
</script>
<style scoped>
.my-backtop {
	border-radius: 0%;
	background-color: transparent;
	box-shadow: 0px 0px 0px;
	width: 30px;
	height: 30px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	cursor: pointer;
	z-index: 5;
	color: #409eff;
}
</style>