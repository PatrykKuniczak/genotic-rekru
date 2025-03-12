'use client';

import { useState } from 'react';

interface BarChartProps {
    data: number[];
    labels: string[];
    maxValue?: number;
    color?: string;
    showTooltip?: boolean;
}

function BarChart({
    data,
    labels,
    maxValue = 120,
    color = '#8b5cf6',
    showTooltip = true,
}: BarChartProps) {
    const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null);

    const calculatedMaxValue = Math.max(...data, maxValue);

    const yAxisLabels = [0, 30, 60, 90, 120];

    return (
        <div className="h-80">
            <div className="grid h-72 grid-cols-12 gap-x-6 gap-y-6">
                <div className="col-span-1 flex h-64 flex-col justify-between pr-2">
                    {yAxisLabels.reverse().map((label, index) => (
                        <div key={index} className="flex h-0 items-center justify-end">
                            <span className="mr-1 text-xs text-gray-500">{label}k</span>
                        </div>
                    ))}
                </div>

                <div className="relative col-span-11 grid h-64 grid-cols-12 gap-x-6">
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
                        {yAxisLabels.reverse().map((_, index) => (
                            <div
                                key={index}
                                className="h-0 w-full border-t border-gray-700 opacity-20"
                            ></div>
                        ))}
                    </div>

                    {data.map((value, index) => {
                        const isActive = activeBarIndex === index;

                        return (
                            <div key={index} className="flex h-full flex-col">
                                <div className="flex h-64 items-end justify-center">
                                    <div
                                        className={`w-10 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-90'}`}
                                        onMouseEnter={() => setActiveBarIndex(index)}
                                        onMouseLeave={() => setActiveBarIndex(null)}
                                    >
                                        <div
                                            className="w-full rounded-t transition-all duration-300"
                                            style={{
                                                height: `${(value / calculatedMaxValue) * 100}%`,
                                                backgroundColor: color,
                                                transform: isActive ? 'scaleY(1.05)' : 'scaleY(1)',
                                            }}
                                        />

                                        {showTooltip && isActive && (
                                            <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 transform rounded-lg bg-gray-700 px-3 py-2 text-xs text-white shadow-lg">
                                                <div className="font-medium">{labels[index]}</div>
                                                <div className="mt-1 flex items-center">
                                                    <div
                                                        className="mr-1 h-2 w-2 rounded-full"
                                                        style={{ backgroundColor: color }}
                                                    ></div>
                                                    <span>{value}k</span>
                                                </div>
                                                <div className="absolute inset-x-0 bottom-0 flex h-2 justify-center overflow-hidden">
                                                    <div className="h-2 w-2 translate-y-1 rotate-45 transform bg-gray-700"></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-2 text-center text-xs text-gray-500">
                                    {labels[index]}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

interface PeriodTabProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
}

function PeriodTab({ label, active = false, onClick }: PeriodTabProps) {
    return (
        <button
            type="button"
            className={`inline-flex items-center gap-x-2 rounded-lg px-4 py-2 text-sm ${
                active
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            } transition-colors`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default function MonthlyExpensesPanel() {
    const [activeTab, setActiveTab] = useState<'this' | 'last'>('this');

    const chartData = {
        this: [30, 45, 25, 60, 75, 45, 65, 35, 85, 55, 45, 75],
        last: [40, 35, 45, 50, 65, 55, 75, 45, 70, 60, 50, 55],
    };

    const chartLabels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    return (
        <div className="rounded-xl bg-gray-800 p-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-medium">Monthly expenses</h3>

                <div className="inline-flex rounded-lg bg-gray-700/30 p-1">
                    <PeriodTab
                        label="This week"
                        active={activeTab === 'this'}
                        onClick={() => setActiveTab('this')}
                    />
                    <PeriodTab
                        label="Last week"
                        active={activeTab === 'last'}
                        onClick={() => setActiveTab('last')}
                    />
                </div>
            </div>

            <div className="mb-6 flex items-center">
                <div className="mr-4">
                    <div className="text-3xl font-bold">35%</div>
                    <div className="flex items-center text-sm">
                        <span
                            className={`mr-1 ${activeTab === 'this' ? 'text-red-400' : 'text-green-400'}`}
                        >
                            {activeTab === 'this' ? '↓ 25.8%' : '↑ 12.3%'}
                        </span>
                        <span className="text-gray-400">vs last period</span>
                    </div>
                </div>

                <div className="ml-auto flex items-center">
                    <div className="flex items-center">
                        <div className="mr-2 h-3 w-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm text-gray-400">Expenses</span>
                    </div>
                </div>
            </div>

            <BarChart
                data={chartData[activeTab]}
                labels={chartLabels}
                maxValue={120}
                color="#8b5cf6"
            />
        </div>
    );
}
