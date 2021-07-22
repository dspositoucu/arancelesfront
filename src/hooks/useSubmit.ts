import { FormEvent } from 'react'
import { useDispatch } from 'react-redux'

const useSubmit = (action:Function, dataSubmit:Object) => {

  const dispatch = useDispatch()

  const formSubmit = (event: FormEvent<HTMLFormElement>): void => {
    console.log("DATOS FORMULARIOS", dataSubmit)
    event.preventDefault()
    dispatch(action(dataSubmit))
  }
  return {
    formSubmit
  }
}
export default useSubmit