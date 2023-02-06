import type {AppProps} from 'next/app';
import '@/styles/globals.scss';
import {Poppins} from '@next/font/google';

import {Layout} from '@/components/Layout/Layout';

const poppins = Poppins({
        weight: ['400', '600', '700'],
        style: ['normal',],
        subsets: ['latin']
    },
);

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <style jsx global>{`
              html {
                font-family: ${poppins.style.fontFamily};
              }
            `}</style>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
