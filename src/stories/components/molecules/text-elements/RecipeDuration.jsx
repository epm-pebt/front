import PropTypes from 'prop-types';
import Time from '../../atomic/text-elements/Time';
import ClockIcon from '../../atomic/icons/ClockIcon';
import { Stack } from '@mui/system';

const RecipeDuration = ({ typographyVariant, minutes, showClock }) => (
    <Stack
        sx={{ mb: 1 }}
        direction="row"
        display={'flex'}
        alignItems={'center'}
        gap={showClock ? 0.5 : 0}
    >
        {showClock ? <ClockIcon size="medium" /> : null}
        <Time minutes={minutes} variant={typographyVariant} />
    </Stack>
);

RecipeDuration.defaultProps = {
    typographyVariant: 'Emphasis/E12',
    showClock: true,
};

RecipeDuration.propTypes = {
    typographyVariant: PropTypes.oneOf(['Paragraph/P12', 'Emphasis/E12']),
    minutes: PropTypes.number.isRequired,
    showClock: PropTypes.bool,
};

export default RecipeDuration;
