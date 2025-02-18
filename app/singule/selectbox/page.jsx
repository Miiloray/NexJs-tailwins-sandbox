import React from 'react';
import CustomSelectBox from "@/app/singule/selectbox/components/CustomSelectBox";

const SelectBoxPage = () => {
    return(
        <div className="bg-white rounded-lg mx-4 p-4">
            <h1>
                This is Selection Box Page
            </h1>
            <br />
            <br />
            <CustomSelectBox></CustomSelectBox>
        </div>
    );
};

export default SelectBoxPage;