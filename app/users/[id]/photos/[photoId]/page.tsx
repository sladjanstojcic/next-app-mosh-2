import React from 'react';

interface Props {
    params: {
        id: number;
        photoId: number;
    };
}

const UserPhotos = ({ params: { id, photoId } }: Props) => {
    return (
        <div>
            UserPhotos user: {id}; photo: {photoId}
        </div>
    );
};

export default UserPhotos;
