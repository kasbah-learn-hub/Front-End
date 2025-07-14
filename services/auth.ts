import { api } from "@/config/api.config"

export const login = async (formdata: {email: string, password: string}) =>{
    const response = await api.post(`/auth`,formdata)
    return response
}