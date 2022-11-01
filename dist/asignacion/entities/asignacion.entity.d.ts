import { Serie } from 'src/serie/entities/serie.entity';
import { Personaje } from 'src/personaje/entities/personaje.entity';
export declare class Asignacion {
    id: number;
    papel: string;
    tipo_papel: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    temporadas: number;
    serieId: number;
    personajeId: number;
    serie: Serie;
    personaje: Personaje;
}
