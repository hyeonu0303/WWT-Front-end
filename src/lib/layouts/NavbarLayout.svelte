<script>
	import Logo from '$lib/assets/image/logo.png';
</script>

<div class="wrapper">
	<nav>
		<a href="/">
			<img class="logo" src={Logo} alt="Horizon Logo Image" />
		</a>
	</nav>
	<div class="contents">
		<slot />
	</div>
</div>

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
		border-bottom: 1px solid black;
		background: white;
		text-align: center;
	}
	.logo {
		height: 70px;
		padding: 10px 0px;
	}
</style>
