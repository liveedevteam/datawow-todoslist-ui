import apiClient from "@/services/apiClient"
import isApiError from "@/services/isApiError"

const createTask = async (props: any) => {
    let { todos, setTodos, title, createData, setCreateData } = props
    try {
        let response = await apiClient.post('/todos', { title, completed: false })
        // console.log(response)
        if (response.status === 201) {
            // console.log("Create success")
            let getTodo = await apiClient.get('/todos')
            setTodos({
                ...todos,
                status: getTodo.status,
                state: "CREATE_TASK_SUCCESS",
                results: getTodo.data.map((e: any) => {
                    e.isEdit = false
                    return e
                })
            })
            setCreateData({
                ...createData,
                status: getTodo.status,
                state: "CREATE_TASK_SUCCESS",
                results: getTodo.data.map((e: any) => {
                    e.isEdit = false
                    return e
                })
            })
        }
    } catch (error) {
        console.error(error)
        setTodos({
            ...todos,
            state: "CREATE_TASK_FAIL"
        })
        if (isApiError(error)) setTodos({
            ...todos,
            status: error.response?.status,
        })
        else todos({
            ...todos,
            status: undefined,
        })
        setCreateData({
            ...createData,
            state: "CREATE_TASK_FAIL",
        })
    }
}

export default createTask