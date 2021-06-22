import "./search.scss";

const Search = () => {
	return (
		<div className="search">
			<div className="search-icon">
				<i class="fa fa-search" aria-hidden="true"></i>
			</div>
			<div className="inp">
				<input type="text" placeholder="Search Hashnode" />
			</div>
			<div className="btn">/</div>
		</div>
	);
};

export default Search;
