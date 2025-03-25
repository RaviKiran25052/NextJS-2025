"use client";
import { useParams } from 'next/navigation';

export default function DocsPage() {
	const { slug } = useParams<{ slug: string[] }>();

	return (
		<div>
			<h1>Documentation</h1>
			<p>Current path: {slug ? slug.join('/') : 'Home'}</p>
		</div>
	);
}
