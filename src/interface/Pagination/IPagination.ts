
export interface IPagination {
    pager: IPager;
}

export interface IPager {
    pages: number[];
    totalPages: number;
    startPage: number;
}