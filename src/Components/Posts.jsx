import React from "react";

function Posts({ posts, loading }) {
	if (loading) {
		return (
			<div className="spinner-border text-dark text-center" role="status">
				<span className="sr-only text-center">Loading...</span>
			</div>
		);
	}
	return (
		<ul className="list-group mb-4">
			{posts.map((post) => {
				return (
					<li key={post.id} className="list-group-item">
						{post.title}
					</li>
				);
			})}
		</ul>
	);
}

export default Posts;
