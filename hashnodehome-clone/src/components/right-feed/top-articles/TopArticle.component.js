import "./top-article.scss";
import UserArticleComp from "./user-article/user-article.component";
import postData from "../../main-feed/post-data";
const TopArticle = () => {
	return (
		<div className="top-article">
			<div className="top-cont">
				<div className="text-desc">
					<h5 className="heading">Top Articles</h5>
					<h5 className="last-time">Last Week</h5>
				</div>
				<div className="timeline">
					<button className="btn">
						<h5>1w</h5>
					</button>

					<button className="btn">
						<h5>1m</h5>
					</button>

					<button className="btn">
						<h5>3m</h5>
					</button>

					<button className="btn">
						<h5>6m</h5>
					</button>
				</div>
			</div>
			<div className="down-cont">
				{postData.map((post) => (
					<UserArticleComp
						userImg={post.userImg}
						comments={post.comments}
						likes={post.likes}
						heading={post.heading}
						name={post.name}
					/>
				))}
			</div>
		</div>
	);
};

export default TopArticle;
