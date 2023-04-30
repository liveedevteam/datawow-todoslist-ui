import { ApiError } from '../interface';

const isApiError = (error: unknown): error is ApiError => { return error instanceof Error && 'response' in error; }

export default isApiError