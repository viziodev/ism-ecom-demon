
export interface RestResponse<T>{
    statut:number
    totalItems?: number,
    pages?: Number[],
    totalPages?: number,
    currentPage?: number,
    results:T
}






