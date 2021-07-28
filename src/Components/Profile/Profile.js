import React from 'react'
import LazyLoad from 'react-lazyload';
import "./Profile.css";

const Profile = ({name,phone,email}) => {
    return (
        <div className="Card">
             <LazyLoad height={500} >
            <img src={`https://avatars.dicebear.com/api/male/${name}.svg?background=%230000ff`} height="100px" width="100px" alt={name} />
            </LazyLoad>
            <div className="info">
            <h1>Name: {name}</h1>
            <h1>Phone: {phone}</h1>
            <h1>Email: {email}</h1>
            </div>
            </div>
        
    )
}

export default Profile
