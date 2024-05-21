import { IsString } from "class-validator";

export class CategoriasDto {
    @IsString()
    user: string;

    @IsString()
    password: string;
}