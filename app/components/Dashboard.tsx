'use client';

import StatCard from './StatCard';
import MiniLineChart from './MiniLineChart';
import ImportDataPanel from './ImportDataPanel';
import MonthlyExpensesPanel from './MonthlyExpensesPanel';

export default function Dashboard() {
    const usersChartData = [5, 10, 5, 20, 8, 15, 22];
    const avgRateChartData = [15, 10, 20, 8, 15, 5, 8];
    const sessionsChartData = [8, 15, 5, 10, 20, 15, 25];
    const durationChartData = [10, 15, 8, 12, 15, 10, 20];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="USERS"
                    value="17,482"
                    change="12.5%"
                    isPositive={true}
                    period="last 7d"
                    chart={<MiniLineChart data={usersChartData} />}
                />

                <StatCard
                    title="AVG. CLICK RATE"
                    value="52.639"
                    change="4.3%"
                    isPositive={true}
                    period="last 30.0d"
                    chart={<MiniLineChart data={avgRateChartData} />}
                />

                <StatCard
                    title="SESSIONS"
                    value="21,336"
                    change="32.0%"
                    isPositive={false}
                    period="last 30.0d"
                    chart={<MiniLineChart data={sessionsChartData} />}
                />

                <StatCard
                    title="SESSION DURATION"
                    value="5m 10s"
                    change="2.5%"
                    isPositive={true}
                    period="last 30.0d"
                    chart={<MiniLineChart data={durationChartData} />}
                />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="lg:col-span-1">
                    <ImportDataPanel />
                </div>

                <div className="lg:col-span-2">
                    <MonthlyExpensesPanel />
                </div>
            </div>
        </div>
    );
}
