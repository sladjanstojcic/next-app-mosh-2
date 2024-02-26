import React, { CSSProperties } from 'react';
import {
    Html,
    Body,
    Container,
    Text,
    Link,
    Preview,
    Tailwind,
} from '@react-email/components';

const WelcomeTemplate = ({ name = 'World' }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome aboard!</Preview>
            <Tailwind>
                <Body className="bg-white">
                    <Container>
                        <Text className="">Hello {name}</Text>
                        <Link href="https://example.com">Click me</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

const body: CSSProperties = {
    backgroundColor: 'white',
};

const heading: CSSProperties = {
    fontSize: '32px',
};

export default WelcomeTemplate;
