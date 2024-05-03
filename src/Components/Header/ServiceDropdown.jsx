import React from 'react'
import { Dropdown } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillPlusCircle } from 'react-icons/ai';
import { usePathname } from 'next/navigation';


const ServiceDropdown = ({setShow}) => {

   // const router = useRouter();
   const router = usePathname();

    const items = [
        {
            key: '1',
            label: (
                <>
                    <span>
                        <Link href="/services/web-development" className={`dropdownItem ${router === '/services/web-development/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Web Development</Link>
                    </span>
                </>
            ),
        },
        {
            key: '2',
            label: (
                <>
                    <span>
                        <Link href="/services/app-development" className={`dropdownItem ${router === '/services/app-development/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>App Development</Link>
                    </span>
                </>
            ),
        },
        {
            key: '3',
            label: (
                <>
                    <span>
                        <Link href="/services/ui-ux-design" className={`dropdownItem ${router === '/services/ui-ux-design/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>UI/UX Design Service</Link>
                    </span>
                </>
            ),
        },
        {
            key: '4',
            label: (
                <>
                    <span>
                        <Link href="/services/digital-marketing" className={`dropdownItem ${router === '/services/digital-marketing/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Digital Marketing Service</Link>
                    </span>
                </>
            ),
        },
        {
            key: '5',
            label: (
                <>
                    <span>
                        <Link href="/services/customization" className={`dropdownItem ${router === '/services/customization' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Customization</Link>
                    </span>
                </>
            ),
        },
        {
            key: '6',
            label: (
                <>
                    <span>
                        <Link href="/services/installation" className={`dropdownItem ${router === '/services/installation/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Installation</Link>
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
                        <AiFillPlusCircle size={19} />
                    </span>
                </a>
            </Dropdown>
        </div>
    )
}

export default ServiceDropdown
