import { Icon } from "@mui/material";
import styles from './settings-icon.module.scss'

const SettingsIcon = () => {
    return <Icon className={styles['settings']}>
        <img src='../../../static/settings.svg' />
    </Icon>
}

export default SettingsIcon;
