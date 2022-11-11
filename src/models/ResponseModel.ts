import { PaginateModel } from "./PaginateModel";
import { Song } from "./SongModel";

export interface ResponseModel {
    lenght: number,
    result: PaginateModel,
    status: number
}

export interface ResponseModelSong {
    lenght: number,
    result: Song,
    status: number
}