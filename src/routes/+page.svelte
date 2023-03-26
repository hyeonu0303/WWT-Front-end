<script>
	import Search from '$lib/assets/image/search.png';
	let text = '';

	const onSearch = () => {
		window.open(`/search?query=${text}`, '_self');
	};
</script>

<h1>MaFor</h1>
