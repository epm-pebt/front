import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';

const BottomNavigationMenu = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) navigate('/');
        else if (newValue === 1) navigate('/groceries');
        else if (newValue === 2) navigate('/profile');
    };

    return (
        <BottomNavigation
            value={value}
            showLabels={true}
            onChange={handleChange}
            style={{ margin: 'auto' }}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction
                label="Groceries List"
                icon={<FormatListBulletedIcon />}
            />
            <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
    );
};

export default BottomNavigationMenu;
