<script>
	import 'carbon-components-svelte/css/white.css';
	import './styles.css';
	import NavbarLayout from '$lib/layouts/NavbarLayout.svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<NavbarLayout>
	<slot />
</NavbarLayout>
