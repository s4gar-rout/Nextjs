import React from "react";

const page = async ({ params }) => {
    const { username } = await params;

    return (
        <div className="h-screen w-full text-4xl text-center flex items-center justify-center capitalize text-pink-600">
            Profile of {username}
        </div>
    );
};

export default page;