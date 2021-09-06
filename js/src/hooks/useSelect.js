import { useEffect, useState } from 'react';

const useSelect =(request) => {

    const [opciones, setOpciones] = useState([])

    useEffect(() => {
        request
            .then((resp) => {
                console.log("respuesta  <<<>>> ",resp)
                setOpciones(resp)
            })
    }, [])
    return {
        opciones,
    }
}

export default useSelect