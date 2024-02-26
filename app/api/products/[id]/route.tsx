import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

export function GET(
    request: NextRequest,
    { params }: { params: { id: number } }
) {
    // if (params.id > 10) {
    //     return NextResponse.json(
    //         {
    //             error: 'Product not found',
    //         },
    //         { status: 404 }
    //     );
    // }
    // return NextResponse.json({
    //     id: params.id,
    //     name: 'Milk',
    //     price: 2.5,
    // });
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: number } }
) {
    // try {
    //     const body = await request.json();
    //     const validation = schema.safeParse(body);
    //     if (!validation.success) {
    //         return NextResponse.json(validation.error.errors, { status: 400 });
    //     }
    //     if (params.id > 10) {
    //         return NextResponse.json({
    //             error: 'Product not found',
    //         });
    //     }
    //     return NextResponse.json({
    //         id: params.id,
    //         name: body.name,
    //         price: body.price,
    //     });
    // } catch (e: any) {
    //     return NextResponse.json({ error: e.message }, { status: 500 });
    // }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: number } }
) {
    // if (params.id > 10)
    //     return NextResponse.json(
    //         { error: 'Product not found' },
    //         { status: 404 }
    //     );
    // return NextResponse.json('Product deleted successfully', { status: 200 });
}
