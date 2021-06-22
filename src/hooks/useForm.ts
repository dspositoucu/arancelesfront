import { useDispatch } from 'react-redux';
import { ChangeEvent, useState, FormEvent } from 'react';

export const useForm = <T>(form :T, action :Function) =>{

    const [formData, setFormData] = useState(form)
    const dispatch = useDispatch()

    const handleChangeForm = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setFormData({
          ...formData,
          [target.name]: target.value
        })
      }

      const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        console.log(formData)
        dispatch(action(formData))
      }

    return {formData, handleChangeForm, handleSubmit}
}