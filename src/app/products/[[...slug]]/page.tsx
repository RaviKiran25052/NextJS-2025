export default async function ProdPage({params}: {params: Promise<{slug: string}>}) {
	const slug = (await params).slug;

	return (
		<div>
			<h1>Products</h1>
			<p>
				{slug
					? `Current path: ${slug}`
					: 'Welcome to the documentation home page.'}
			</p>
		</div>
	);
}
