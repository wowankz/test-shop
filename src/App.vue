<template>
	<div id="app">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import Footer from '@/components/Footer';
	export default {
		name: 'App',
		components: { Header, Footer },
	};
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto Slab', serif;
	}
	#app {
		height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
	.center {
		width: 100%;
		padding-right: calc((100% - 1400px) / 2);
		padding-left: calc((100% - 1400px) / 2);

		@media (max-width: 1399.98px) {
			padding-right: calc((100% - 1200px) / 2);
			padding-left: calc((100% - 1200px) / 2);
		}

		@media (max-width: 1199.98px) {
			padding-right: calc((100% - 992px) / 2);
			padding-left: calc((100% - 992px) / 2);
		}

		@media (max-width: 991.98px) {
			padding-right: calc((100% - 768px) / 2);
			padding-left: calc((100% - 768px) / 2);
		}

    @media (max-width: 767.98px) {
			padding-right: 15px;
			padding-left: 15px
		}
	}

	.disabled {
		pointer-events: none;
		opacity: 0.8;
	}

	.disabled-grey {
		pointer-events: none;
		opacity: 0.8;
		background-color: #eeeeee !important;
	}

	.heading-h1 {
		font-weight: 800;
		font-size: 36px;
		line-height: 53px;
		letter-spacing: 0.01em;
		color: #000000;
	}

	.heading-h2 {
		font-weight: 800;
		font-size: 28px;
		line-height: 33px;
		letter-spacing: 0.01em;
		color: #000000;
	}
</style>
