import React, { useState } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
export default function main({ coin }) {


  return (
    <>
      <table className="min-w-full divide-y divide-line cursor-pointer">
        <thead>
          <tr>
            <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">24h %</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden xl:block">Market Cap</th>
            <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider ">Last 7 Days</th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-line">
          {coin.map((coin, i) => (
            <tr key={coin.id} className="hover:bg-hoverblue">
              <td className='text-xs xl:text-[14px] font-medium text-center'>{i + 1}</td>
              <td className="px-3 py-4 whitespace-nowrap   flex gap-2 items-center">
                <img className='w-6' src={coin.image} alt="" />
                {/* نمایش روی موبایل و تبلت */}
                <span className="text-xs font-medium inline xl:hidden">
                  {coin.symbol.toUpperCase()}
                </span>

                {/* نمایش روی دسکتاپ */}
                <span className="text-[14px] font-medium hidden xl:inline ">
                  {coin.name}
                </span>
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-xs xl:text-sm ">
                ${coin.current_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-xs xl:text-sm font-semibold text-center  ${coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'
                  }`}
              >
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 hidden xl:flex">
                ${coin.market_cap.toLocaleString('en-US')}
              </td>
              <td className="px-3 py-4 whitespace-nowrap   ">
                {coin.sparkline_in_7d?.price ? (
                  <Sparklines data={coin.sparkline_in_7d.price} width={200} height={20}>
                    <SparklinesLine color={coin.price_change_percentage_24h < 0 ? "red" : "green"} />
                  </Sparklines>
                ) : (
                  <span>No data</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
