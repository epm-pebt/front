import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CARD_IMAGE_HEIGHT } from '../../../constants';

const RecipeCardSkeleton = () => (
    <Card
        data-testid="recipe-card-skeleton"
        elevation={10}
        sx={{ marginBottom: 2, minWidth: 120, width: '100%' }}
    >
        <Skeleton
            height={`${CARD_IMAGE_HEIGHT}px`}
            width="100%"
            variant="rounded"
        />
        <CardContent sx={{ mt: 2 }}>
            <Skeleton
                height={8}
                width="25%"
                animation="wave"
                variant="rectangle"
                sx={{ mb: 2 }}
            />
            <Skeleton
                height={10}
                width="80%"
                animation="wave"
                variant="rectangle"
            />
        </CardContent>
    </Card>
);

export default RecipeCardSkeleton;
