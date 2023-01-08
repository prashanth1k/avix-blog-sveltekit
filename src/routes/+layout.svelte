<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/custom.css';
</script>

<Header />

<main class="container">
	<slot />
</main>

<footer>
	<div>(c) My blog</div>
</footer>
