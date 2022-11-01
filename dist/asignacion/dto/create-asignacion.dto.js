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
exports.CreateAsignacionDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAsignacionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ingresar el papel que interpreta',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CreateAsignacionDto.prototype, "papel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ingresar el tipo de papel que interpreta',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateAsignacionDto.prototype, "tipo_papel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ingresar la fecha de inicio: dd/mm/aaaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateAsignacionDto.prototype, "fecha_inicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ingresar la fecha de terminado: dd/mm/aaaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateAsignacionDto.prototype, "fecha_fin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'Ingresar el numero de temporadas',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAsignacionDto.prototype, "temporadas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'Ingresar el ID de la serie que esta relacionada',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAsignacionDto.prototype, "serieId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'Ingresar el ID del personaje que esta relacionada',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAsignacionDto.prototype, "personajeId", void 0);
exports.CreateAsignacionDto = CreateAsignacionDto;
//# sourceMappingURL=create-asignacion.dto.js.map