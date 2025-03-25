export default async function DocsPage({params}: {params: Promise<{slug: string}>}) {
	const slug = (await params).slug;

	return (
		<div>
			<h1>Documentation</h1>
			<p>Current path: {slug ? slug : 'Home'}</p>
		</div>
	);
}
