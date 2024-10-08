import { FishIcon, HomeIcon, MoonIcon, SettingsIcon, StorageIcon, SunIcon } from "../icons/icons";
import useDarkMode from "../hooks/useDarkMode";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-200 dark:bg-gray-900 text-white shadow-lg">
            <div className="flex-grow">
                <SideBarIcon icon = { <HomeIcon /> } text={'Home'} to={"/"}/>
                <Divider />
                <SideBarIcon icon = { <FishIcon /> } text={'Fish Calculator'} to={"/FishPage"} />
                <SideBarIcon icon = { <StorageIcon /> } text={'Storages'} />
                <Divider />
                <SideBarIcon icon = { <SettingsIcon />} text={'Settings'} />
            </div>
            <SideBarIcon icon = { <ThemeIcon />} text={'Change Theme'} />
        </div>
    );
};

const SideBarIcon = ({ icon, text, to }) => (
    <Link to={to} className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </Link>
);

const Divider = () => <hr className='sidebar-hr' />

const ThemeIcon = () => {
    const[darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode}>
            {darkTheme ? (
                <SideBarIcon icon = { < SunIcon />} />
            ) : (
                <SideBarIcon icon = { < MoonIcon />} />
            )}
        </span>
    );
};

export default SideBar;