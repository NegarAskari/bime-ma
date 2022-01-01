import {atom} from 'recoil'

const formErrors = atom({
    key: 'formErrors',
    default: {
        name: null,
        lastName: null,
        phoneNumber: null,
        email: null,
        height: null,
        weight: null,
        age: null,
        branch: null
    }
})

export default formErrors