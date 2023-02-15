import React from 'react';

const UserDetailsHandler = ({userDetails}) => {
    const {avatar, Bio, jobTitle, profile} = userDetails
    const {firstName, lastName, username, email} = profile
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={avatar} alt="user_profile" className="w-36 h-36 rounded-full" onError={e=>{
                  e.target.onerror = null;
                  e.target.src = "https://i.ibb.co/pfg1ZJV/fakeuser.jpg"
              }}/>
            <p className='font-medium mt-2 mb-5'>@{username}</p>
            <p className="textarea textarea-bordered w-80 min-h-16 text-base py-4">{Bio}</p>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Full Name</span>
                </label>
                <input type="text" value={firstName+" "+lastName} className="input input-bordered w-full max-w-xs focus:outline-none" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Job Title</span>
                </label>
                <input type="text" value={jobTitle} className="input input-bordered w-full max-w-xs focus:outline-none" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" value={email} className="input input-bordered w-full max-w-xs focus:outline-none" />
            </div>
        </div>
    );
};

export default UserDetailsHandler;