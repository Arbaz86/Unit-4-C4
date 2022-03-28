const app = require("./index");
const port = 2000;

const connect = require("./configs/db");

app.listen(port, async () => {
  try {
    await connect();
  } catch (error) {
    console.log("error:", error);
  }
  console.log(`Server started on port ${port}`);
});
