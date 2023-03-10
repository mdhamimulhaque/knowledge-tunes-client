import React from 'react';
import { HiAcademicCap, HiOutlineLightBulb, HiGlobeAsiaAustralia, HiCursorArrowRipple, HiUserGroup } from "react-icons/hi2";
import { Link } from 'react-router-dom';

type Categories = {
    id: number;
    icon: JSX.Element;
    name: string;
}[]

const categories: Categories = [
    {
        id: 1,
        icon: <HiCursorArrowRipple className='text-5xl duration-300 text-green-300' />,
        name: 'Technology'
    },
    {
        id: 2,
        icon: <HiOutlineLightBulb className='text-5xl duration-300 text-green-300' />,
        name: 'Science'
    },
    {
        id: 3,
        icon: <HiUserGroup className='text-5xl duration-300 text-green-300' />,
        name: 'Sports'
    },
    {
        id: 4,
        icon: <HiGlobeAsiaAustralia className='text-5xl duration-300 text-green-300' />,
        name: 'Global'
    }
]

const HomeCategory: React.FC = () => {

    return (
        <>
            {
                categories.map(categoryItem =>
                    <Link to={`/category/${categoryItem?.name}`} key={categoryItem?.id}
                        className="home_category_box bg-green-100 shadow-sm hover:shadow hover:text-green-400 duration-300 cursor-pointer p-4 flex justify-center flex-col">
                        <span className='flex justify-center'>
                            {categoryItem?.icon}
                        </span>
                        <h3 className='text-lg lg:text-2xl text-center duration-300'>{categoryItem?.name}</h3>
                    </Link>
                )
            }

        </>
    );
};

export default HomeCategory;