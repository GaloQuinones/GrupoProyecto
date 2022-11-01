import { HttpException } from '@nestjs/common';
import { PersonajeService } from 'src/personaje/personaje.service';
import { SerieService } from 'src/serie/serie.service';
import { Repository } from 'typeorm';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
import { Asignacion } from './entities/asignacion.entity';
export declare class AsignacionService {
    private asignacionRepository;
    private seriesService;
    private personajesService;
    constructor(asignacionRepository: Repository<Asignacion>, seriesService: SerieService, personajesService: PersonajeService);
    create(createAsignacionDto: CreateAsignacionDto): Promise<Asignacion | HttpException>;
    findAll(): Promise<Asignacion[]>;
    findOne(id: number): Promise<Asignacion | HttpException>;
    update(id: number, updateAsignacionDto: UpdateAsignacionDto): Promise<HttpException | (Asignacion & UpdateAsignacionDto)>;
    remove(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
}
