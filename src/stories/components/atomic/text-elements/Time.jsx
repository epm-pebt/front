import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import minutesToDuration from '../../../../utils/minutesToDuration';

const Time = ({ minutes, variant }) => {
    const isoDuration = `PT${minutes}M`;
    const duration = useMemo(() => minutesToDuration(minutes), [minutes]);
    return (
        <Typography variant={variant} component="time" dateTime={isoDuration}>
            {duration}
        </Typography>
    );
};

Time.defaultProps = {
    variant: 'Emphasis/E12',
};

Time.propTypes = {
    minutes: PropTypes.number.isRequired,
    variant: PropTypes.oneOf(['Paragraph/P12', 'Emphasis/E12']),
};

export default Time;
