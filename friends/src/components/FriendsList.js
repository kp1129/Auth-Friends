import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data);
            console.log(friends);
        })
        .catch(err => console.log(err));
    }, [friends.length]);
    return (
        <div>
            <h3>Friends List</h3>
            
            {friends && friends.map(friend => {
                return <Friend data={friend} />
            })}

            <AddFriend setFriends={setFriends}/>
        </div>
    )
}

export default FriendsList;