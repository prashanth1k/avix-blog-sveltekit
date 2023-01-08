<script>
	/**
	 * @type {{ title: any; date: any; content?: any; }}
	 */
	export let data;
	const { title, date, content } = data;
</script>

<article>
	<h1>{data.title}</h1>
	<p class="subdued">Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>
