import User from '../../models/user';

export const DELETE_USER = 'DELETE_USER';
export const SET_USERS = 'SET_USERS';
export const UPDATE_USER = 'UPDATE_USER';

export const fetchUsers = () => {
    return async (dispatch, getState)  => {
        const userId = getState().auth.userId;
        const response = await fetch('https://gymapp-b60ab-default-rtdb.europe-west1.firebasedatabase.app/users.json');
        const resData = await response.json();
        const loadedUsers = [];
        for (const key in resData ) {
            loadedUsers.push(new User(
                key,
                resData[key].permission,
                resData[key].name
                )
            );
        }
        dispatch ({type: SET_USERS, users: loadedUsers, loginUser: loadedUsers.find(user => user.userId === userId )});
    };
};

export const deleteUser = userId => {
    return async dispatch => {
        await fetch(`https://gymapp-b60ab-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`, {
           method: 'DELETE',
       });
    dispatch ({type: DELETE_USER, uid: userId  });    
  };
};


export const updateUser = (userId, name) => {
    return async (dispatch) => {
        const response = await fetch(`https://gymapp-b60ab-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
            });

            dispatch({ type: UPDATE_USER, uid: userId, userData : { name } });
    };
};