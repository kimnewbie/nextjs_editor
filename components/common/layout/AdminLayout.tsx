import { FC, ReactNode } from 'react';
import { AiOutlineContacts, AiOutlineContainer, AiOutlineDashboard, AiOutlineFileAdd, AiOutlineMail, AiOutlineTeam } from 'react-icons/ai';
import AdminNav from '../AdminNav';
import Link from 'next/link';

interface Props {
    children: ReactNode;
}

const navItems = [
    { href: "/admin", icon: AiOutlineDashboard, label: 'Dashboard' },
    { href: "/posts", icon: AiOutlineContainer, label: 'Posts' },
    { href: "/users", icon: AiOutlineTeam, label: 'Users' },
    { href: "/comments", icon: AiOutlineMail, label: 'Comments' },
    { href: "/contact", icon: AiOutlineContacts, label: 'Contact' },
]

const AdminLayout: FC<Props> = ({ children }): JSX.Element => {
    return <div className='flex'>
        <AdminNav navItems={navItems} />
        <div className='flex-1 p-4'>
            {children}
        </div>
        <Link href='/admin/post/create' className='bg-secondary-dark dark:bg-secondary-light text-primary dark:text-primary-dark fixed z-10 right-1 bottom-10 p-3 rounded-full hover:scale-90 shadow transition'>
            <AiOutlineFileAdd size={24} />
        </Link>
    </div>;
};

export default AdminLayout;