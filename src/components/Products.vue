<template>
	<div class="products">
		<div v-if="products.length <= 0" class="products-loading">Loading...</div>
		<template v-else v-for="(product, i) in products">
			<ProductCard :key="i" :product="product" />
		</template>
	</div>
</template>

<script>
	import ProductCard from '@/components/ProductCard';
	import { mapGetters } from 'vuex';
	export default {
		name: 'Product',
		components: { ProductCard },

		created() {
			this.$store.dispatch('loadProducts');
		},

		computed: {
			...mapGetters({ products: 'getProducts', basket: 'getBasket' }),
		},
	};
</script>

<style lang="scss" scoped>
	.products {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: space-between;
		grid-gap: 15px;
		padding-top: 20px;

		@media (max-width: 1199.98px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (max-width: 991.98px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 575.98px) {
			grid-template-columns: 1fr;
		}

		&-loading {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
	}
</style>
