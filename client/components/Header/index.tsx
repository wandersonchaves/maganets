import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  XIcon,
  HeartIcon,
  LocationMarkerIcon,
  PhoneIcon
} from '@heroicons/react/outline'
import {
  PhoneIcon as PhoneIconSolid,
  LocationMarkerIcon as LocationMarkerIconSolid,
  HeartIcon as HeartIconSolid
} from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <Popover className='relative bg-violet-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/'>
              <h1 className='text-xl font-bold text-white'>MagaNets</h1>
            </Link>
          </div>

          <form method='GET' className='w-9/12'>
            <div className='flex justify-between'>
              <span className='flex text-white'>
                <LocationMarkerIconSolid className='h-5 w-5 center' /> Cidade:
                São Paulo
              </span>

              <span className='flex text-white'>
                <PhoneIconSolid className='h-5 w-5 center' /> Central de
                atendimento
              </span>

              <Link
                href='productfavorite'
                className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
              >
                <span className='flex text-white'>
                  <HeartIconSolid className='h-5 w-5 center' /> Lista de desejos
                </span>
              </Link>
            </div>

            <div className='w-full relative text-gray-600 focus-within:text-gray-400'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                <button
                  type='submit'
                  className='p-1 focus:outline-none focus:shadow-outline'
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    className='w-6 h-6'
                  >
                    <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                  </svg>
                </button>
              </span>
              <input
                type='search'
                name='q'
                className='w-full py-2 text-sm text-white bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900'
                placeholder='Search...'
                autoComplete='off'
              />
            </div>
          </form>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <Image
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                    width={24}
                    height={24}
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
