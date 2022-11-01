import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Personaje } from './entities/personaje.entity';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';
export declare class PersonajeService {
    private personajeRepository;
    constructor(personajeRepository: Repository<Personaje>);
    create(createPersonajeDto: CreatePersonajeDto): Promise<Personaje | HttpException>;
    findAll(): Promise<Personaje[]>;
    findOne(id: number): Promise<Personaje | HttpException>;
    update(id: number, updatePersonajeDto: UpdatePersonajeDto): Promise<HttpException | (Personaje & UpdatePersonajeDto)>;
    remove(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
}
