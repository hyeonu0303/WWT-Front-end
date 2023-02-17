<script>
	import Logo from '$lib/assets/image/logo.png';
</script>

<div class="wrapper">
	<nav>
		<a class="logoArea" href="/">
			<img class="logo" alt="Horizon Logo" src={Logo} />
		</a>
	</nav>
	<div class="contents">
		<slot />
	</div>
</div>
<!-- 234.56.98 -->

<!-- 249.221.198 -->
<style>
	.contents {
		flex: 1;
		width: 100%;
		overflow: auto;
	}
	.wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	nav {
		height: 70px;
		background: linear-gradient(45deg, rgb(234, 56, 98), rgb(249, 221, 198));
	}
	.logoArea {
		background-color: white;
		display: block;
		width: 210px;
		padding: 0px 20px;
		transform: skew(-20deg);
		height: 100%;
		transition: 0.2s;
		position: relative;
	}

	.logoArea::after {
		left: 0px;
		position: absolute;
		top: 0px;
		height: 100%;
		width: 20px;
		background-color: white;
		content: '';
		transform: skew(20deg);
	}

	.logoArea:hover {
		width: 250px;
	}
	.logo {
		height: 70px;
		padding: 10px 0px;
		transform: skew(20deg);
	}
</style>
