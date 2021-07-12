import axios from 'axios'

const RoomAPI = {
  join: (uid, username, roomName) => axios.get('http://localhost:9000/user/join', { params: { uid, username, roomName } })
}

export default RoomAPI
