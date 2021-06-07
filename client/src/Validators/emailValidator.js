import axios from 'axios'

const emailValidator = async (_, value) => {
    if(value){
        const resp = await axios.get('http://localhost:9000/user/check/email', {
            params: {
                email: value
            }
        })

        if(resp.data.available) {
            return Promise.resolve(true)
        } else {
            return Promise.reject(resp.data.available)
        }
    }
}

export default emailValidator