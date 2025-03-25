"use client";
import { useParams } from 'next/navigation';

export default function ProdPage() {
	const { slug } = useParams < { slug?: string[] } > ();

	return (
		<div>
			<h1>Products</h1>
			<p>
				{slug
					? `Current path: ${slug.join('/')}`
					: 'Welcome to the documentation home page.'}
			</p>
		</div>
	);
}
