import { Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import propTypes from '../../../prop-types/entities';

const Counter = ({ total, isFiltered, status }) => (
    <>
        {!isFiltered ? (
            <Typography
                variant="h2"
                sx={{ display: 'flex', flexWrap: 'nowrap' }}
            >
                All Recipes
                <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                    &middot;
                </span>
                {typeof total === 'number' &&
                status !== 'loading' &&
                status !== 'error' ? (
                    total
                ) : (
                    <Skeleton
                        variant="text"
                        width={30}
                        sx={{ fontSize: 'inherit' }}
                    />
                )}
            </Typography>
        ) : (
            <Typography
                variant="h2"
                sx={{ display: 'flex', flexWrap: 'nowrap' }}
            >
                Results
                <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                    &middot;
                </span>
                {typeof total === 'number' &&
                status !== 'loading' &&
                status !== 'error' ? (
                    total
                ) : (
                    <Skeleton
                        variant="text"
                        width={30}
                        sx={{ fontSize: 'inherit' }}
                    />
                )}
            </Typography>
        )}
    </>
);

Counter.defaultProps = {
    isFiltered: false,
    status: 'idle',
};

Counter.propTypes = propTypes.counter;

export default Counter;
