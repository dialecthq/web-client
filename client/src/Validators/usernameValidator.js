import axios from 'axios'

const usernameValidator = async (_, value) => {
    if(value){
        const resp = await axios.get('http://localhost:9000/user/check/username', {
            params: {
                username: value
            }
        })

        if(resp.data.available) {
            return Promise.resolve(true)
        } else {
            return Promise.reject(resp.data.available)
        }
    }
}

export default usernameValidator