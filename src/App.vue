<template>
	<div id="app">
		<Header />
		<router-view />
    <Footer/>
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
  #app{
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
	.center {
		width: 100%;
		padding-right: calc((100% - 1024px) / 2);
		padding-left: calc((100% - 1024px) / 2);
	}

  .disabled{
    pointer-events: none;
    opacity: 0.8;
  }

	.heading-h1 {
		font-weight: 800;
		font-size: 36px;
		line-height: 53px;
		letter-spacing: 0.01em;
		color: #000000;
	}
</style>
