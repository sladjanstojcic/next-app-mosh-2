'use client';

export default function Home() {
    return (
        <>
            <main>
                <h1 className="font-poppins">HelloWorld</h1>
                <button
                    onClick={async () => {
                        const _ = (await import('lodash')).default;

                        const users = [
                            { name: 'c' },
                            { name: 'b' },
                            { name: 'a' },
                        ];

                        const sorted = _.orderBy(users, ['name']);
                        console.log('sorted', sorted);
                    }}
                >
                    Show component
                </button>
            </main>
        </>
    );
}
