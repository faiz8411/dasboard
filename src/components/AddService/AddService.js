import React from 'react';
import { useForm } from 'react-hook-form';


const AddService = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch("http://localhost:5000/addService", {
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

    return (
        <div>
            <div>
                <h1 className="mb-4 text-center text-danger">Please Add Services</h1>
                <div className=" w-25 m-auto ">
                    <div className="AdService-container ">
                        <div className="addService">
                            <form onSubmit={handleSubmit(onSubmit)} style={{ height: 300, m: 0 }}>
                                <input
                                    style={{ border: '2px solid green', }}
                                    {...register("name")}
                                    placeholder="Name"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <br />

                                <input
                                    style={{ border: '2px solid green' }}
                                    {...register("description")}
                                    placeholder="wheeler"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <br />
                                <input
                                    style={{ border: '2px solid green' }}
                                    {...register("color")}
                                    placeholder="color"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <input
                                    style={{ border: '2px solid green' }}
                                    {...register("commission")}
                                    placeholder="commission in percentage"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                {/* <input
                                    style={{ border: '2px solid green' }}
                                    {...register("details")}
                                    placeholder="address"
                                    className="p-2 m-2 w-100 input-field"
                                /> */}
                                <br />
                                <input
                                    style={{ border: '2px solid green', m: 1 }}
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <br />
                                <input
                                    style={{ border: '2px solid green', m: 1 }}
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <br />



                                <input
                                    style={{ border: '2px solid green', m: 2 }}
                                    {...register("price", { required: true })}
                                    placeholder="out of dhaka price"
                                    type="number"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <br />
                                <input
                                    style={{ border: '2px solid green', m: 2 }}
                                    {...register("price2", { required: true })}
                                    placeholder="located in dhaka"
                                    type="number"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <br />




                                <input
                                    style={{ width: '30%' }}
                                    type="submit"
                                    value="Add"
                                    className="btn btn-info w-50"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;