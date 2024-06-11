import { useState } from 'react';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import RecipeCardSkeleton from './RecipeCardSkeleton';
import RecipeTitle from '../../atomic/text-elements/RecipeTitle';
import FavoriteRecipeIconButton from '../../atomic/icons/FavoriteRecipeIconButton';
import RecipeCookingTime from '../../molecules/text-elements/RecipeCookingTime';
import imagePlaceholder from '../../../assets/recipe-image-default.png';
import propTypes from '../../../prop-types/entities';
import { CARD_IMAGE_HEIGHT } from '../../../constants';

const LazyLoadImage = ({ src, alt, height }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div style={{ position: 'relative', height }}>
            <CardMedia
                component="img"
                height={height}
                image={src}
                alt={alt}
                loading="lazy"
                style={{
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                onLoad={() => setLoaded(true)}
            />
            {!loaded && (
                <img
                    src={imagePlaceholder}
                    alt={alt}
                    height={`${CARD_IMAGE_HEIGHT}px`}
                    style={{
                        filter: 'blur(20px)',
                        width: '100%',
                        height: '100%',
                    }}
                />
            )}
        </div>
    );
};

LazyLoadImage.propTypes = propTypes.lazyLoadImage;

const RecipeCard = ({ recipe, isLoading }) => {
    if (isLoading) {
        return <RecipeCardSkeleton />;
    }

    const {
        title,
        time,
        image = imagePlaceholder,
        alt = '',
        isFavorite = false,
        isVegan = false,
    } = recipe || {};

    return (
        <Link
            href="#"
            aria-label={`Click to see recipe for ${title}.`}
            sx={{ textDecoration: 'none', marginBottom: 2 }}
        >
            <Card elevation={10}>
                <LazyLoadImage
                    src={image}
                    alt={alt}
                    height={CARD_IMAGE_HEIGHT}
                />
                {isFavorite ? (
                    <FavoriteRecipeIconButton
                        recipeName={title}
                        selected={isFavorite}
                        sx={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            zIndex: '1',
                        }}
                    />
                ) : null}
                <CardContent sx={{ mt: 2 }}>
                    {time && (
                        <RecipeCookingTime
                            time={time}
                            showClock={false}
                            variant="Paragraph/P12"
                        />
                    )}
                    {title && <RecipeTitle title={title} isVegan={isVegan} />}
                </CardContent>
            </Card>
        </Link>
    );
};

RecipeCard.propTypes = propTypes.recipeCard;

export default RecipeCard;
