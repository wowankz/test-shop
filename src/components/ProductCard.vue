<template>
	<div :class="{ 'green-border': count > 0 }" class="product-card">
		<img :src="'https://raw.githubusercontent.com/wowankz/static/master/shop/img/' + product.img" alt="" class="product-card__img" />
		<h3 class="product-card__name">{{ product.name }}</h3>
		<p class="product-card__desc">{{ product.desc }}</p>
		<div class="product-card__price">Цена: {{ product.price }}р</div>
		<div class="product-card__count">В корзине {{ count }} шт</div>
		<div class="product-card__buttons">
			<button
				@click="updateBasket(product, 'add')"
				class="product-card__button product-card__button_add"
				:class="{ disabled: count > 98 }"
			>
				Добавить
			</button>
			<button
				@click="updateBasket(product, 'del')"
				class="product-card__button product-card__button_del"
				:class="{ disabled: count == 0 }"
			>
				Удалить
			</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		name: 'ProductCard',
		props: {
			product: {
				type: Object,
				default: {},
			},
		},

		methods: {
			updateBasket(product, type) {
				this.$store.dispatch('updateBasket', { type, product });
			},
		},
		computed: {
			...mapGetters({ basket: 'getBasket' }),

			count() {
				const item = this.basket.find((item) => item.id == this.product.id);
				if (typeof item === 'undefined') return 0;
				return item.count;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.product-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: #ffffff;
		border: 1px solid #ebebeb;
		box-sizing: border-box;
		border-radius: 12px;
		padding: 10px;
		transition: 0.3s;
		&__img {
			width: 100%;
			height: 180px;
			object-fit: cover;
			background: #f5f5f5;
			border-radius: 6px;
		}

		&__name {
			font-weight: bold;
			font-size: 18px;
			line-height: 20px;
			color: #222222;
			padding-top: 20px;
		}

		&__desc {
			font-size: 14px;
			color: #666666;
			padding: 10px 0;
		}

		&__price {
			font-weight: bold;
			font-size: 24px;
			line-height: 20px;
			color: #222222;
		}

		&__count {
			padding-top: 10px;
			font-size: 14px;
			line-height: 24px;
			letter-spacing: 0.01em;
			color: #333333;
		}

		&__buttons {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding-top: 15px;
		}

		&__button {
			cursor: pointer;
			outline: none;
			padding: 10px 15px;
			box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
			border-radius: 4px;
			border: 1px solid #eee;
			color: #444444;
			transition: 0.3s;
			&:hover {
				box-shadow: none;
				color: #ffffff;
			}

			&:active {
				box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.15);
				color: #444444;
			}
			&_add {
				background: linear-gradient(82.88deg, #ffbb32 0%, #ffc85a 99.84%);
			}

			&_del {
				background: linear-gradient(82.88deg, #f35a55 0%, #f06d4c 99.84%);
			}
		}

		&:hover {
			transform: scale(1.02);
		}
	}

	.green-border {
		border-color: green;
	}
</style>
