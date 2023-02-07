import {applyDataVariantOverrides} from 'data/applyVariantOverrides';

import FOOTER_DATA from './footer.json';

export interface FooterData {
    year: string;
    columns: FooterColumn[];
}

export interface FooterColumn {
    title: string;
    links: FooterLink[];
}

export interface FooterLink {
    label: string;
    url?: string;
    action?: string;
    external?: boolean;
}

export const getFooterData = (variant?: string): FooterData => {
    const data = applyDataVariantOverrides(FOOTER_DATA as any, variant) as FooterData;
    return data;
};
