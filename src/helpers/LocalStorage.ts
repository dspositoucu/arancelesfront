export const setDataLocalStorage = (data:any, key:string) :void =>{
    const dataString = JSON.stringify(data)
    localStorage.setItem(key,dataString)
}

export const getDataLocalStorage = (key:string) :any =>  {
    const data = localStorage.getItem(key)

    const parseData = data ? JSON.parse(data) : data

    return parseData
}

export const getDecodeTokenLocalStorage = () =>{
    const data = getDataLocalStorage('access_token')
    if(!data) return null  

    var decodeToken = JSON.parse(atob(data.access_token.split('.')[1]))
    
    return decodeToken

}