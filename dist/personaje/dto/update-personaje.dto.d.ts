import { CreatePersonajeDto } from './create-personaje.dto';
declare const UpdatePersonajeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePersonajeDto>>;
export declare class UpdatePersonajeDto extends UpdatePersonajeDto_base {
    nombre_personaje?: string;
    anio_experiencia?: number;
}
export {};
