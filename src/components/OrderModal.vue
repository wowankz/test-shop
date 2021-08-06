<template>
	<div class="order-modal">
		<div class="order-modal__box">
			<h2 class="heading-h2">Оформить заказ</h2>
			<div class="order-modal__body">
				<div class="order-modal__count">Количество товаров: {{ count }} шт</div>
				<div class="order-modal__sum">Сумма заказа: {{ totalSum }} р</div>
			</div>
			<div class="order-modal__buttons">
				<button class="order-modal__button" @click="$emit('close')">Отменить</button>
				<button class="order-modal__button" @click="$emit('close', 'done')">Оформить</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'OrderModal',
		props: {
			basket: {
				type: Array,
				default: () => [],
			},
		},

		computed: {
			count() {
				return this.basket.length;
			},

			totalSum() {
				return this.basket.reduce((acc, product) => {
					return (+acc + parseFloat(product.price) * product.count).toFixed(2);
				}, 0);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.order-modal {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgba(46, 46, 46, 0.85);
		z-index: 100;
		&__box {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			width: 50vw;
			min-height: 200px;
			background: #ffffff;
			box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
			border-radius: 6px;
			padding: 15px 10px;

			@media (max-width: 575.98px) {
				width: 90vw;
			}
		}

		&__body {
			display: flex;
			flex-direction: column;
			font-size: 22px;
			line-height: 35px;
			color: #222222;
			@media (max-width: 575.98px) {
				font-size: 18px;
			}
		}

		&__buttons {
			align-self: flex-end;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width: 100%;
		}

		&__button {
			background: #ffffff;
			border: 1px solid #d2d2d2;
			box-sizing: border-box;
			border-radius: 4px;
			padding: 10px 15px;

			&:first-child {
				margin-right: 10px;
			}

			&:hover {
				box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
				color: green;
			}

			&:active {
				box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.15);
				color: #444444;
			}
		}
	}
</style>
