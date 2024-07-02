import app from './app.js';

app.listen( process.env.PORT ||7000, ()=> {
    console.log("server running");
});
