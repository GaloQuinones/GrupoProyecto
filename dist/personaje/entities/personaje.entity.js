"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
const typeorm_1 = require("typeorm");
const asignacion_entity_1 = require("../../asignacion/entities/asignacion.entity");
let Personaje = class Personaje {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Personaje.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Personaje.prototype, "nombre_personaje", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Personaje.prototype, "anio_experiencia", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asignacion_entity_1.Asignacion, (asignacion) => asignacion.personaje),
    __metadata("design:type", Array)
], Personaje.prototype, "asignacion", void 0);
Personaje = __decorate([
    (0, typeorm_1.Entity)()
], Personaje);
exports.Personaje = Personaje;
//# sourceMappingURL=personaje.entity.js.map