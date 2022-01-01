import {atom} from 'recoil'

const formState = atom ({
    key: 'formState',
    default: {
        name: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        height:0,
        weight:0,
        age:0,
        branch:'شعبه'
    }
})

export default formState