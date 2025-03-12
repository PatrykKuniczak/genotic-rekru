import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar />
            <Dashboard />
        </div>
    );
}
