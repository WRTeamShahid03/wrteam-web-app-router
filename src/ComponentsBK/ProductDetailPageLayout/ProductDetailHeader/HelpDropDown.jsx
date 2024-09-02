'use client'
import React from 'react'
import { Dropdown } from 'antd';
import Link from 'next/link';
import { FaAngleDown } from "react-icons/fa6";
import { usePathname } from 'next/navigation';


const HelpDropDown = ({ setShow }) => {


    const router = usePathname();

    const items = [
        {
            key: '1',
            label: (
                <>
                    <span>
                        <Link href="/products/contact-us" className={`dropdownItem productDropdownItem ${router === '/products/contact-us/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Support</Link>
                    </span>
                </>
            ),
        },
        {
            key: '2',
            label: (
                <>
                    <span>
                        <Link href="/products/contact-us" className={`dropdownItem productDropdownItem${router === '/products/contact-us/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Contact Us</Link>
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
                        Help
                        <FaAngleDown size={14} />
                    </span>
                </a>
            </Dropdown>
        </div>
    )
}

export default HelpDropDown