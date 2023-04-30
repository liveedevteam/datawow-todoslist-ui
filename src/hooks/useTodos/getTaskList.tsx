import apiClient from "@/services/apiClient"

const getTaskList = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await apiClient.get('/todos')
            resolve(data)
        } catch (error) {
            console.log(error)
            reject(error)
        }

    })
}

export default getTaskList