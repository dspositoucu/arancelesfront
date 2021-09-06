import { useEffect, useState } from "react";

const useGetDataTable = (accion, params = null) => {

    const [data, getData] = useState()

    const foo = async () => {
        await getData(
            accion
            .then(resp => getData(resp.data))
            .catch(err => console.log(err)))
    }
    useEffect(() => {
        foo()
    }, [])

    return {
        dataTableSecondary: data
    }
}

export default useGetDataTable