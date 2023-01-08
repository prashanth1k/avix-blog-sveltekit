<script>
	let posts;
	let promise = getPosts();

	async function getPosts() {
		console.log('blog loading..');
		const res = await fetch('http://localhost:5173/api/posts');
		posts = await res.json();
		console.log('posts', posts);
		console.log('.. blog loading done');
		return posts;
	}
</script>

<h1>Blog</h1>
<p>This is an awesome blog about sveltekit.</p>

{#await promise}
	<p>fetching posts..</p>
{:then posts}
	{#each posts as post}
		<div class="list-post"><a href={post.path}>{post?.meta?.title}</a></div>
	{/each}
{/await}
