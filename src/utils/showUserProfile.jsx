import PersonIcon from '@mui/icons-material/Person';
import MoodIcon from '@mui/icons-material/Mood';
import styles from '../components/MenuNavigation/menuNavigation.module.scss';

const showUserProfile = (user) => {
    let content = null;
    if (user.isLoggedIn) {
        if (user.avatar.length > 0) {
            content = <img src={user.avatar} alt={user.username} />;
        } else {
            content = <MoodIcon className={styles['no-avatar-icon']} />;
        }
    } else {
        content = <PersonIcon />;
    }

    return <div className="menu-item-profile">{content}</div>;
};

export default showUserProfile;
