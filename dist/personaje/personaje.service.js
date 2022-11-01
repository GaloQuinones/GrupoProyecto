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
exports.PersonajeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const personaje_entity_1 = require("./entities/personaje.entity");
let PersonajeService = class PersonajeService {
    constructor(personajeRepository) {
        this.personajeRepository = personajeRepository;
    }
    async create(createPersonajeDto) {
        const personajeEncontrado = await this.personajeRepository.findOne({
            where: {
                nombre_personaje: createPersonajeDto.nombre_personaje,
            },
        });
        if (personajeEncontrado) {
            return new common_1.HttpException('El nombre del personaje ya existe', common_1.HttpStatus.CONFLICT);
        }
        const nuevoPersonaje = this.personajeRepository.create(createPersonajeDto);
        return this.personajeRepository.save(nuevoPersonaje);
    }
    findAll() {
        return this.personajeRepository.find({
            relations: ['asignacion'],
        });
    }
    async findOne(id) {
        const personajeEncontrado = await this.personajeRepository.findOne({
            where: { id },
            relations: ['asignacion'],
        });
        if (!personajeEncontrado) {
            return new common_1.HttpException('No se encuentra el personaje', common_1.HttpStatus.NOT_FOUND);
        }
        return personajeEncontrado;
    }
    async update(id, updatePersonajeDto) {
        const personajeEncontrado = await this.personajeRepository.findOne({
            where: { id },
        });
        if (!personajeEncontrado) {
            return new common_1.HttpException('Personaje no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const uodatePersonaje = Object.assign(personajeEncontrado, updatePersonajeDto);
        return this.personajeRepository.save(uodatePersonaje);
    }
    async remove(id) {
        const resultado = await this.personajeRepository.delete({ id });
        if (resultado.affected === 0) {
            return new common_1.HttpException('Personaje no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return resultado;
    }
};
PersonajeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(personaje_entity_1.Personaje)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PersonajeService);
exports.PersonajeService = PersonajeService;
//# sourceMappingURL=personaje.service.js.map