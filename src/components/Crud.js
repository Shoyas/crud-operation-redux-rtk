import './Crud.css'; 
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUserName } from '../redux/Users';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Crud = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [newUserName, setNewUserName] = useState("");
  

    const userList = useSelector((state) => state.users.value)


  return (
    <div>
        <div className="addUser">
            <input type='text' placeholder="Name" onChange={(event) => setName(event.target.value)}/>

            <input type='text' placeholder="userName" onChange={(event) => setUserName(event.target.value)}/>

            <button onClick={() => {
                dispatch(addUser({
                    id: userList[userList.length-1].id+1,
                    name,
                    userName
                }));
            }}>Add User</button>
        </div>
        
        <div className="displayUsers">
            {userList.map((user) => {
                return (
                    <div className='cardArea'>
                        <Card>
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                    {user.userName}
                                </Card.Text>
                                <input 
                                    type="text"
                                    placeholder="New User Name"
                                    onChange={(event) => {
                                        setNewUserName(event.target.value)
                                    }}    
                                />
                                <Button 
                                
                                    variant="primary"
                                    onClick={() => {
                                        dispatch(updateUserName({
                                            id: user.id,
                                            userName: newUserName,
                                        }))
                                    }}
                                    >Update User Name</Button>
                                <Button 
                                    variant="primary"
                                    onClick={() => {dispatch(deleteUser(
                                        {id: user.id}))
                                    }}
                                >
                                    Delete User
                                </Button>

                            </Card.Body>
                        </Card>
                    </div>

                    

                )
            })}
        </div>
    </div>
    
  );
}

export default Crud;