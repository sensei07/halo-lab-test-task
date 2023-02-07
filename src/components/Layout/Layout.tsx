import React, {FC, ReactNode} from 'react';
import {Header} from '../Header/Header';
import {Footer} from '@/components/Footer/Footer';

interface LayoutProps {
    children?: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
};


