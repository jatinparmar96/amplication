import { NestFactory } from "@nestjs/core";
// eslint-disable-next-line
// @ts-ignore
// eslint-disable-next-line
import { AppModule } from "./app.module";

const { PORT = 3000 } = process.env;

async function main() {
  const app = await NestFactory.create(AppModule, {});

  app.listen(PORT);

  return app;
}

module.exports = main();
