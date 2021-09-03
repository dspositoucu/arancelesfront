import { useEffect, useState } from 'react';

const useSelect = <T>(request: Promise<T>) => {

    const [opciones, setOpciones] = useState<any[]>([])

    useEffect(() => {
        request
            .then((resp:any) => {
                console.log("respuesta  <<<>>> ",resp)
                setOpciones(resp)
            })
    }, [])
    return {
        opciones,
    }
}

export default useSelect