import app from './app.js';

app.listen( env.process.PORT ||7000, ()=> {
    console.log("server running");
});
