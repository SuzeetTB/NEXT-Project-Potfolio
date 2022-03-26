import { IconType } from "react-icons";

export interface Iservices {
    id: number;
    title: string;
    description: string;
    Icon: IconType;
    image: string;
    category: string;
}

export interface ISkill {
    id: number;
    title: string;
    Icon: IconType;
    level: string;  
}

export interface IAcademics {
    id: number;
    organization: string;
    image: string;
    degree: string;
    year: string;
    address: string;
}

export interface IProject {
    id: number;
    name: string;
    description: string;
    image: string;
    category: Array<Category>;
    url_deployed?  : string;
    url_github?    : string;
    key_features?  : Array<string>;
}

export type Category = "all"|"react"|"node"|"python"|"android"|"django"|"laravel"|"flutter"|"angular"|"vue"|"react-native"|"ionic"|"swift"|"c"|"c++"|"c#"|"java"|"php"|"html"|"css"|"javascript"|"typescript"|"sql"|"mongodb"|"firebase"|"mysql"|"postgresql"|"redis"|"mongodb"|"aws"|"azure"|"heroku"|"firebase"|"firebase-functions"|"firebase-cloud-messaging"|"firebase-database"|"firebase-storage"|"firebase-analytics"|"firebase-crashlytics"|"firebase-admob"|"firebase-auth"|"firebase-firestore"|"firebase-messaging"|"firebase-performance"|"firebase-remote-config"|"firebase-analytics"|"firebase-crashlytics"|"firebase-admob"|"firebase-auth"|"firebase-firestore"|"firebase-messaging"|"firebase-performance"|"firebase-remote-config"|"firebase-analytics"|"firebase-crashlytics"|"firebase-admob"|"firebase-auth"|"firebase-firestore"|"firebase-messaging"|"firebase-performance"|"firebase-remote-config"|"firebase-analytics"|"firebase-crashlytics"|"firebase-admob"|"firebase-auth"|"firebase-firestore"|"firebase-messaging"|"firebase-performance"|"firebase-remote-config"|"firebase-analytics"|"firebase-crashlytics"|"firebase-admob"|"firebase-auth"|"firebase-firestore"|"firebase-messaging"|"firebase-performance"|"firebase-remote-config"|"firebase-analytics"|"firebase-crashlytics"