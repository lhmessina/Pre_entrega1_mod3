import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

// import usersRouter from './routes/users.router.js';
// import petsRouter from './routes/pets.router.js';

import router from "./routes/index.js"
// import adoptionsRouter from './routes/adoption.router.js';
// import sessionsRouter from './routes/sessions.router.js';

// para la ruta de moks///
//import mockRouter from "./routes/mocks.router.js"
// para la ruta de moks///

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect("")

app.use(express.json());
app.use(cookieParser());

app.use('/api/',router);
// app.use('/api/pets',petsRouter);
// app.use('/api/adoptions',adoptionsRouter);
// app.use('/api/sessions',sessionsRouter);

//app.use('/api/mocks',mockRouter)

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
