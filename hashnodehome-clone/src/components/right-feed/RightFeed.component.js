import "./right-feed.scss";
import SearchComp from "./search/search.component";
import TopArticle from "./top-articles/TopArticle.component";
import BlogStats from "./blog-stats/Blog-Stats.component";
import Social from "./socials/Social.component";
const RightFeed = () => {
	return (
		<div className="right-feed">
			<SearchComp />
			<TopArticle />
			<BlogStats />
			<Social />
			<p>
				Made with 🧡 by{" "}
				<a href="https://twitter.com/saumya4real" target="_blank">
					Saumya Ranjan Nayak
				</a>
			</p>
		</div>
	);
};

export default RightFeed;
