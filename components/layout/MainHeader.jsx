"use client"
import React, {useContext} from 'react';
import {FaBars} from "react-icons/fa";
import {MenuContext} from "@/context/MenuContext";
import UserAreaSelectBox from "@/components/layout/UserAreaSelectBox";

const MainHeader = () => {
    const {toggle} = useContext(MenuContext);
    return (
        <div className="bg-white flex justify-between items-center px-4 h-12 mb-4">
            <div>
                Brand
            </div>
            <div className="flex justify-center items-center gap-4">
                <div onClick={toggle} className="lg:hidden">
                    <FaBars className="cursor-pointer"> </FaBars>
                </div>
                <div>
                <UserAreaSelectBox> </UserAreaSelectBox>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;