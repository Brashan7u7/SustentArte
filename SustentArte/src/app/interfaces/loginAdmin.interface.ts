export interface Admin {
    id_Admin: number;
    nombre: string;
    email: string;
    password: string;
}

export interface AdminResponse {
    adminFind: Admin;
    rol: string;
}