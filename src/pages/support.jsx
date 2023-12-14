import { Disclosure } from '@headlessui/react'
import { MagnifyingGlassIcon, TruckIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Support() {
  return (
    <div className="flex w-full flex-col items-center px-5 md:max-w-6xl md:px-0">
      <div className="mb-10 mt-4 flex w-full flex-col items-center rounded-md bg-gray-300 px-5 py-12 text-stone-700 md:mt-8 md:px-0">
        <h2 className="mb-10 text-lg font-extrabold uppercase tracking-wide md:text-2xl">
          customer care
        </h2>
        <div className="group mb-4 flex w-full items-center md:mb-8 md:w-1/3">
          <input
            className="flex-1 rounded-full px-5 py-2 focus:outline-none focus:ring-2"
            type="text"
            placeholder="Search for help"
          />
          <button>
            <MagnifyingGlassIcon className="-ml-9 h-6 w-6 md:-ml-10 md:h-7 md:w-7" />
          </button>
        </div>
      </div>
      <div className="w-full items-start">
        <h3 className="mb-4 font-bold uppercase text-stone-900">faq topics</h3>
      </div>
      <div className="mb-4 grid w-full grid-cols-2 gap-4 text-gray-500 md:grid-cols-6">
        <div className="col-span-2 flex flex-col bg-white">
          <div className="flex border-b-2 p-5">
            <TruckIcon className="mr-4 h-6 w-6 text-black" />
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-start gap-5 p-5 text-sm">
            <p>International deliveries</p>
            <p>Where's my order?</p>
            <p>Can I track my order?</p>
            <p className="mt-2 font-bold">View all</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col bg-white">
          <div className="flex border-b-2 p-5">
            <TruckIcon className="mr-4 h-6 w-6 text-black" />
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-start gap-5 p-5 text-sm">
            <p>International deliveries</p>
            <p>Where's my order?</p>
            <p>Can I track my order?</p>
            <p className="mt-2 font-bold">View all</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col bg-white">
          <div className="flex border-b-2 p-5">
            <TruckIcon className="mr-4 h-6 w-6 text-black" />
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-start gap-5 p-5 text-sm">
            <p>International deliveries</p>
            <p>Where's my order?</p>
            <p>Can I track my order?</p>
            <p className="mt-2 font-bold">View all</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col bg-white">
          <div className="flex border-b-2 p-5">
            <TruckIcon className="mr-4 h-6 w-6 text-black" />
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-start gap-5 p-5 text-sm">
            <p>International deliveries</p>
            <p>Where's my order?</p>
            <p>Can I track my order?</p>
            <p className="mt-2 font-bold">View all</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col bg-white">
          <div className="flex border-b-2 p-5">
            <TruckIcon className="mr-4 h-6 w-6 text-black" />
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-start gap-5 p-5 text-sm">
            <p>International deliveries</p>
            <p>Where's my order?</p>
            <p>Can I track my order?</p>
            <p className="mt-2 font-bold">View all</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col bg-white">
          <div className="flex border-b-2 p-5">
            <TruckIcon className="mr-4 h-6 w-6 text-black" />
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-start gap-5 p-5 text-sm">
            <p>International deliveries</p>
            <p>Where's my order?</p>
            <p>Can I track my order?</p>
            <p className="mt-2 font-bold">View all</p>
          </div>
        </div>
      </div>
      <div className="grid w-full gap-4 text-gray-500 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold uppercase text-stone-900">popular faqs</h3>
          <div className="flex-flex-col bg-white">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between border-b-2 p-4">
                    <p className="">What is your Returns Policy?</p>
                    <ChevronRightIcon
                      className={open ? 'h-5 w-5 rotate-90 transform' : 'h-5 w-5'}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="border-b-2">
                    <div className="px-4 py-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum omnis
                      doloribus
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between border-b-2 p-4">
                    <p className="">Can I track the delivery of my order?</p>
                    <ChevronRightIcon
                      className={open ? 'h-5 w-5 rotate-90 transform' : 'h-5 w-5'}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="border-b-2">
                    <div className="px-4 py-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum omnis
                      doloribus
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between border-b-2 p-4">
                    <p className="">Will my parcel be charged customs and import charges?</p>
                    <ChevronRightIcon
                      className={open ? 'h-5 w-5 rotate-90 transform' : 'h-5 w-5'}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="border-b-2">
                    <div className="px-4 py-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum omnis
                      doloribus
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between border-b-2 p-4">
                    <p className="">Can I cancel my order after I placed it?</p>
                    <ChevronRightIcon
                      className={open ? 'h-5 w-5 rotate-90 transform' : 'h-5 w-5'}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="border-b-2">
                    <div className="px-4 py-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum omnis
                      doloribus
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 text-sm font-bold uppercase text-stone-900">need to get in touch?</h3>
          <div className="flex h-64 flex-col items-center bg-white">
            <div className="w-full flex-1 border-b-2"></div>
            <button className="mx-auto my-4 border-2 px-4 py-2 text-sm uppercase hover:bg-darkGray hover:text-white">
              contact us now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
