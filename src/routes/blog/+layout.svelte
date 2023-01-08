<script>
	import '$lib/styles/blog.css';
	let featLinks = [
		{ url: '/about', title: 'About' },
		{ url: '/blog/hello-world', title: 'Hello World' }
	];
</script>

<main>
	<div class="row">
		<div class="col-8">
			<slot />
		</div>
		<div class="col-4">
			<div class="sidebar-content">
				<p>
					<strong>Featured Links</strong>
				</p>

				<ul>
					{#each featLinks as featLink}
						<li>
							<a href={featLink.url}>
								{featLink.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</main>
