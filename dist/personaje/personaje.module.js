"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonajeModule = void 0;
const common_1 = require("@nestjs/common");
const personaje_service_1 = require("./personaje.service");
const personaje_controller_1 = require("./personaje.controller");
const typeorm_1 = require("@nestjs/typeorm");
const personaje_entity_1 = require("./entities/personaje.entity");
let PersonajeModule = class PersonajeModule {
};
PersonajeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([personaje_entity_1.Personaje])],
        controllers: [personaje_controller_1.PersonajeController],
        providers: [personaje_service_1.PersonajeService],
        exports: [personaje_service_1.PersonajeService],
    })
], PersonajeModule);
exports.PersonajeModule = PersonajeModule;
//# sourceMappingURL=personaje.module.js.map