import React from 'react';

import styles from './NewPost.module.css';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const NewPost = () => {

    return (
        <Paper className={styles.container} elevation={8}>
            <TextField
                id='title'
                name='title'
                label='Title'
                fullWidth
                required
            />
            <TextField
                id='subtitle'
                name='subtitle'
                label='Subtitle'
            />
            <TextField
                id='thought'
                name='thought'
                label='Thought'
            />
            
        </Paper>
    );
}

export default NewPost;