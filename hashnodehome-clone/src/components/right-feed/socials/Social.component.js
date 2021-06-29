import "./social.scss";

const Social = () => {
	return (
		<div className="social">
			<div className="social-icons">
				<a href="https://twitter.com/hashnode">
					<div className="icon">
						<i className="fa fa-twitter-square"></i>
					</div>
				</a>
				<a href="https://www.linkedin.com/company/hashnode/">
					<div className="icon">
						<i class="fa fa-linkedin"></i>
					</div>
				</a>
				<a href="https://instagram.com/hashnode">
					<div className="icon">
						<i class="fa fa-instagram"></i>
					</div>
				</a>
				<a href="https://facebook.com/hashnode">
					<div className="icon">
						<i class="fa fa-facebook"></i>
					</div>
				</a>
				<a href="https://www.youtube.com/channel/UC8mNp5jUzd2e6qvbdQtUsQw/">
					<div className="icon">
						<i class="fa fa-youtube"></i>
					</div>
				</a>
			</div>
			<div className="menus">
				<div className="left-col">
					<h5>About</h5>
					<h5>Ambassador</h5>
					<h5>Site Status</h5>
					<h5>Careers </h5>
					<h5>Support</h5>
				</div>
				<div className="right-col">
					<h5>Official Blog</h5>
					<h5>Must Read </h5>
					<h5>Hashnode APIs</h5>
					<h5>Media</h5>
				</div>
			</div>
			<div className="bottom-row">
				<div className="top-row">
					<h5>Privacy</h5>
					<h5>Terms</h5>
				</div>
				<div className="btm-row">
					<h5>© 2021 · Hashnode</h5>
				</div>
			</div>
		</div>
	);
};

export default Social;
