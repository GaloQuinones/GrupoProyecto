import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
export declare class SerieController {
    private readonly serieService;
    constructor(serieService: SerieService);
    create(createSerieDto: CreateSerieDto): Promise<import("./entities/serie.entity").Serie | import("@nestjs/common").HttpException>;
    findAll(): Promise<import("./entities/serie.entity").Serie[]>;
    findOne(id: number): Promise<import("./entities/serie.entity").Serie | import("@nestjs/common").HttpException>;
    update(id: number, updateSerieDto: UpdateSerieDto): Promise<import("@nestjs/common").HttpException | (import("./entities/serie.entity").Serie & UpdateSerieDto)>;
    remove(id: number): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
}
