import { Song } from "./SongModel";

export type PaginateModel = {
    pager: { pages: number[] };
    pageOfItems: Song[];
}