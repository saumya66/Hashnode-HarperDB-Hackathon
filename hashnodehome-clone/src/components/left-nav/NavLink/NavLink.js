import "./navlink.scss";

const NavLink = (props) => {
	return (
		<div className="container">
			<svg viewBox="0 0 512 512">
				<path d={props.path}></path>
			</svg>
			<h5>{props.name}</h5>
		</div>
	);
};

export default NavLink;
