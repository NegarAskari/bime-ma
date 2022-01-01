import {selector} from 'recoil'
import formState from './formState'

const BMI = selector({
    key: 'BMI',
    get: ({get}) => {
        const height = get(formState).height
        const weight = get(formState).weight
        return (height == 0 ? 0 : weight * 10000 / (height * height))
    }
})

export default BMI