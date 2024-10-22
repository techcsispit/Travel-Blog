import React from 'react'
import { Link } from 'react-router-dom'

const regions = [
  {
    name: 'Africa',
    countries: [
      'BOTSWANA', 'SEYCHELLES', 'EGYPT', 'SOUTH AFRICA', 'KENYA', 'TANZANIA',
      'MAURITIUS', 'UGANDA', 'MOROCCO', 'ZAMBIA', 'MOZAMBIQUE', 'ZIMBABWE', 'NAMIBIA'
    ]
  },
  {
    name: 'Asia',
    countries: [
      'CAMBODIA', 'MALDIVES', 'CHINA', 'SINGAPORE', 'HONG KONG', 'SRI LANKA',
      'INDIA', 'THAILAND', 'INDONESIA', 'VIETNAM', 'JAPAN'
    ]
  },
  {
    name: 'The Caribbean',
    countries: [
      'ARUBA', 'ISLANDS', 'BAHAMAS', 'CUBA', 'BERMUDA', 'DOMINICAN',
      'BRITISH VIRGIN', 'REPUBLIC'
    ]
  },
  {
    name: 'Central America',
    countries: ['BELIZE', 'HONDURAS', 'COSTA RICA', 'PANAMA', 'GUATEMALA']
  },
  {
    name: 'Europe',
    countries: [
      'AUSTRIA', 'ITALY', 'BELGIUM', 'MALTA', 'CROATIA', 'NETHERLANDS',
      'CZECH REPUBLIC', 'POLAND', 'DENMARK', 'PORTUGAL', 'ENGLAND', 'SCOTLAND',
      'FRANCE', 'SLOVAKIA', 'GERMANY', 'SPAIN', 'GREECE', 'SWEDEN', 'HUNGARY',
      'SWITZERLAND', 'ICELAND', 'TURKEY', 'IRELAND'
    ]
  },
  {
    name: 'The Middle East',
    countries: ['EGYPT', 'UNITED ARAB', 'JORDAN', 'EMIRATES', 'TURKEY']
  },
  {
    name: 'North America',
    countries: ['CANADA', 'PUERTO RICO', 'BERMUDA', 'USA', 'MEXICO']
  },
  {
    name: 'Oceania',
    countries: ['AUSTRALIA', 'NEW ZEALAND', 'FRENCH POLYNESIA']
  },
  {
    name: 'South America',
    countries: ['ARGENTINA', 'COLOMBIA', 'BOLIVIA', 'ECUADOR', 'BRAZIL', 'PERU', 'CHILE']
  }
]

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen p-8 m-[50px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {regions.map((region) => (
          <div key={region.name} className="relative border-0 border-r-2 border-b-2 p-4 pb-[30px]">
            <h2 className="text-3xl font-light text-gray-400 mb-8 ">{region.name}</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pb-[40px]">
              {region.countries.map((country) => (
                <Link key={country} className="text-sm text-gray-600">{country}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}