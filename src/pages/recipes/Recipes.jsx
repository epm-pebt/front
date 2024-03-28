import { Box, Typography } from "@mui/material";
import styles from './recipes.module.scss';
import RecipeCard from "../../components/recipe-cards/RecipeCard";
import SettingsIcon from "../../components/settings-icon/SettingsIcon";
import { useEffect, useState } from "react";

const Recipes = () => {
    const [leftColumn, setLeftColumn] = useState([
        <RecipeCard key={1} empty />,
        <RecipeCard key={2} empty />,
        <RecipeCard key={3} empty />,
        <RecipeCard key={4} empty />,
        <RecipeCard key={5} empty />,
    ]);
    const [rightColumn, setRightColumn] = useState([
        <RecipeCard key={6} empty />,
        <RecipeCard key={7} empty />,
        <RecipeCard key={8} empty />,
        <RecipeCard key={9} empty />,
        <RecipeCard key={10} empty />,
    ]);
    const [title, setTitle] = useState('Loading...');

    useEffect(() => {
        // TODO: make an actual API fetch
        const fetchRecipes = async () => {
            const recipes = [
                {
                    title: 'Recipe',
                    cookingTime: 20,
                    imgPath: '../../../static/recipe.svg'
                },
                {
                    title: 'Long description for not so long recipe',
                    cookingTime: 10,
                    liked: true,
                },
                {
                    title: 'Another recipe',
                    cookingTime: 35,
                    imgPath: '../../../static/recipe.svg',
                    liked: true,
                },
                {
                    title: 'Cake',
                    cookingTime: 90,
                    imgPath: '../../../static/recipe.svg'
                },
                {
                    title: 'Better cake',
                    cookingTime: 80,
                },
                {
                    title: 'Salad',
                    cookingTime: 15,
                    imgPath: '../../../static/recipe.svg'
                },
                {
                    liked: true,
                    title: 'Another salad',
                    cookingTime: 15,
                    imgPath: '../../../static/recipe.svg'
                },
                {
                    title: 'A recipe for a very tasty dish, which requires an accordingly long description',
                    cookingTime: 40,
                    imgPath: '../../../static/recipe.svg'
                },
                {
                    title: 'Short recipe',
                    cookingTime: 25,
                    imgPath: '../../../static/recipe.svg'
                },
                {
                    title: 'Fried eggs',
                    cookingTime: 15,
                },
            ];
            setTimeout(() => {
                const left = [];
                const right = [];
                for (let i = 0; i < recipes.length; i++) {
                    let r = recipes[i];
                    let item = <RecipeCard key={`recipe_${i}`} empty={r.empty} title={r.title} cookingTime={r.cookingTime} liked={r.liked} imgPath={r.imgPath} />
                    if (i % 2 == 0) {
                        left.push(item)
                    } else {
                        right.push(item)
                    }
                }
                setLeftColumn(left);
                setRightColumn(right);
                setTitle(`All recipes • ${recipes.length}`)
            }, 800);
        }
        fetchRecipes();
    }, [])

    return <Box className={styles['page']}>
        <div className={styles['heading']}>
            <Typography className={styles['title']}>{title}</Typography>
            <SettingsIcon classNames={styles['settings']} />
        </div>
        <Box className={styles[
            'data'
        ]}>
            <Box className={styles['column']}>{leftColumn}</Box>
            <Box className={styles[
                'column'
            ]}>{rightColumn}</Box>
        </Box>
    </Box>
}

export default Recipes;
