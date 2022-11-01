"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignacionModule = void 0;
const common_1 = require("@nestjs/common");
const asignacion_service_1 = require("./asignacion.service");
const asignacion_controller_1 = require("./asignacion.controller");
const typeorm_1 = require("@nestjs/typeorm");
const asignacion_entity_1 = require("./entities/asignacion.entity");
const serie_module_1 = require("../serie/serie.module");
const personaje_module_1 = require("../personaje/personaje.module");
let AsignacionModule = class AsignacionModule {
};
AsignacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([asignacion_entity_1.Asignacion]),
            serie_module_1.SerieModule,
            personaje_module_1.PersonajeModule,
        ],
        controllers: [asignacion_controller_1.AsignacionController],
        providers: [asignacion_service_1.AsignacionService],
    })
], AsignacionModule);
exports.AsignacionModule = AsignacionModule;
//# sourceMappingURL=asignacion.module.js.map