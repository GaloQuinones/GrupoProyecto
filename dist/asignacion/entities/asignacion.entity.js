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
exports.Asignacion = void 0;
const typeorm_1 = require("typeorm");
const serie_entity_1 = require("../../serie/entities/serie.entity");
const personaje_entity_1 = require("../../personaje/entities/personaje.entity");
let Asignacion = class Asignacion {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Asignacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asignacion.prototype, "papel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asignacion.prototype, "tipo_papel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Asignacion.prototype, "fecha_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Asignacion.prototype, "fecha_fin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Asignacion.prototype, "temporadas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Asignacion.prototype, "serieId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Asignacion.prototype, "personajeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => serie_entity_1.Serie, (serie) => serie.asignacion),
    __metadata("design:type", serie_entity_1.Serie)
], Asignacion.prototype, "serie", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => personaje_entity_1.Personaje, (personaje) => personaje.asignacion),
    __metadata("design:type", personaje_entity_1.Personaje)
], Asignacion.prototype, "personaje", void 0);
Asignacion = __decorate([
    (0, typeorm_1.Entity)()
], Asignacion);
exports.Asignacion = Asignacion;
//# sourceMappingURL=asignacion.entity.js.map