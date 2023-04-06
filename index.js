const express = require('express');
const app = express();
const usersRouter = require('./users.js');
const postsRouter = require('./posts.js');

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(4000, () => {
 console.log('listening on port 4000');
});
