import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
    params: {
        id: number;
    };
}

const UserDetailPage = ({ params: { id } }: Props) => {
    if (id > 10) notFound();
    return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;

export async function generateMetadata(args: any): Promise<Metadata> {
    console.log('args', args);
    return {
        title: 'User Detail',
    };
}
