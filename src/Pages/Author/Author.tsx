import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { PostData } from '../Home/HomeBlog/HomeBlog';
import AuthorPostCard from './AuthorPostCard/AuthorPostCard';
import userPlaceholderImg from '../../img/placeholder_user.png';


const Author: React.FC = () => {
    const { user, loading } = useContext(AuthContext);
    const [authorPost, setAuthorPost] = useState<PostData[]>([]);

    useEffect(() => {
        fetch(`https://knowledge-tunes-server.vercel.app/author?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAuthorPost(data))
    }, [user?.email, authorPost])

    console.log(user)
    return (
        <main>
            <div className="author_info p-5 bg-green-50">
                <img alt="img" src={user?.photoURL ? user?.photoURL : userPlaceholderImg}
                    className="mx-auto object-cover rounded-full h-20 w-20 " />
                <h2 className='text-2xl text-semibold text-center mt-2'>
                    {user?.displayName ? user?.displayName : "No name set"}
                </h2>
            </div>

            {
                authorPost.length > 0 ?
                    <main className='grid grid-cols-12 px-4 mt-5'>
                        {
                            authorPost.map(authPData => <AuthorPostCard key={authPData._id} authPData={authPData} />)
                        }
                    </main> : <h2 className='text-xl text-gray-800 px-4 my-5'>You have no post</h2>
            }

        </main>
    );
};

export default Author;