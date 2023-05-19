import NavigationBarContent from "./NavBarContent";
import NavigationToggle from "./NavigationToggle";
import ProfilePicture from "./ProfilePicture";

const NavigationBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
			<ProfilePicture />
			<NavigationToggle />
			<NavigationBarContent />
		</nav>
		)
	}
	export default NavigationBar;