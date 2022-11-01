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
exports.CreatePersonajeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePersonajeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ingresar Nombre del personaje',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 30),
    __metadata("design:type", String)
], CreatePersonajeDto.prototype, "nombre_personaje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'Ingresara los años de experiencia',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePersonajeDto.prototype, "anio_experiencia", void 0);
exports.CreatePersonajeDto = CreatePersonajeDto;
//# sourceMappingURL=create-personaje.dto.js.map