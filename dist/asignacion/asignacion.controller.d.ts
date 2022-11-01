import { AsignacionService } from './asignacion.service';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
export declare class AsignacionController {
    private readonly asignacionService;
    constructor(asignacionService: AsignacionService);
    create(createAsignacionDto: CreateAsignacionDto): Promise<import("./entities/asignacion.entity").Asignacion | import("@nestjs/common").HttpException>;
    findAll(): Promise<import("./entities/asignacion.entity").Asignacion[]>;
    findOne(id: string): Promise<import("./entities/asignacion.entity").Asignacion | import("@nestjs/common").HttpException>;
    update(id: string, updateAsignacionDto: UpdateAsignacionDto): Promise<import("@nestjs/common").HttpException | (import("./entities/asignacion.entity").Asignacion & UpdateAsignacionDto)>;
    remove(id: string): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
}
