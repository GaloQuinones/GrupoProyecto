"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Mi Documentación de la API')
        .setDescription('Trabajo')
        .setVersion('1.0')
        .addTag('Serie')
        .addTag('Personaje')
        .addTag('Asignacion')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('documentacion', app, document, {
        explorer: true,
        swaggerOptions: {
            filter: true,
            showResquestDuration: true,
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map