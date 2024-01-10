import Image from "next/image";
import React from "react";
import loader from '../Asset/Images/loader/loader.gif'

const Loader = () => {
    return (
        <>
            <div className="loaderWrapper container">
                <Image src={loader} height={0} width={0}/>
            </div>

        </>
    );
};

export default Loader;
