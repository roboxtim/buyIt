
import app from "./config/app";
import env from './environment';

const PORT = env.getPort();

app.listen(PORT, () => {
    require('dotenv').config();
    console.log('Express server listening on port ' + PORT);
});