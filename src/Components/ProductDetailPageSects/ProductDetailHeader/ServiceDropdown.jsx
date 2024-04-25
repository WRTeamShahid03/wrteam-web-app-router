'use client'
import React from 'react'
import { Dropdown } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaAngleDown } from "react-icons/fa6";


const ServiceDropdown = ({setShow}) => {

    const router = useRouter();

    const items = [
        {
            key: '1',
            label: (
                <>
                    <span>
                        <Link href="/services/web-development" className={`dropdownItem productDropdownItem ${router.pathname === '/services/web-development' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Web Development</Link>
                    </span>
                </>
            ),
        },
        {
            key: '2',
            label: (
                <>
                    <span>
                        <Link href="/services/app-development" className={`dropdownItem productDropdownItem ${router.pathname === '/services/app-development' ? 'navActive' : ''}`} onClick={() => setShow(false)}>App Development</Link>
                    </span>
                </>
            ),
        },
        {
            key: '3',
            label: (
                <>
                    <span>
                        <Link href="/services/ui-ux-design" className={`dropdownItem productDropdownItem ${router.pathname === '/services/ui-ux-design' ? 'navActive' : ''}`} onClick={() => setShow(false)}>UI/UX Design Service</Link>
                    </span>
                </>
            ),
        },
        {
            key: '4',
            label: (
                <>
                    <span>
                        <Link href="/services/digital-marketing" className={`dropdownItem productDropdownItem ${router.pathname === '/services/digital-marketing' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Digital Marketing Service</Link>
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
                    <span className={`nav-link ${router.pathname.startsWith('/services') ? 'navActive' : ''}`}>
                        Services
                        <FaAngleDown size={14} />
                    </span>
                </a>
            </Dropdown>
        </div>
    )
}

export default ServiceDropdown
