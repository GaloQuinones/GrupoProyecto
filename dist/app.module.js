"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const serie_module_1 = require("./serie/serie.module");
const personaje_module_1 = require("./personaje/personaje.module");
const asignacion_module_1 = require("./asignacion/asignacion.module");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'containers-us-west-28.railway.app',
                port: 7711,
                username: 'postgres',
                password: 'O4bi0eFQuoGTs68yS6DE',
                database: 'railway',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
                retryDelay: 3000,
                retryAttempts: 10,
            }),
            serie_module_1.SerieModule,
            personaje_module_1.PersonajeModule,
            asignacion_module_1.AsignacionModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map