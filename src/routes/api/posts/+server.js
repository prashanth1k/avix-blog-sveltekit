import { json } from '@sveltejs/kit';

export const GET = async () => {
	console.log('GET invoked..');
	const allPosts = await fetchPosts();
	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});
	console.log('Posts:', sortedPosts);
	console.log('.. GET done');

	return json(sortedPosts);
};

async function fetchPosts() {
	const postFiles = import.meta.glob('/src/routes/blog/*.md');
	const posts = Object.entries(postFiles);

	const allPosts = await Promise.all(
		posts.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
}
