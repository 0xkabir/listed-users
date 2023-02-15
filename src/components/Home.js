import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Error from "./Error";
import Loader from "./Loader";
import UserDetailsHandler from "./UserDetailsHandler";

const Home = () => {
  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users").then(
        (response) => response.json()
      ),
  });

  const [userDetails, setUserDetails] = useState(null);
  const [active, setActive] = useState(null);
  const handleUserDetails = (id) => {
    setActive(id);
    setUserDetails(users.find((user) => user.id === id));
  };
  if (isLoading) {
    return <Loader />;
  }

  if(isError){
      return <Error/>
  }

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center relative">
        <label
          htmlFor="my-drawer-2"
          className="btn-ghost drawer-button lg:hidden fixed left-5 top-5"
        >
          <FaBars />
        </label>
        {userDetails && <UserDetailsHandler userDetails={userDetails} />}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {users.map((user, index) => (
            <div
              key={index}
              className={`flex items-center gap-x-4 my-1 py-2 px-3 ml-4 cursor-pointer rounded-md hover:bg-gray-300 ${
                user.id === active && "bg-gray-300"
              }`}
              onClick={() => handleUserDetails(user.id)}
            >
              <img
                src={user.avatar}
                alt="user_profile"
                className="w-12 h-12 object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://i.ibb.co/pfg1ZJV/fakeuser.jpg";
                }}
              />
              <p>
                {user.profile?.firstName} {user.profile?.lastName}
              </p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
