<template>
	<div class="basket center">
		<h1 class="heading-h1">Корзина</h1>

		<div class="basket-products">
			<div class="basket-products__head">
				<span>Изображение</span>
				<span>Название</span>
				<span>Цена</span>
				<span>Удалить</span>
			</div>
			<div v-for="(product, i) in basket" :key="i" class="basket-product">
				<img
					:src="'https://raw.githubusercontent.com/wowankz/static/master/shop/img/' + product.img"
					alt=""
					class="basket-product__img"
				/>
				<h3 class="basket-product__name">
					{{ product.name }}<span v-show="product.count > 1">({{ product.count }} шт)</span>
				</h3>

				<div class="basket-product__price">{{ getSum(product) }}р</div>

				<font-awesome-icon
					icon="times-circle"
					@click="updateBasket(product, 'del')"
					class="basket-product__button "
				></font-awesome-icon>
			</div>
		</div>
		<div class="basket-order" >
			<button :class="{ 'disabled-order': count <= 0 }" class="basket-order__button">Заказать</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		name: 'Basket',

		computed: {
			...mapGetters({ basket: 'getBasket' }),
			count() {
				return this.basket.length;
			},
		},

		methods: {
			updateBasket(product, type) {
				this.$store.dispatch('updateBasket', { type, product });
			},

      getSum(product){
        console.log(product.price,parseFloat(product.price));
       return (parseFloat(product.price) * product.count).toFixed(2)
      },


		},
	};
</script>

<style lang="scss" scoped>
	.basket {
		padding-top: 30px;
		padding-bottom: 30px;
		&-order {
			display: flex;
			width: 100%;
			justify-content: flex-end;
		}
		&-order__button {
			background: #ffffff;
			border: 1px solid #848484;
			box-sizing: border-box;
			border-radius: 4px;
			padding: 10px 15px;
			margin-top: 25px;
			cursor: pointer;
			transition: 0.3s;

			&:hover {
				box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
			}
		}
	}

	.basket-products {
		display: flex;
		flex-direction: column;
		grid-gap: 5px;
		margin-top: 25px;
		&__head {
			display: grid;
			grid-template-columns: 120px 1fr 100px 80px;
			justify-content: center;
			align-items: center;
			justify-items: center;
			grid-gap: 8px;
			padding: 5px;
		}
	}
	.basket-product {
		display: grid;
		grid-template-columns: 120px 1fr 100px 80px;
		justify-content: center;
		align-items: center;
		justify-items: center;
		grid-gap: 8px;
		padding: 10px;
		background: #ffffff;
		border: 1px solid #ebebeb;

		&__img {
			width: 100%;
			height: 80px;
			object-fit: cover;
			object-position: top;
			border-radius: 4px;
		}

		&__name {
			font-weight: bold;
			font-size: 18px;
			line-height: 20px;
			color: #222222;
		}

		&__price {
			font-weight: bold;
			font-size: 18px;
			line-height: 20px;
			color: #222222;
		}

		&__button {
			color: tomato;
			cursor: pointer;
			font-size: 24px;
			border-radius: 50%;
			transition: 0.3s;

			&:hover {
				box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
				transform: scale(1.1);
			}
		}
	}

	.disabled-order {
		background-color: #eee;
		pointer-events: none;
	}
</style>
