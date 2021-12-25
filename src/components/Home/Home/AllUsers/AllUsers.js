import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AllUsers = () => {

    const { user, superAdmin } = useAuth()
    const [users, setUsers] = useState([]);
    // const { register, handleSubmit } = useForm();
    const [control, setControl] = useState(false)

    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");
    const handleStatus = e => {
        setStatus(e.target.value)
    }
    console.log(status)

    console.log(status);
    useEffect(() => {
        fetch(`http://localhost:5000/allusers`)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
    const handleUpdate = (id) => {
        fetch(`https://quiet-springs-89109.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };

    const handleDelete = (id) => {
        alert('you want to delete')
        fetch(`https://quiet-springs-89109.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        console.log(id);
    };
    return (
        <div>
            <h4>all orders</h4>
            {
                users.map(pd => (<div className=' col-sm-12'>
                    <div className="service border border p-3 ">

                        <div className="row">
                            {/* <div className="col-md-2">
                                <div className="images">
                                    <h6>view</h6>
                                    <img height="50px" width="80px" src={pd.image} alt="" />

                                </div>

                            </div> */}
                            <div className="col-md-2">
                                <h6>name</h6>
                                <h6 className='description'>{pd.displayName}</h6>





                            </div>
                            <div className="col-md-4">
                                <h6>user email</h6>
                                <p className=' description-project'>{pd.email}</p>
                            </div>
                            <div className="col-md-2">
                                <h6>Role</h6>
                                <p className='text-danger'>{pd.role}</p>
                            </div>
                            <div className="col-md-2">

                            </div>



                        </div>



                    </div>

                </div>
                ))
            }
        </div>
    );
};

export default AllUsers;