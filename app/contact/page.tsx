import { NextPage } from "next";
import style from './contact.module.css';

interface Props { }

const Contact: NextPage<Props> = () => {
    return (
        <div className={style.title} >
            Contact page
        </div >
    )
}

export default Contact;