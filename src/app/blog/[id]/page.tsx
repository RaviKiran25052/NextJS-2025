"use client";
import { useParams } from 'next/navigation';

export default function BlogPost() {
	const { id } = useParams<{ id: string }>();

	return (
		<div>
			<h1>Blog Post {id}</h1>
			<p>Details about blog post {id}.</p>
		</div>
	);
}