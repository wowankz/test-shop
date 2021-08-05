<template>
	<header class="header center">
		<img :src="getLogo()" alt="logo" class="logo" />
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
		<div class="header__basket" @click="goBasket()">
			<font-awesome-icon
				:icon="count < 1 ? 'shopping-cart' : 'cart-plus'"
				class="header__basket-icon"
				:style="{ color: count < 1 ? ' #9e9e9e' : '#f06d4c' }"
			/>
			<span v-if="count > 0" class="header__basket-count">{{ count }}</span>
		</div>
	</header>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		methods: {
goBasket(){
        this.$router.push({name:'Basket'})
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
		&__basket {
			position: relative;
			cursor: pointer;
			transition: .3s;
			&:hover{
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
		width: 80px;
		height: 60px;
	}
	.nav {
		display: flex;
		justify-content: flex-start;
		&__link {
			text-decoration: none;
			padding: 5px;
		}
	}
	.contact {
		display: flex;
		justify-content: space-between;
		&__phone {
			padding: 10px;
		}

		&__phone-label {
			font-size: 12px;
			line-height: 18px;
			color: #8b8b8b;
		}

		&__phone-number {
			font-weight: bold;
			font-size: 16px;
			line-height: 24px;
			color: #222222;
		}

		&__email {
			padding: 10px;
		}

		&__email-label {
			font-size: 12px;
			line-height: 18px;
			color: #8b8b8b;
		}

		&__email-address {
			font-weight: bold;
			font-size: 16px;
			line-height: 24px;
			color: #222222;
		}
	}
</style>
