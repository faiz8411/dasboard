import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Myorder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch(`https://powerful-savannah-04431.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    const handleDelete = (id) => {
        alert('you want to delete')
        fetch(`https://powerful-savannah-04431.herokuapp.com/deleteOrder/${id}`, {
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
        <div className='order-container'>
            <div className="row container">

                {
                    orders.map(pd => (<div className=' col-sm-12'>
                        <div className="service border border p-3 ">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images">
                                        <img className='img-fluid' src={pd.image} alt="" />

                                    </div>

                                </div>
                                <div className="col-md-6 location">
                                    <h4>contact info</h4>
                                    <h6 className='description'>customer email:{user.email}</h6>
                                    <h6 className='description'>service name:{pd.name}</h6>

                                    <p className=' description-project'>{pd.description}</p>
                                    <h6 className='price'>price:${pd.price}</h6>
                                    <p>{pd.details}</p>
                                    <p>mobile:{pd.number}</p>
                                    <button className='mt-5 p-2 border-0 bg-danger rounded text-white' onClick={() => handleDelete(pd._id)}>delete order</button>

                                </div>


                            </div>



                        </div>

                    </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Myorder;