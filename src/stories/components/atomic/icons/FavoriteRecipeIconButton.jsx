import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { ecoBitesUi } from '../../../../theme';
import propTypes from '../../../prop-types/entities';
import { WHITE, FAVORITE_RECIPE_ICON_SIZE } from '../../../constants';

const applyStyles = ({ theme, selected }) => ({
    backgroundColor: selected ? WHITE : ecoBitesUi.palette.grey.tertiary,
    borderRadius: '50%',
    width: FAVORITE_RECIPE_ICON_SIZE,
    height: FAVORITE_RECIPE_ICON_SIZE,
    boxShadow: theme.shadows[3],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
        backgroundColor: selected ? WHITE : ecoBitesUi.palette.grey.tertiary,
    },
    '& .MuiSvgIcon-root': {
        color: selected ? `${ecoBitesUi.palette.pink.secondary}` : WHITE,
    },
});

const FavoriteButton = styled(IconButton)(applyStyles);
const FavoriteIconWrapper = styled('span')(applyStyles);

const FavoriteRecipeIconButton = ({
    selected = false,
    onClick,
    recipeName,
    ...rest
}) => {
    const buttonAriaLabel = selected
        ? `Remove ${recipeName} from favorites`
        : `Add ${recipeName} to favorites`;
    const iconTitle = `${recipeName} is favorite recipe.`;

    const renderButton = () => (
        <FavoriteButton
            onClick={onClick}
            selected={selected}
            aria-label={buttonAriaLabel}
        >
            <FavoriteIcon aria-hidden={true} fontSize="medium" />
        </FavoriteButton>
    );

    const renderIcon = () => (
        <FavoriteIconWrapper selected={selected} {...rest}>
            <FavoriteIcon
                data-testid="FavoriteIcon"
                titleAccess={iconTitle}
                fontSize="medium"
            />
        </FavoriteIconWrapper>
    );

    return <>{onClick ? renderButton() : renderIcon()}</>;
};

FavoriteRecipeIconButton.propTypes = propTypes.favoriteRecipeIconButton;

export default FavoriteRecipeIconButton;
