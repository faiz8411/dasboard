import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Details.css'

const Details = () => {
    const [details, setDetails] = useState({})
    const { user } = useAuth()
    const { serviceId } = useParams()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        alert('your order successfully added in my order')
        data.status = "pending"
        console.log(data)
        fetch("http://localhost:5000/confirmOrder", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        reset()
    };

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [serviceId])
    return (
        <>
            <div className='details-container'>
                <h4>information about :{details.name}</h4>
                <div className="row">
                    <div className="col-md-4">
                        <img className='img-fluid' src={details.image} alt="" />
                    </div>
                    <div className="col-md-4">
                        <h6 className='location text-primary'>information</h6>
                        <p className='location'>wheeler:{details.description}</p>
                        <p className='location'>driver commission{details.details
                        }</p>
                        <p className='location'>out of dhaka city:{details.price}tk only</p>
                        <p className='location'>dhaka city:{details.price2}tk only</p>
                    </div>
                    <div className="col-md-4">

                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: 300, m: 3 }}>
                            {details.name && <input
                                style={{}}
                                {...register("name")}
                                placeholder="Name"
                                defaultValue={details.name}
                                className="p-2 m-2 w-100 input-field"

                            />}
                            <br />
                            {user?.email && <input
                                style={{}}
                                {...register("email")}
                                defaultValue={user.email}
                                placeholder="email"
                                className="p-2 m-2 w-100 input-field"
                            />}
                            <br />
                            <input

                                {...register("color")}
                                placeholder="color"
                                className="p-2 m-2 w-100 input-field"
                                defaultValue={details.color}
                            />
                            <br />
                            <input
                                style={{}}
                                {...register("details")}
                                placeholder="address"
                                required
                                className="p-2 m-2 w-100 input-field"

                            />
                            <br />
                            <input
                                style={{ m: 2 }}
                                {...register("number",)}
                                placeholder="mobile number"
                                type="number"
                                className="p-2 m-2 w-100 input-field"
                                required
                            />
                            <br />
                            <input
                                style={{ m: 2 }}
                                {...register("date",)}
                                placeholder="mobile number"
                                type="date"
                                className="p-2 m-2 w-100 input-field"
                                required
                            />
                            <br />


                            {details.image && < input
                                style={{ m: 1 }}
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100 input-field"
                                defaultValue={details.image}
                            />}
                            <br />



                            {details.price && <input
                                style={{ m: 2 }}
                                {...register("price", { required: true })}
                                placeholder="Price"
                                type="number"
                                className="p-2 m-2 w-100 input-field"

                            />}
                            <br />




                            <input
                                style={{ width: '30%' }}
                                type="submit"
                                value="confirm"
                                className="btn btn-info w-50"
                            />
                        </form>
                    </div>
                </div>


            </div>

        </>
    );
};

export default Details;