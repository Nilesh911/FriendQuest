import {toast} from 'react-toastify'

export const handleSucces=(msg)=>{
    toast.success(msg,{
        positon:'top=right'
    })
}

export const handleError=(msg)=>{
    toast.error(msg,{
        positon:'top=right'
    })
}