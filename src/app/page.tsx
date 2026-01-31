import ChatInterface from '@/components/ChatInterface';

export default function Home() {
    return (
        <main className="min-h-screen p-4 md:p-8 flex items-center justify-center bg-gradient-to-br from-coastal-50 via-white to-sand-50">
            <div className="w-full max-w-5xl">
                <ChatInterface />
            </div>
        </main>
    );
}
