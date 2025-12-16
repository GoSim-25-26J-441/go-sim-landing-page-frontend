import { pricingConstants } from '../constant/page';

export default function Section2() {
    return (
        <>
            <div className="border border-gray-500 rounded overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-300">
                            {pricingConstants.comparisonTable.headers.map((header, index) => (
                                <th
                                    key={index}
                                    className={`px-3 md:px-6 py-4 text-center ${index < pricingConstants.comparisonTable.headers.length - 1 ? 'border-r border-gray-500' : ''
                                        } text-xs md:text-base ${index === 0 ? '' : 'font-bold text-lg md:text-2xl text-white'}`}
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
                                        className={`px-3 md:px-6 py-4 ${cellIndex < row.length - 1 ? 'border-r border-gray-500' : ''
                                            } ${cellIndex === 0 ? 'font-medium text-gray-200' : 'text-center'} text-xs md:text-base`}
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