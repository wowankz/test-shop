<template>
	<div class="catalog center">
		<h1 class="heading-h1">Каталог</h1>
    <Products />
	</div>
</template>

<script>
import Products from '@/components/Products'
	export default {
		name: 'Catalog',
    components:{Products}
	};
</script>

<style lang="scss" scoped>
	.catalog {
		padding-bottom: 20px;
		padding-top: 20px;
	}



</style>
