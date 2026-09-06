import { SlSocialFacebook } from "react-icons/sl";
import {MdOutlineMailOutline,} from "react-icons/md";
import {CiInstagram, CiLinkedin} from "react-icons/ci";
import {FaGithub, FaTelegram} from "react-icons/fa";
export default function MatchIcon({text}:{text:string}){

    switch (text.toLocaleLowerCase().substring(0,1)){
        case 'f':
            return <SlSocialFacebook/>
        break;
        case 'e':
            return <MdOutlineMailOutline/>
        break;
        case 't':
            return <FaTelegram/>
        break;
        case 'i':
                return <CiInstagram/>
        break;
        case 'l':
            return <CiLinkedin/>
        case 'g':
            return <FaGithub/>
        break;
        default:
            return null
    }
}