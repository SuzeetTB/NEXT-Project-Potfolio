
import { AiFillHtml5 } from 'react-icons/ai';
import { FaAndroid, FaCode, FaCss3Alt, FaNodeJs, FaReact, FaUnity } from 'react-icons/fa';
import {RiComputerLine} from 'react-icons/ri'
import { SiEclipseide, SiJavascript, SiKotlin, SiRubyonrails } from 'react-icons/si';
import { IAcademics, IProject, Iservices, ISkill } from './data-type';

export const services:Array<Iservices> = [
    {
        id: 1,
        title: 'Axios Softworks',
        description: 'Worked with <b>Node JS</b>, <b>ReactJs</b>, <b>Ruby on Rails</b> on various projects and also <b>Kotlin</b> for <em>Android Development</em>',
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        Icon: RiComputerLine
    },
    {
        id: 2,
        title: 'Service 2',
        description: 'Description 2',
        image: 'https://picsum.photos/200/300',
        category: 'Category 2',
        Icon: RiComputerLine
    },
    {
        id: 3,
        title: 'Axios Softworks',
        description: 'Worked with <b>Node JS</b>, <b>ReactJs</b>, <b>Ruby on Rails</b> on various projects and also <b>Kotlin</b> for <em>Android Development</em>',
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        Icon: RiComputerLine
    },
    {
        id: 4,
        title: 'Axios Softworks',
        description: 'Worked with <b>Node JS</b>, <b>ReactJs</b>, <b>Ruby on Rails</b> on various projects and also <b>Kotlin</b> for <em>Android Development</em>',
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        Icon: RiComputerLine
    },
]

export const languages:Array<ISkill> = [
    {
        id: 1,
        title: 'HTML & CSS',
        Icon: AiFillHtml5,
        level: '90%'
    },
    {
        id: 3,
        title: 'JavaScript',
        Icon: SiJavascript,
        level: '70%'
    },
    {
        id: 4,
        title: 'React',
        Icon: FaReact,
        level: '60%'
    },
    {
        id: 5,
        title: 'Node',
        Icon: FaNodeJs,
        level: '70%'
    },
    {
        id: 6,
        title: 'Ruby on Rails',
        Icon: SiRubyonrails,
        level: '40%'
    },
    {
        id: 7,
        title: 'Kotlin',
        Icon: SiKotlin,
        level: '75%'
    },
]

export const tools:Array<ISkill> = [
    {
        id: 1,
        title: 'VS Code',
        Icon: FaCode,
        level: '90%'
    },
    {
        id: 2,
        title: 'Android Studio',
        Icon: FaAndroid,
        level: '80%'
    },
    {
        id: 3,
        title: 'Unity',
        Icon: FaUnity,
        level: '70%'
    },
    {
        id: 4,
        title: 'Eclipse',
        Icon: SiEclipseide,
        level: '60%'
    },
]

export const academics:Array<IAcademics> = [
    {
        id: 1,
        organization: 'Kantipur Engineering College',
        image: 'https://picsum.photos/200/300',
        degree: 'Bachelor of Computer Engineering',
        year: '2018',
        address: 'Dhapakhel, Lalitpur'
    },
    {
        id: 2,
        organization: 'Kanjirowa National Higher Secondary School',
        image: 'https://picsum.photos/200/300',
        degree: 'HSEB(+2)',
        year: '2014',
        address: 'Koteshwor, Kathmandu'
    },
    {
        id: 3,
        organization: 'Himalayan English Secondary School',
        image: 'https://picsum.photos/200/300',
        degree: 'SLC',
        year: '2012',
        address: 'Dekocha, Bhaktapur'
    },
]

export const projects:Array<IProject> = [
    {
        id: 1,
        name: 'Z Blog',
        description: 'A blogging type simple CMS web project, Build with Node Js at backend and handbrake template engine, pagination.',
        image: 'https://picsum.photos/200/300',
        category: ['node','mongodb'],
        url_deployed: 'https://warm-journey-16132.herokuapp.com/',
        url_github: 'https://www.google.com',
        key_features: ['Node JS', 'Node', 'MongoDB', 'Bootstrap', 'Jquery', 'fontAwesome']

       

    },
    {
        id: 2,
        name: 'Zeitsu E-trade',
        description: 'An e-commerce web project for product sale, Build with Laravel at backend and Blade template engine, Cart system, toastr notification, Product pagination, Session  and cart checkout using Stripe.',
        image: 'https://picsum.photos/200/300',
        category: ['laravel', 'php'],
        url_deployed: 'https://zeitsuetrade.000webhostapp.com',
        url_github: 'https://www.google.com',
        key_features: ['PHP', 'MySQL Database', 'Bootstrap', 'Jquery', 'fontAwesome']
    },
    {
        id: 3,
        name: 'Gesture Based Cursor Control',
        description: 'A python based application which uses a web camera to capture image of hand and control the mouse events such as click, scroll, based on the gestures performed using the hand.',
        image: 'https://picsum.photos/200/300',
        category: ['python'],
        url_deployed: 'https://www.google.com',
        url_github: 'https://www.google.com',
        key_features: ['Anaconda', 'Python', 'Numpy', 'pyautogui', 'OpenCV']
    },
    {
        id: 4,
        name: 'Virtual KEC',
        description: 'A 3D model-based application to provide user an experience of viewing academic buildings, laboratory buildings of KEC College in virtually designed 3D space with the aim of familiarizing the college compound to new prospects.',
        image: 'https://picsum.photos/200/300',
        category: ['javascript', 'c#'],
        url_deployed: 'https://www.google.com',
        url_github: 'https://www.google.com',
        key_features: ['Unity', 'Autodesk 3DS Max', 'Blender for Modeling', 'Adobe Photoshop-textures']
    },
    {
        id: 5,
        name: 'Runner Runner',
        description: 'A simple graphics-based gaming application with 2D drawings, art and animations implementing a continuous loop of animation, plot positions-based collider functions, score points based on duration of survival and double buffering for smooth operation.',
        image: 'https://picsum.photos/200/300',
        category: ['c++'],
        url_deployed: 'https://www.google.com',
        url_github: 'https://www.google.com',
        key_features: ['CodeBlocks', 'C++', 'graphics.h']
    },
    {
        id: 6,
        name: 'Company Database',
        description: 'Employee Management System project built to manage employee details and records of an organization or company. It uses CRUD operations with authentication and authorization.',
        image: 'https://picsum.photos/200/300',
        category: ['c++'],
        url_deployed: 'https://www.google.com',
        url_github: 'https://www.google.com',
        key_features: ['Dev C++', 'C++']
    },
    {
        id: 7,
        name: 'Plustwonotes.com',
        description: 'Plustwonotes is an educational website to share and  post educational material of grade 11 and 12. I worked as a web designer, Content Creator and manager. The site hosted for 3 years.',
        image: 'https://picsum.photos/200/300',
        category: ['c++'],
        url_deployed: 'https://www.google.com',
        url_github: 'https://www.google.com',
        key_features: ['CodeBlocks', 'C++', 'graphics.h']
    },
]