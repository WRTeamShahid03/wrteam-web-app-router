'use client'
import React from 'react'
import { Dropdown } from 'antd';
import Link from 'next/link';
import { FaAngleDown } from "react-icons/fa6";
import { usePathname } from 'next/navigation';


const ServiceDropdown = ({setShow}) => {

    const router = usePathname();

    const items = [
        {
            key: '1',
            label: (
                <>
                    <span>
                        <Link href="/services/installation" className={`dropdownItem productDropdownItem ${router === '/services/installation/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Setup & Installatioin</Link>
                    </span>
                </>
            ),
        },
        {
            key: '2',
            label: (
                <>
                    <span>
                        <Link href="/services/customization" className={`dropdownItem productDropdownItem ${router === '/services/customization/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Customization</Link>
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
                    <span className={`nav-link ${router.startsWith('/services') ? 'navActive' : ''}`}>
                        Services
                        <FaAngleDown size={14} />
                    </span>
                </a>
            </Dropdown>
        </div>
    )
}

export default ServiceDropdown
