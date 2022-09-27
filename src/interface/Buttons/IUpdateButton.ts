import { Song } from "../../models/SongModel";

export interface IUpdateButton {
    song: Song;
    updateSong: Song;
}