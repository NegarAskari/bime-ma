import {selector} from 'recoil'
import formState from './formState'

const BMI = selector({
    key: 'BMI',
    get: ({get}) => {
        const form = get(formState)
        const height = form.height
        const weight = form.weight
        return (height == 0 ? 0 : weight * 10000 / (height * height))
    }
})

export default BMI