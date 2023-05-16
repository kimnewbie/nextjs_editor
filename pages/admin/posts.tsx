import { NextPage } from 'next';
import AdminLayout from '@/components/common/layout/AdminLayout';

interface Props { }

const Posts: NextPage<Props> = () => {
    return (
        <AdminLayout>
            <div>This is Posts</div>
        </AdminLayout>
    );
};

export default Posts;