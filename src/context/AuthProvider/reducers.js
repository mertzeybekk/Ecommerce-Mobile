import AsyncStorage from "@react-native-async-storage/async-storage"

export default function reducers(state, action) {
    switch (action.type) {
        case 'SET_TOKEN':
            const { user } = action.payload;
            console.log("userrr"+ user);
            AsyncStorage.setItem("@token", (user))
            AsyncStorage.getItem('token').then(userSession => {
                console.log(userSession);
            })
            return { ...state, user };

        case 'REMOVE_USER':
            AsyncStorage.removeItem('@token')
            return { ...state, user: null };
        default:
            return state
    }
}