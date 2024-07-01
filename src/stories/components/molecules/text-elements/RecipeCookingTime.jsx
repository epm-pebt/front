import { useMemo } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import minutesToDuration from '../../../../utils/minutesToDuration';
import propTypes from '../../../prop-types/entities';

const RecipeCookingTime = ({ typographyVariant, time, showClock }) => {
    const isoDuration = `PT${time}M`;
    const duration = useMemo(() => minutesToDuration(time), [time]);
    if (!time) return null;
    return (
        <Stack
            sx={{ mb: 1 }}
            direction="row"
            display={'flex'}
            alignItems={'center'}
            gap={showClock ? 0.5 : 0}
        >
            {showClock ? (
                <AccessTimeFilledIcon
                    fontSize="small"
                    data-testid="AccessTimeFilledIcon"
                />
            ) : null}
            <Typography
                variant={typographyVariant}
                component="time"
                dateTime={isoDuration}
            >
                {duration}
            </Typography>
        </Stack>
    );
};

RecipeCookingTime.defaultProps = {
    typographyVariant: 'Emphasis/E12',
    showClock: true,
};

RecipeCookingTime.propTypes = propTypes.recipeCookingTime;

export default RecipeCookingTime;
