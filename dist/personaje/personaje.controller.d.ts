import { PersonajeService } from './personaje.service';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';
export declare class PersonajeController {
    private readonly personajeService;
    constructor(personajeService: PersonajeService);
    create(createPersonajeDto: CreatePersonajeDto): Promise<import("./entities/personaje.entity").Personaje | import("@nestjs/common").HttpException>;
    findAll(): Promise<import("./entities/personaje.entity").Personaje[]>;
    findOne(id: number): Promise<import("./entities/personaje.entity").Personaje | import("@nestjs/common").HttpException>;
    update(id: number, updatePersonajeDto: UpdatePersonajeDto): Promise<import("@nestjs/common").HttpException | (import("./entities/personaje.entity").Personaje & UpdatePersonajeDto)>;
    remove(id: number): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
}
