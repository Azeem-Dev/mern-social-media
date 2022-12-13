export const swaggerConfig = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MERN PROJECT",
      version: "0.0.1",
      description: "MERN PROJECT",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Azeem-Dev",
        url: "https://github.com/azeem-dev",
        email: "azeemsharif5822@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
