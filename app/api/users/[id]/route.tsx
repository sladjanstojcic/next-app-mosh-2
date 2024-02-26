import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import { prisma } from '@/prisma/client';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    // const user = await prisma.user.findUnique({
    //     where: {
    //         id: parseInt(params.id),
    //     },
    // });

    // if (!user)
    //     return NextResponse.json({ error: 'User not found' }, { status: 404 });

    // return NextResponse.json(user);
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    // try {
    //     // Validate the request body
    //     const body = await request.json();
    //     // if invalid, return 400
    //     const validation = schema.safeParse(body);

    //     if (!validation.success)
    //         return NextResponse.json(validation.error.errors, { status: 400 });

    //     const user = await prisma.user.findUnique({
    //         where: {
    //             id: parseInt(params.id),
    //         },
    //     });

    //     if (!user)
    //         return NextResponse.json(
    //             {
    //                 error: 'User not found',
    //             },
    //             { status: 404 }
    //         );

    //     const updatedUser = await prisma.user.update({
    //         where: {
    //             id: user.id,
    //         },
    //         data: {
    //             name: body.name,
    //             email: body.email,
    //         },
    //     });

    //     return NextResponse.json(updatedUser, { status: 200 });
    // } catch (error: any) {
    //     return NextResponse.json({ error: error.message }, { status: 500 });
    // }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    // const user = await prisma.user.findUnique({
    //     where: {
    //         id: parseInt(params.id),
    //     },
    // });

    // if (!user) {
    //     return NextResponse.json({ error: 'User not found' }, { status: 404 });
    // }

    // await prisma.user.delete({
    //     where: {
    //         id: user.id,
    //     },
    // });

    // return NextResponse.json('User deleted successfully', { status: 200 });
}
