import Navbar from './components/Navbar';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Tutaj można dodać zawartość dashboardu */}
                </div>
            </div>
        </div>
    );
}
