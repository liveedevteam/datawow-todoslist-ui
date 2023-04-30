import apiClient from "@/services/apiClient"
import isApiError from "@/services/isApiError"

const getTaskList = async (props: any) => {
    let { todos, setTodos } = props
    try {
        let response = await apiClient.get('/todos')
        setTodos({
            ...todos,
            status: response.status,
            state: "GET_TASKLIST_SUCCESS",
            results: response.data
        })
    } catch (error) {
        console.error(error)
        setTodos({
            ...todos,
            state: "GET_TASKLIST_FAIL"
        })
        if (isApiError(error)) setTodos({
            ...todos,
            status: error.response?.status,
            results: error.response
        })
        else todos({
            ...todos,
            status: undefined,
            results: error
        })
    }
}

export default getTaskList