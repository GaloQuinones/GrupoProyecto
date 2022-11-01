import { CreateAsignacionDto } from './create-asignacion.dto';
declare const UpdateAsignacionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAsignacionDto>>;
export declare class UpdateAsignacionDto extends UpdateAsignacionDto_base {
    papel?: string;
    tipo_papel?: string;
    fecha_inicio?: Date;
    fecha_fin?: Date;
    temporadas?: number;
}
export {};
