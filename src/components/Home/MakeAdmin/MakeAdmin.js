import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleSuperAdminSubmit = (e) => {
        const user = { email }
        fetch('https://powerful-savannah-04431.herokuapp.com/users/superAdmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        e.preventDefault()
    }
    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }
    return (
        <div>
            <h2>this is make super admin</h2>
            <div>
                <form onSubmit={handleSuperAdminSubmit}>
                    <input
                        style={{ width: '80%', margin: 20 }}
                        // defaultValue="email"
                        onBlur={handleOnBlur}
                        type="email"
                        name='email'
                        placeholder='email'
                    /> <br />
                    <button type='submit'>make super  admin</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;