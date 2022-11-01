import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Serie } from './entities/serie.entity';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
export declare class SerieService {
    private serieRepository;
    constructor(serieRepository: Repository<Serie>);
    create(createSerieDto: CreateSerieDto): Promise<Serie | HttpException>;
    findAll(): Promise<Serie[]>;
    findOne(id: number): Promise<Serie | HttpException>;
    update(id: number, updateSerieDto: UpdateSerieDto): Promise<HttpException | (Serie & UpdateSerieDto)>;
    remove(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
}
