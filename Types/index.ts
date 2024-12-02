import { Url } from "next/dist/shared/lib/router/router";

export interface TapsProps {
    text : string ;
    link: Url ;
}

export interface HeroProps {
    title: string;
    des: string;
    btn?: string ;
    
}
