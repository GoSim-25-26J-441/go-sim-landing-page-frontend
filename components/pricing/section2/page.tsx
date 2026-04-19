import { pricingConstants } from '../constant/page';

export default function Section2() {
    return (
        <>
            <div className="border border-gray-500 rounded overflow-x-auto">
                <table className="w-full text-xs md:text-sm">
                    <thead>
                        <tr className="border-b border-gray-300">
                            {pricingConstants.comparisonTable.headers.map((header, index) => (
                                <th
                                    key={index}
                                    className={`px-3 py-3 text-center md:px-5 md:py-3.5 ${index < pricingConstants.comparisonTable.headers.length - 1 ? 'border-r border-gray-500' : ''
                                        } ${index === 0 ? 'font-medium text-gray-300' : 'font-semibold text-white'}`}
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {pricingConstants.comparisonTable.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex < pricingConstants.comparisonTable.rows.length - 1 ? 'border-b border-gray-500' : ''}>
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className={`px-3 py-3 md:px-5 md:py-3.5 ${cellIndex < row.length - 1 ? 'border-r border-gray-500' : ''
                                            } ${cellIndex === 0 ? 'font-medium text-gray-200' : 'text-center text-gray-300'}`}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-4 text-xs text-gray-200 text-center mb-12 md:mb-20">
                {pricingConstants.comparisonTable.note}
            </div>
        </>
    );
}