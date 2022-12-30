import React, { useState, useEffect } from 'react';
import PostCard from '../../../Components/PostCard/PostCard';

export interface PostData {
    _id: number,
    title: string;
    posted_date: string;
    description: string;
    tags?: (string)[] | null;
    postImg: string;
    user: User;
    category: string;
    email: string
}
export interface User {
    name: string;
    userImg: string;
}



const HomeBlog: React.FC = () => {
    const [postData, setPostData] = useState<PostData[]>([]);

    useEffect(() => {
        fetch(`http://localhost:5000/posts`)
            .then(res => res.json())
            .then(data => setPostData(data))
    }, [])
    return (
        <div className='container mx-auto px-4 flex flex-wrap flex-col gap-10 my-10'>
            {
                postData.map((pData, index) => <PostCard key={index} pData={pData} />)
            }
        </div>
    );
};

export default HomeBlog;