<template>
	<header class="header center">
		<img :src="getLogo()" alt="logo" class="logo" />
		<div class="header-nav" :class="{ 'header-nav_open': isOpenMenu }">
			<nav class="nav">
				<router-link class="nav__link" to="/">Каталог</router-link>
				<router-link class="nav__link" to="/basket">Корзина</router-link>
			</nav>
			<div class="contact">
				<div class="contact__phone">
					<div class="contact__phone-label">Телефон:</div>
					<div class="contact__phone-number">8 (912) 123-45-67</div>
				</div>
				<div class="contact__email">
					<div class="contact__email-label">Почта:</div>
					<div class="contact__email-address">info@gmail.com</div>
				</div>
			</div>
		</div>
		<div class="header__basket" @click="goBasket()">
			<font-awesome-icon
				:icon="count < 1 ? 'shopping-cart' : 'cart-plus'"
				class="header__basket-icon"
				:style="{ color: count < 1 ? ' #9e9e9e' : '#f06d4c' }"
			/>
			<span v-if="count > 0" class="header__basket-count">{{ count }}</span>
		</div>
		<font-awesome-icon @click="isOpenMenu = !isOpenMenu" class="burger-button" icon="bars"></font-awesome-icon>
	</header>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {
				isOpenMenu: false,
			};
		},

		methods: {
			goBasket() {
				this.$router.push({ name: 'Basket' });
			},
			getLogo() {
				return require('@/assets/logo.png');
			},
		},

		computed: {
			...mapGetters({ basket: 'getBasket' }),
			count() {
				return this.basket.length;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 15px;
		padding-bottom: 15px;
		border: 1px solid #ebebeb;
		&-nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100%;

			@media (max-width: 767.98px) {
				position: fixed;
				top: 0;
				bottom: 0;
				left: 0;
				width: 80vw;
				padding: 20px 15px;
				flex-direction: column;
				justify-content: space-between;
				background: rgba(46, 46, 46, 0.95);
				z-index: 1000;
				transform: translateX(-2000px);
				transition: 0.5s;
				&_open {
					transform: translateX(0);
				}
			}
		}

		&__basket {
			position: relative;
			cursor: pointer;
			transition: 0.3s;
			&:hover {
				transform: scale(1.1);
			}
			&-icon {
				font-size: 36px;
			}

			&-count {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				right: -12px;
				top: -8px;
				width: 15px;
				height: 15px;
				border-radius: 50%;
				background-color: #ffc85a;
				font-size: 9px;
				font-weight: 600;
				color: #f06d4c;
			}
		}
	}
	.logo {
		width: 60px;
		height: 40px;
	}
	.nav {
		display: flex;
		justify-content: space-between;
		flex-basis: 200px;

		@media (max-width: 767.98px) {
			flex-direction: column;
			flex-basis: auto;
			font-size: 24px;
		}
		&__link {
			text-decoration: none;
			padding: 5px;
			color: green;
			border-bottom: 1px solid transparent;
			transition: 0.3s;
			&:hover {
				border-bottom: 1px solid green;
				text-shadow: 1px 1px 12px #00800052;
			}
		}
	}
	.contact {
		display: flex;
		justify-content: space-between;
		@media (max-width: 767.98px) {
			flex-direction: column;
		}
		&__phone {
			padding: 10px;
			font-size: 16px;
			@media (max-width: 767.98px) {
				font-size: 24px;
			}
		}

		&__phone-label {
			font-size: 0.8em;
			line-height: 18px;
			color: #8b8b8b;
		}

		&__phone-number {
			font-weight: bold;
			font-size: 1em;
			line-height: 24px;
			color: #222222;
			@media (max-width: 767.98px) {
				color: #ffffff;
			}
		}

		&__email {
			padding: 10px;
			font-size: 16px;
			@media (max-width: 767.98px) {
				font-size: 24px;
			}
		}

		&__email-label {
			font-size: 0.8em;
			line-height: 18px;
			color: #8b8b8b;
		}

		&__email-address {
			font-weight: bold;
			font-size: 1em;
			line-height: 24px;
			color: #222222;
			@media (max-width: 767.98px) {
				color: #ffffff;
			}
		}
	}

	.burger-button {
		transform: scale(0);
		transition: 0.3s;
		font-size: 32px;
		cursor: pointer;
		@media (max-width: 767.98px) {
			transform: scale(1);
		}
	}
</style>
