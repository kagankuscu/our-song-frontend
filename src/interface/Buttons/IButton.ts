import React from "react";
import { Song } from "../../models/SongModel";

export interface IButton {
    song?: Song
    onClick?: React.MouseEventHandler
    path?: string;
}