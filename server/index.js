import server from "./server.js";
import mongooseSetup from "./mongooseSetup.js";
import dataSeeder from "./data/dataSeeder.js";
// MONGOOSE DATABASE

const PORT = process.env.PORT || 6001;

mongooseSetup
  .then(() => {
    server.listen(PORT, () => {
      console.log(`SERVER PORT: ${PORT}`);

      dataSeeder().then((c) => {
        console.log("Done with data Seeder");
      });
    });
  })
  .catch((err) => console.log(err));
