import server from './server.js';
import mongooseSetup from "./mongooseSetup.js";
// MONGOOSE DATABASE

const PORT = process.env.PORT || 6001;

mongooseSetup
  .then(() => {
    server.listen(PORT, () => {
      console.log(`SERVER PORT: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
