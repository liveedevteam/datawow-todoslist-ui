import apiClient from "@/services/apiClient"
import isApiError from "@/services/isApiError"

const updateTask = async (props: any) => {
    let { todos, setTodos, id, title, updateData, setUpdateData } = props
    try {
        let response = await apiClient.put('/todos/' + id, { title })
        // console.log(response)
        if (response.status === 200) {
            // console.log("Create success")
            let getTodo = await apiClient.get('/todos')
            setTodos({
                ...todos,
                status: getTodo.status,
                state: "UPDATE_TASK_SUCCESS",
                results: getTodo.data.map((e: any) => {
                    e.isEdit = false
                    return e
                })
            })
            setUpdateData({
                ...updateData,
                status: getTodo.status,
                state: "UPDATE_TASK_SUCCESS",
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
            state: "UPDATE_TASK_FAIL"
        })
        if (isApiError(error)) setTodos({
            ...todos,
            status: error.response?.status,
        })
        else todos({
            ...todos,
            status: undefined,
        })
        setUpdateData({
            ...updateData,
            state: "UPDATE_TASK_FAIL",
        })
    }
}

export default updateTask