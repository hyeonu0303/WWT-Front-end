<script>
	import Search from '$lib/assets/image/search.png';
</script>

<div class="wrapper">
	<div class="cover">
		<div class="searchBox">
			<div class="inputWrapper">
				<input class="search" />
			</div>
			<div class="searchButton">
				<img width="32" src={Search} alt="search" />
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		background-image: url('$lib/assets/image/cat.jpg');
		background-size: cover;
		position: relative;
	}
	.cover {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: linear-gradient(45deg, rgba(234, 56, 98, 0.6), rgba(249, 221, 198, 0.6));
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.searchBox {
		width: 1000px;
		max-width: 80%;
		height: 80px;
		/* background-color: rgb(234, 56, 98); */
		border: 8px solid rgb(234, 56, 98);
		display: flex;
	}

	.inputWrapper {
		flex: 1;
	}
	.search {
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		font-size: 24px;
		padding: 8px;
		color: white;
		font-weight: bold;
		text-align: center;
		background: rgba(234, 56, 98, 0.2);
	}

	.searchButton {
		width: 64px;
		background-color: rgb(234, 56, 98);
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
