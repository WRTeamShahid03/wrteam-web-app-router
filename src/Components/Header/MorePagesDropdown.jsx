import React from 'react'
import { Dropdown } from 'antd';
import Link from 'next/link';
import { AiFillPlusCircle } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

const MorePagesDropdown = ({setShow}) => {

    const router = usePathname();

    const items = [
        {
            key: '1',
            label: (
                <>
                    <span>
                        <Link href="/career" className={`dropdownItem ${router === '/career/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Career</Link>
                    </span>
                </>
            ),
        },
        {
            key: '2',
            label: (
                <>
                    <span>
                        <Link href="/blogs" className={`dropdownItem ${router === '/blogs/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Blogs</Link>
                    </span>
                </>
            ),
        },
        {
            key: '3',
            label: (
                <>
                    <span>
                        <Link href="/contact-us" className={`dropdownItem ${router === '/contact-us/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Contact Us</Link>
                    </span>
                </>
            ),
        },
        {
            key: '4',
            label: (
                <>
                    <span>
                        <Link href="/exclusive-license" className={`dropdownItem ${router === '/exclusive-license/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Exclusive License</Link>
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
                    <span className={`nav-link ${router === '/career/' || router === '/blogs/' || router === '/contact-us/' || router === '/exclusive-license/' ? 'navActive' : ''}`}>
                        More
                        <AiFillPlusCircle size={19} />
                    </span>
                </a>
            </Dropdown>
        </div>
    )
}

export default MorePagesDropdown
