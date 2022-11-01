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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const personaje_service_1 = require("../personaje/personaje.service");
const serie_service_1 = require("../serie/serie.service");
const typeorm_2 = require("typeorm");
const asignacion_entity_1 = require("./entities/asignacion.entity");
let AsignacionService = class AsignacionService {
    constructor(asignacionRepository, seriesService, personajesService) {
        this.asignacionRepository = asignacionRepository;
        this.seriesService = seriesService;
        this.personajesService = personajesService;
    }
    async create(createAsignacionDto) {
        const serieEncontrada = await this.seriesService.findOne(createAsignacionDto.serieId);
        const personajeEncontrado = await this.personajesService.findOne(createAsignacionDto.personajeId);
        console.log(serieEncontrada);
        console.log(personajeEncontrado);
        console.log(serieEncontrada.hasOwnProperty('id'));
        if (!serieEncontrada.hasOwnProperty('id'))
            return new common_1.HttpException('No existe la Serie', common_1.HttpStatus.NOT_FOUND);
        if (!personajeEncontrado.hasOwnProperty('id'))
            return new common_1.HttpException('No existe el Personaje', common_1.HttpStatus.NOT_FOUND);
        const nuevaAsigancion = this.asignacionRepository.create(createAsignacionDto);
        return this.asignacionRepository.save(nuevaAsigancion);
    }
    findAll() {
        return this.asignacionRepository.find({
            relations: ['serie', 'personaje'],
        });
    }
    async findOne(id) {
        const asignacionEncontrada = await this.asignacionRepository.findOne({
            where: { id },
            relations: ['serie', 'personaje'],
        });
        if (!asignacionEncontrada) {
            return new common_1.HttpException('No se encuentra la asignacion', common_1.HttpStatus.NOT_FOUND);
        }
        return asignacionEncontrada;
    }
    async update(id, updateAsignacionDto) {
        const asignacionEncontrada = await this.asignacionRepository.findOne({
            where: { id },
        });
        if (!asignacionEncontrada) {
            return new common_1.HttpException('Asignacion no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        const uodateAsignacion = Object.assign(asignacionEncontrada, updateAsignacionDto);
        return this.asignacionRepository.save(uodateAsignacion);
    }
    async remove(id) {
        const resultado = await this.asignacionRepository.delete({ id });
        if (resultado.affected === 0) {
            return new common_1.HttpException('Asignacion no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        return resultado;
    }
};
AsignacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asignacion_entity_1.Asignacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        serie_service_1.SerieService,
        personaje_service_1.PersonajeService])
], AsignacionService);
exports.AsignacionService = AsignacionService;
//# sourceMappingURL=asignacion.service.js.map