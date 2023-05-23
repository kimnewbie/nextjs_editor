"use client";

import { NextPage } from "next";
import { useEffect } from "react";
import { APP_NAME } from "../../../components/AppHead";

interface Props {
    params: { subCategory: string };
}

const ElectronicsSubCat: NextPage<Props> = ({ params }) => {
    const { subCategory } = params;

    useEffect(() => {
        document.title = subCategory + " | " + APP_NAME;
    }, []);

    return <div>ElectronicsSubCat: {subCategory}</div>;
};

export default ElectronicsSubCat;
