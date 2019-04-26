import React from 'react';

// Import interfaces
import { IArticleCardProps } from '../../Components/Cards/Article/ArticleCard';

// Import styles
import styles from './RecentPosts.module.css';

// Lazy Load Material UI
const Paper = React.lazy(() => import('@material-ui/core/Paper'));
const Grid = React.lazy(() => import('@material-ui/core/Grid'));
const Typography = React.lazy(() => import('@material-ui/core/Typography'));

// Lazy load Application
const ArticleCard = React.lazy(() => import('../../Components/Cards/Article/ArticleCard'));

//
// Displays the 6 most recent posts as Card items
//
const RecentPosts = () => {

    const articles: IArticleCardProps[] = [
        {
            id: 1,
            title: 'The first post',
            description: 'Keeping it simple to start with...'
        },
        {
            id: 2,
            title: 'The Second post',
            subheading: 'This one time...',
            description: 'The volume of content in the description should have a maximum length'
        },
        {
            id: 3,
            thought: 'I should maybe add images',
            title: 'Three Times',
            description: 'Card items are great but they can be bland'
        },
        {
            id: 4,
            thought: 'React Hooks, better than sliced bread?',
            title: 'Hooky',
            subheading: 'Always know what you want before starting',
            description: 'It is amazing how quickly a new project suddenly becomes a burden due to legacy code and design!'
        },
        {
            id: 5,
            title: 'Outlook Web Add-in',
            description: 'Documentation is lacking, but this could be something kinda good'
        },
        {
            id: 6,
            thought: 'How long before white is the normal site color again?',
            title: 'Dark Theme',
            description: 'Not everyone likes black, but it seems very popular these days. However choice is important'
        },
    ];

    return (
        <div className={styles.root}>
            <Grid container className={styles.gridRoot}>
                <Grid item xs={4}>
                    <Grid container className={styles.container} justify='center' spacing={16}>
                        <Grid item>
                            <Paper className={styles.welcome} elevation={8}>
                                <Typography variant='h3'>Welcome...</Typography>
                                <Typography component='p' className={styles.paragraph}>
                                    Lorem ipsum dolor sit amet, eam ad summo integre, erat nulla assueverit usu te, sit atqui augue interpretaris ei. Ei ius mundi aliquam detracto, ad nusquam similique definiebas qui. Justo maiorum praesent ut eos. Timeam albucius assueverit his eu, his ad mollis singulis, has et vitae homero cetero. Scaevola neglegentur ea eam, conceptam consetetur mel no. Laudem expetenda nec at, atqui tibique cum ei.
                                </Typography>
                                <Typography component='p' className={styles.paragraph}>
                                    Vix at minimum quaestio, tacimates oportere nec cu. Id reque eruditi vivendo vix. Sea nisl omnium feugait an. Eros definiebas no sit, duo ei audire adipisci, ei est putent malorum ceteros. Illud noster mediocritatem cum ea, ut dicta aperiam temporibus pri, ea eam assum delenit maiorum. Ius ad hinc praesent, his ut sint feugiat molestie, eu oratio essent postulant mel. Et lobortis elaboraret usu, eu cum suas nulla aperiri.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid container className={styles.container} justify='center' spacing={16}>
                        {articles.map(i => (
                            <Grid key={i.id} item>
                                <ArticleCard {...i} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default RecentPosts;