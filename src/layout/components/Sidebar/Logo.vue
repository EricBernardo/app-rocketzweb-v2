<template>
<div class="sidebar-logo-container" :class="{'collapse':collapse}">
	<transition name="sidebarLogoFade">
		<router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
			<img v-if="profile.company && profile.company.image_url" :src="profile.company.image_url" class="sidebar-logo">
			<h1 v-else
			    class="sidebar-title">{{ profile.company.title.substr(0, 14) + (profile.company.title.length > 14 ? '...' : null) }} </h1>
		</router-link>
		<router-link v-else key="expand" class="sidebar-logo-link" to="/">
			<img v-if="profile.company && profile.company.image_url" :src="profile.company.image_url" class="sidebar-logo">
			<h1 class="sidebar-title">{{ profile.company.title.substr(0, 14) + (profile.company.title.length > 14 ? '...' : null) }} </h1>
		</router-link>
	</transition>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['profile'])
  },
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
	transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
	opacity: 0;
}

.sidebar-logo-container {
	position: relative;
	width: 100%;
	height: 50px;
	line-height: 50px;
	background: #2b2f3a;
	text-align: center;
	overflow: hidden;

	& .sidebar-logo-link {
		height: 100%;
		width: 100%;

		& .sidebar-logo {
			width: 32px;
			height: 32px;
			vertical-align: middle;
			margin-right: 12px;
			background: #fff;
			border-radius: 3px;
			border: 1px solid #fff;
		}

		& .sidebar-title {
			display: inline-block;
			margin: 0;
			color: #fff;
			font-weight: 600;
			line-height: 50px;
			font-size: 14px;
			font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
			vertical-align: middle;
		}
	}

	&.collapse {
		.sidebar-logo {
			margin-right: 0px;
		}
	}
}
</style>
