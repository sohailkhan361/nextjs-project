import Image from 'next/image';
import { CarCard, CustomFilter, Hero, SearchBar } from '@/components';
import { fetchCars } from '@/utils';

export default async function Home() {
  // const allData = await fetchCars();
  const allData: any = [{
      city_mpg: 23,
      class: 'compact car',
      combination_mpg: 24,
      cylinders: 4,
      displacement: 1.6,
      drive: 'fwd',
      fuel_type: 'gas',
      highway_mpg: 26,
      make: 'toyota',
      model: 'corolla',
      transmission: 'a',
      year: 1993
    }];

  const isDataEmpty = !Array.isArray(allData) || allData.length < 1 || !allData;

  
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'> Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allData?.map((car) => (
                <CarCard
                  car={car}
                  key={car}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allData?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
