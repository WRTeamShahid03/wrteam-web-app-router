import React from 'react'
import { Dropdown } from 'antd';
import Link from 'next/link';
import { AiFillPlusCircle } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

const ProductDropdown = ({setShow}) => {

    const router = usePathname();

    const items = [
        {
            key: '1',
            label: (
                <>
                    <span>
                        <Link href="/products/web-products" className={`dropdownItem ${router === '/products/web-products/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Web Products</Link>
                    </span>
                </>
            ),
        },
        {
            key: '2',
            label: (
                <>
                    <span>
                        <Link href="/products/app-products" className={`dropdownItem ${router === '/products/app-products/' ? 'navActive' : ''}`} onClick={() => setShow(false)}>App Products</Link>
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
                        Products
                        <AiFillPlusCircle size={19} />
                    </span>
                </a>
            </Dropdown>
        </div>
    )
}

export default ProductDropdown
