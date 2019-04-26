import React from 'react';

// Load styles
import styles from './ArticleCard.module.css';

// Lazy load Material UI
const Card = React.lazy(() => import('@material-ui/core/Card'));
const CardActions = React.lazy(() => import('@material-ui/core/CardActions'));
const CardContent = React.lazy(() => import('@material-ui/core/CardContent'));
const Button = React.lazy(() => import('@material-ui/core/Button'));
const Typography = React.lazy(() => import('@material-ui/core/Typography'));

// Props interface 
export interface IArticleCardProps {
    id: number;
    thought?: string;
    title: string;
    subheading?: string;
    description: string;
}

// Renders a single Card element using the IArticleCardProps provided
const ArticleCard = (props: IArticleCardProps) => {
    return (
        <Card className={styles.card} raised>
            <CardContent>
                {props.thought ? 
                    <Typography className={styles.thought} color='textSecondary' gutterBottom>
                        {props.thought}
                    </Typography>
                :
                    null
                }
                <Typography variant='h5' component='h2'>{props.title}</Typography>
                {props.subheading ?
                    <Typography className={styles.pos} color='textSecondary'>{props.subheading}</Typography>
                :
                    null
                }
                <Typography component='p'>{props.description}</Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Read Full post</Button>
            </CardActions>
        </Card>
    );
}

export default ArticleCard;