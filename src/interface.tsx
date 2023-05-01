export interface ApiError extends Error {
    response?: {
        status: number,
        data: any,
    }
}

export interface TaskInterface {
    id: string,
    title: string,
    completed: boolean,
    isEdit: boolean
}

export interface TaskFilterOption {
    text: string,
    value: string,
}