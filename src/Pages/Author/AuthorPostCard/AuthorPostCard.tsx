import React from 'react';
import { HiPencilSquare, HiArchiveBoxXMark, HiOutlineCalendarDays, HiOutlineChatBubbleLeftRight, HiOutlineHeart, HiSparkles } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { PostData } from '../../Home/HomeBlog/HomeBlog';


type Props = {
    authPData: PostData
}

const AuthorPostCard = ({ authPData }: Props) => {
    const { _id, title, category, posted_date, isPopular, description, postImg, } = authPData;
    // ---> handle delete user post
    const handleDeletePost = (id: React.MouseEventHandler<SVGElement>) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#22C55E',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // --->method
                fetch(`https://knowledge-tunes-server.vercel.app/author/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // ---> toast delete msg
                            Swal.fire(
                                'Deleted!',
                                'Your Post has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(err => toast.error(err.message))
            }
        })

    }

    return (
        <div className="mb-4 p-0 sm:p-4 col-span-12 md:col-span-6 lg:col-span-3 gap-2 ">
            <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-sm hover:shadow-lg">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105" src={postImg} alt="blog" />

                <div className='flex justify-between items-center px-6 mt-6'>
                    <h2 className="text-sm font-semibold text-green-500">{category}</h2>
                    <div className="icon_box flex items-center gap-2 text-lg cursor-pointer">
                        <Link to={`/author/update-post/${_id}`}>
                            <HiPencilSquare
                                className='text-blue-500 hover:text-blue-600' />
                        </Link>
                        <HiArchiveBoxXMark
                            onClick={() => handleDeletePost(_id)}
                            className='text-red-500 hover:text-red-600' />
                    </div>
                </div>
                {
                    isPopular &&
                    <span className='text-xs flex my-2 justify-center items-center bg-green-500 px-2 text-white right-0 top-0'>
                        Popular
                        <HiSparkles className='ml-2 text-white' />
                    </span>
                }
                <div className="py-1 px-6 cursor-pointer">
                    <Link to={`/post/${_id}`} className="mb-3 hover:text-green-500 duration-200 inline-block title-font text-xl font-semibold text-gray-800 tracking-wide ">{title}</Link>
                    <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-500">{description.slice(0, 200)}...</p>
                </div>
                <div className="pt-1 pb-4 px-6 flex justify-between items-center flex-wrap">

                    <div className="post_info flex gap-2 md:gap-3">
                        <div className='flex gap-1 items-center'>
                            <HiOutlineCalendarDays className='text-green-500' />
                            <small className='text-xs'>{posted_date}</small>
                        </div>
                        <span className='text-green-500'>-</span>
                        <div className='flex gap-1 items-center'>
                            <HiOutlineChatBubbleLeftRight className='text-green-500' />
                            <small className='text-xs'>55</small>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <HiOutlineHeart className='text-green-500' />
                            <small className='text-xs'>20</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthorPostCard;