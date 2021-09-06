
import { useDispatch } from 'react-redux'

const useSubmit = (action, dataSubmit) => {

  const dispatch = useDispatch()

  const formSubmit = (event) => {
    console.log("DATOS FORMULARIOS", dataSubmit)
    event.preventDefault()
    dispatch(action(dataSubmit))
  }
  return {
    formSubmit
  }
}
export default useSubmit