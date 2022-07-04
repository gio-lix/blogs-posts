import React from 'react';
import {useSelector} from "react-redux";
import {selectAllUsers} from "../redux/slices/users/userSlice";
import {Link} from "react-router-dom"

const UsersList = () => {
    const users = useSelector(selectAllUsers)

    return (
        <section
            className="max-w-[(1280px] w-[calc(100%-10%)] mx-auto"
        >
            <h2 className="text-center text-2xl font-semibold text-yellow-500  my-10">Users</h2>
            <ul >
                {users?.map((user, index) => {
                    return (
                        <li key={index} className='text-center my-3'>
                            <Link to={`/user/${user.id}`}>
                                <a className='text-gray-300 hover:text-amber-500 text-sm'>
                                    {user.name}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

export default UsersList;