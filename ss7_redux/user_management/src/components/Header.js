import React from 'react';
import { useDispatch } from "react-redux"
import { deleteById, getListUser } from "../action/getListUser"
import { useSelector } from "react-redux"
import { DeleteUser } from '../service/UserService';

function Header() {
    const dispatch = useDispatch();

    // userSelector được dùng để theo dõi store, nếu store có sự thay đổi thì trang sẽ render lại
    //đối với store này đang chứa đối tượng combine cụ thể là list
    const listUser = useSelector((state) => state.list);

    const getListUser1 = () => {
        dispatch(getListUser());
    }
    const deleteUserById = () => {
        dispatch(deleteById());
    }
    const deleteUser = async (id) => {
        if (window.confirm("Do you wanna delete?")) {
            await DeleteUser(id);
            deleteUserById();
            alert("Delete Successfully");
        }
    }
    return (
        <>
            <nav>
                <h1>User List</h1>
                <button type='submit' onClick={() => getListUser1()}>Get users </button>
            </nav>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser.list.map(
                            (u, index) => {
                                return (<tr key={u.id}>
                                    <td>{index}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.website}</td>
                                    <td><button onClick={() => deleteUser(u.id)}>Delete</button></td>
                                </tr>)
                            })}

                    </tbody>

                </table>

            </div>
        </>

    )

}
export default Header;