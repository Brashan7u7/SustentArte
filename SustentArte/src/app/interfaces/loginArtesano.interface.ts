export interface Artesano {
    id_artesano: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correo: string;
    password: string;
    descripcionTrabajo: string;
    foto: string;
    localidad: string;
    reconocimientos: string;
    tec_artesanales: string;
    xp_textil: string;
}

export interface ApiResponse {
    artesanoFind: Artesano;
    rol: string;
}
