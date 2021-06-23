export const setDataLocalStorage = (data:any, key:string) :void =>{
    const dataString = JSON.stringify(data)
    localStorage.setItem(key,dataString)
}

export const getDataLocalStorage = (key:string) :any =>  {
    const data = JSON.parse(localStorage.getItem(key)||'')
    return data
}

