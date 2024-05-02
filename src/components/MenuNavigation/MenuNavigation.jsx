import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import styles from './menuNavigation.module.scss';
import showUserProfile from '../../utils/showUserProfile';
import PropTypes from 'prop-types';
const MenuNavigation = ({ user, setActiveMenuItem, activeMenuItem }) => {
    const profile = showUserProfile(user);

    const handleClick = (activeItem) => {
        setActiveMenuItem(activeItem);
    };

    return (
        <div className={styles['menu-navigation-wrapper']}>
            <nav className={styles['menu-navigation-container']}>
                <ul className={styles['menu-navigation']}>
                    <li
                        className={`${styles['menu-item']} ${activeMenuItem === 'Home' ? styles['menu-item-selected'] : ''}`}
                        onClick={() => handleClick('Home')}
                    >
                        <HomeIcon className={styles['menu-icon']} />
                        <p>Home</p>
                    </li>
                    <li
                        className={`${styles['menu-item']} ${activeMenuItem === 'Grocery list' ? styles['menu-item-selected'] : ''}`}
                        onClick={() => handleClick('Grocery list')}
                    >
                        <ListIcon className={styles['menu-icon']} />
                        <p>Grocery list</p>
                    </li>
                    <li
                        className={`${styles['menu-item']} ${activeMenuItem === 'Profile' ? styles['menu-item-selected'] : ''}`}
                        onClick={() => handleClick('Profile')}
                    >
                        {profile}
                        <p>Profile</p>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

MenuNavigation.propTypes = {
    user: PropTypes.array,
    setActiveMenuItem: PropTypes.func,
    activeMenuItem: PropTypes.string,
};

export default MenuNavigation;
