
import { useState } from 'react'

const useForm = (initialValues) => {
    const [state, setState] = useState(initialValues)

    const handleInputChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        setState(state => ({ ...state, [name]: val }));
    };

    const handleReactSelectChange = (value, action) => {
        console.log(value.value);
        console.log(action.name);

        setState(state => ({ ...state, [action.name]: value.value }))
    }

    return [state, setState, handleReactSelectChange, handleInputChange]
}
export default useForm