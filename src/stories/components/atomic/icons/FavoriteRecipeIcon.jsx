import PropTypes from 'prop-types';
import styled from '@mui/system/styled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ecoBitesUi } from '../../../../theme';

const FavoriteRecipeIcon = ({ title, selected }) => {
    const StyledRoundHeartWrapper = styled('span')({
        backgroundColor: `${selected ? '#FFFFFF' : ecoBitesUi.palette.grey.tertiary}`,
        position: 'absolute',
        top: '16px',
        right: '16px',
        zIndex: '1',
        width: '32px',
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
    });

    return (
        <StyledRoundHeartWrapper>
            <FavoriteIcon
                data-testid="favorite-icon"
                titleAccess={title ? `${title} is a favorite recipe.` : ''}
                style={{
                    fill: `${selected ? ecoBitesUi.palette.pink.secondary : '#FFFFFF'}`,
                }}
            />
        </StyledRoundHeartWrapper>
    );
};

FavoriteRecipeIcon.defaultProps = {
    selected: false,
    title: '',
};

FavoriteRecipeIcon.propTypes = {
    title: PropTypes.string,
    selected: PropTypes.bool,
};

export default FavoriteRecipeIcon;
