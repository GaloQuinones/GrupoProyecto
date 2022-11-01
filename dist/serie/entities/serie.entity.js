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
exports.Serie = void 0;
const typeorm_1 = require("typeorm");
const asignacion_entity_1 = require("../../asignacion/entities/asignacion.entity");
let Serie = class Serie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Serie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Serie.prototype, "nombre_serie", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Serie.prototype, "clasificacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asignacion_entity_1.Asignacion, (asignacion) => asignacion.serie),
    __metadata("design:type", Array)
], Serie.prototype, "asignacion", void 0);
Serie = __decorate([
    (0, typeorm_1.Entity)()
], Serie);
exports.Serie = Serie;
//# sourceMappingURL=serie.entity.js.map