import { ReactNode } from 'react';

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    isPositive?: boolean;
    period?: string;
    icon?: ReactNode;
    chart?: ReactNode;
}

export default function StatCard({
    title,
    value,
    change,
    isPositive = true,
    period,
    icon,
    chart,
}: StatCardProps) {
    return (
        <div className="rounded-xl bg-gray-800 p-4 shadow-sm">
            <div className="mb-2 flex items-start justify-between">
                <div>
                    <p className="text-xs text-gray-400 uppercase">{title}</p>
                    <h3 className="mt-1 text-2xl font-bold">{value}</h3>
                </div>
                {icon && <div className="text-gray-400">{icon}</div>}
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <span
                        className={`text-xs font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}
                    >
                        {isPositive ? '+' : ''}
                        {change}
                    </span>
                    {period && <span className="ml-1 text-xs text-gray-400">from {period}</span>}
                </div>
                {chart && <div className="ml-auto">{chart}</div>}
            </div>
        </div>
    );
}
