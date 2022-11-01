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
exports.SerieService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const serie_entity_1 = require("./entities/serie.entity");
let SerieService = class SerieService {
    constructor(serieRepository) {
        this.serieRepository = serieRepository;
    }
    async create(createSerieDto) {
        const serieEncontrada = await this.serieRepository.findOne({
            where: {
                nombre_serie: createSerieDto.nombre_serie,
            },
        });
        if (serieEncontrada) {
            return new common_1.HttpException('El nombre de la serie ya existe', common_1.HttpStatus.CONFLICT);
        }
        const nuevaSerie = this.serieRepository.create(createSerieDto);
        return this.serieRepository.save(nuevaSerie);
    }
    findAll() {
        return this.serieRepository.find({
            relations: ['asignacion'],
        });
    }
    async findOne(id) {
        const serieEncontrada = await this.serieRepository.findOne({
            where: { id },
            relations: ['asignacion'],
        });
        if (!serieEncontrada) {
            return new common_1.HttpException('No se encuentra la serie', common_1.HttpStatus.NOT_FOUND);
        }
        return serieEncontrada;
    }
    async update(id, updateSerieDto) {
        const serieEncontrada = await this.serieRepository.findOne({
            where: { id },
        });
        if (!serieEncontrada) {
            return new common_1.HttpException('Serie no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        const uodateSerie = Object.assign(serieEncontrada, updateSerieDto);
        return this.serieRepository.save(uodateSerie);
    }
    async remove(id) {
        const resultado = await this.serieRepository.delete({ id });
        if (resultado.affected === 0) {
            return new common_1.HttpException('Serie no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        return resultado;
    }
};
SerieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(serie_entity_1.Serie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SerieService);
exports.SerieService = SerieService;
//# sourceMappingURL=serie.service.js.map