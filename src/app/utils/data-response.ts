export interface DataResponse<T> {

    timestamp: string;
    isError: boolean;
    message: string;
    data: T

}
