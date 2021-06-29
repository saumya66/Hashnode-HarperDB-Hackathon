import PostArticle from "./post-article/PostArticle.component";
import FeedNavbar from "./feed-navbar/FeedNavbar.component";
import PostComp from "./post-comp/PostComponent.component";
import "./main-feed.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import harperLogo from "./harper-logo.png";
import React, { Suspense } from "react";
// const PostComp = React.lazy(() =>
// 	import("./post-comp/PostComponent.component")
// );
const Feed = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(async () => {
		const res = await axios.post("https://hashnode-harper.herokuapp.com/data");
		await setData(res.data);
		await setLoading(false);
	}, []);
	return (
		<div className="feed">
			<PostArticle />
			<FeedNavbar />
			{loading && (
				<div className="loading">
					<img src={harperLogo} height="80" alt="harperdb-logo" />
					<h5>Loading feed...</h5>
				</div>
			)}
			{!loading &&
				data.map((post) => (
					<PostComp
						id={post.id}
						name={post.name}
						date={post.date}
						heading={post.heading}
						link={post.link}
						desc={post.desc}
						likes={post.like}
						comments={post.comments}
						type={post.type}
						thumbnailImg={post.thumbnailImg}
						userImg={post.userImg}
					/>
				))}
		</div>
	);
};

export default Feed;
