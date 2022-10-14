import { Song } from "./SongModel";

export type PaginateModel = {
    pager: { pages: number[], totalPages: number };
    pageOfItems: Song[];
}