import React from 'react';

import styles from './NewPost.module.css';

const TextField = React.lazy(() => import('@material-ui/core/TextField'));
const Paper = React.lazy(() => import('@material-ui/core/Paper'));
const Grid = React.lazy(() => import('@material-ui/core/Grid'));

const NewPost = () => {

    return (
        <Paper className={styles.container} elevation={8}>
            <Grid container className={styles.root}>
                <Grid item xs={12} className={styles.space}>
                    <TextField
                        id='title'
                        name='title'
                        label='Title'
                        fullWidth
                        required
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6} className={styles.space}>
                    <TextField
                        id='subtitle'
                        name='subtitle'
                        label='Subtitle'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6} className={styles.space}>
                    <TextField
                        id='thought'
                        name='thought'
                        label='Thought'
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className={styles.space}>
                    <TextField
                        id='description'
                        name='description'
                        label='Description'
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default NewPost;