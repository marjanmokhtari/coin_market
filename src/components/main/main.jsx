import React, { useState } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function main({ coin }) {


  return (
    <>
      {/* <h1>fsrfvsdfz</h1>
      <div className='border'>
        {coin && coin.map((coin) => {
          return (
            <ul key={coin.id}>
              <li>{coin.name}</li>
              <li>{coin.symbol.toUpperCase()}</li>
              <li> ${coin.current_price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</li>
              <li>{coin.price_change_percentage_24h?.toFixed(2)}%</li>
              <li>${coin.market_cap.toLocaleString('en-US')}</li>
            </ul>
          )
        })}
      </div> */}

      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h %</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
            <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Last 7 Days</th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {coin.map((coin, i) => (
            <tr key={coin.id} className="hover:bg-hoverblue">
              <td>{i + 1}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm font-medium ">{coin.name}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm ">
                ${coin.current_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'
                  }`}
              >
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${coin.total_volume.toLocaleString('en-US')}
              </td> */}
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                ${coin.market_cap.toLocaleString('en-US')}
              </td>
              <td className="px-3 py-4 whitespace-nowrap ">
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
