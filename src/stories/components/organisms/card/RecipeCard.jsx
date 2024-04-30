import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import RecipeTitle from '../../atomic/text-elements/RecipeTitle';
import FavoriteRecipeIcon from '../../atomic/icons/FavoriteRecipeIcon';
import RecipeDuration from '../../molecules/text-elements/RecipeDuration';
import imagePlaceholder from '../../../assets/recipe-image-default.png';
import { recipeCardPropTypes } from '../../../prop-types/entities';

const RecipeCard = ({ recipe }) => {
    const {
        title,
        duration,
        imgUrl = imagePlaceholder,
        alt = 'Awaiting image',
        isFavorite = false,
        isVegan = false,
    } = recipe;

    return (
        <Link
            href="#"
            aria-label={`Click to see recipe for ${title}.`}
            style={{ textDecoration: 'none' }}
        >
            <Card>
                <CardMedia
                    component="img"
                    height="103"
                    image={imgUrl}
                    alt={alt}
                />
                {isFavorite && (
                    <FavoriteRecipeIcon title={title} selected={true} />
                )}
                <CardContent sx={{ mt: 2 }}>
                    <RecipeDuration
                        minutes={duration}
                        showClock={false}
                        variant="Paragraph/P12"
                    />
                    <RecipeTitle title={title} isVegan={isVegan} />
                </CardContent>
            </Card>
        </Link>
    );
};

RecipeCard.propTypes = recipeCardPropTypes;

export default RecipeCard;
