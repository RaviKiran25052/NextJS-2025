type PageProps = { params: { bid: string } };

// export function generateMetadata({ params }: PageProps) {
// 	return {
// 		title: `Blog Post - ${params.bid}`,
// 		description: `Read our latest blog post about ${params.bid}.`,
// 	};
// }

export default function BlogPost({ params }: PageProps) {
	return (
		<div>
			<h1>Blog Post {params.bid}</h1>
			<p>Details about blog post {params.bid}.</p>
		</div>
	);
}
