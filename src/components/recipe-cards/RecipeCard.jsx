import MUICard from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import styles from './recipe-card.module.scss';
import { Icon, Box } from '@mui/material';

const RecipeCard = ({ empty, imgPath, title, cookingTime, liked }) => {
    if (empty) {
        return <MUICard className={styles['card']}>
            <Box className={styles['empty-media']}></Box>
            <div className={styles['empty-content']}>
                <div className={styles['empty-time'
                ]} />
                <div className={styles['empty-title']} />
            </div>
        </MUICard>
    }

    if (imgPath === undefined) {
        imgPath = '../../../static/default_recipe.svg'
    }
    let likeIcon = <Icon className={styles['like']} >
        <img src='../../../static/like.svg' />
    </Icon>

    return <MUICard variant="outlined" sx={{ boxShadow: 2 }} className={styles['card']} >
        <Box sx={{ position: 'relative' }}>
            <CardMedia className={styles['media']} image={imgPath} title={title} />
            {
                liked ? likeIcon : null
            }
        </Box>
        <div className={styles['content']}>
            <Typography className={styles['cooking-time']}>{cookingTime} min</Typography>
            <Typography className={styles['title']}>{title}</Typography>
        </div>
    </MUICard>
}

RecipeCard.propTypes = {
    empty: PropTypes.bool,
    imgPath: PropTypes.string,
    title: PropTypes.string,
    cookingTime: PropTypes.number,
    liked: PropTypes.bool
}

export default RecipeCard;
