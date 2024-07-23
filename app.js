import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

// Get the directory name (needed due to using ESmodules instead of commonjs)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();

// Middleware
// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Logger
app.use(logger('dev'));
// Cookie parser
app.use(cookieParser());
// Set up static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
