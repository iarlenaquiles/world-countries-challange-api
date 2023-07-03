require('dotenv').config();
import { App } from "./app"

const PORT = process.env.PORT || 5001

new App().server.listen(PORT);