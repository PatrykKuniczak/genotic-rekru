interface MiniLineChartProps {
    data: number[];
    color?: string;
    height?: number;
    width?: number;
}

export default function MiniLineChart({
    data,
    color = '#8b5cf6',
    height = 24,
    width = 80,
}: MiniLineChartProps) {
    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);
    const range = maxValue - minValue || 1;

    const points = data
        .map((value, index) => {
            const x = (index / (data.length - 1)) * width;
            const y = height - ((value - minValue) / range) * height;
            return `${x},${y}`;
        })
        .join(' ');

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            className="overflow-visible"
        >
            <polyline
                points={points}
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
