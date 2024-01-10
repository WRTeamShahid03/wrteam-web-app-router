import React from 'react'
import { Dropdown } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillPlusCircle } from 'react-icons/ai';

const ProductDropdown = ({setShow}) => {

    const router = useRouter();

    const items = [
        {
            key: '1',
            label: (
                <>
                    <span>
                        <Link href="/products/web-products" className={`dropdownItem ${router.pathname === '/products/web-products' ? 'navActive' : ''}`} onClick={() => setShow(false)}>Web Products</Link>
                    </span>
                </>
            ),
        },
        {
            key: '2',
            label: (
                <>
                    <span>
                        <Link href="/products/app-products" className={`dropdownItem ${router.pathname === '/products/app-products' ? 'navActive' : ''}`} onClick={() => setShow(false)}>App Products</Link>
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
                    <span className={`nav-link ${router.pathname.startsWith('/products') ? 'navActive' : ''}`}>
                        Products
                        <AiFillPlusCircle size={19} />
                    </span>
                </a>
            </Dropdown>
        </div>
    )
}

export default ProductDropdown
