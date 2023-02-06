import React, {FC, ReactNode} from 'react';
import {Header} from '../Header/Header';

interface LayoutProps {
    children?: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    );
};


