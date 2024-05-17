'use client'
import React from 'react'
import { Dropdown } from 'antd';
import Link from 'next/link';
import { FaAngleDown } from "react-icons/fa6";
import { usePathname } from 'next/navigation';


const MoreDropDown = ({ setShow }) => {


    const router = usePathname();

    const items = [
        {
            key: '1',
            label: (
                <>
                    <span>
                        <Link href="/about-us" className={`dropdownItem productDropdownItem ${router === '/about-us/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>About Us</Link>
                    </span>
                </>
            ),
        },
        {
            key: '2',
            label: (
                <>
                    <span>
                        <Link href="/portfolio" className={`dropdownItem productDropdownItem${router === '/portfolio/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Portfolio</Link>
                    </span>
                </>
            ),
        },
        {
            key: '3',
            label: (
                <>
                    <span>
                        <Link href="/hire-us" className={`dropdownItem productDropdownItem${router === '/hire-us/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Hire-us</Link>
                    </span>
                </>
            ),
        },
    ];
    return (
        <div>
            <Dropdown
                menu={{
                    items,
                }}
                className="navDropdown"
            >
                <a onClick={(e) => e.preventDefault()}>
                    <span className={`nav-link ${router.startsWith('/products') ? 'navActive' : ''}`}>
                        More
                        <FaAngleDown size={14} />
                    </span>
                </a>
            </Dropdown>
        </div>
    )
}

export default MoreDropDown
