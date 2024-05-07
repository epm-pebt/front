import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PropTypes from 'prop-types';

const ClockIcon = ({ size }) => (
    <AccessTimeFilledIcon data-testid="clock-icon" fontSize={size} />
);

ClockIcon.defaultProps = {
    size: 'small',
};

ClockIcon.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default ClockIcon;
