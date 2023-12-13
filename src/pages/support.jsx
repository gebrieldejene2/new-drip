import { Disclosure } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  TruckIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function Support() {
  return (
    <div className="w-full md:max-w-6xl flex flex-col items-center px-5 md:px-0">
      <div className="w-full flex rounded-md flex-col items-center bg-gray-300 text-stone-700 px-5 md:px-0 py-12 mt-4 md:mt-8 mb-10">
        <h2 className="text-lg md:text-2xl uppercase font-extrabold tracking-wide mb-10">
          customer care
        </h2>
        <div className="group w-full md:w-1/3 flex items-center mb-4 md:mb-8">
          <input
            className="flex-1 px-5 py-2 rounded-full focus:outline-none focus:ring-2"
            type="text"
            placeholder="Search for help"
          />
          <button>
            <MagnifyingGlassIcon className="h-6 w-6 md:h-7 md:w-7 -ml-9 md:-ml-10" />
          </button>
        </div>
      </div>
      <div className="w-full items-start">
        <h3 className="uppercase text-stone-900 font-bold mb-4">faq topics</h3>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-4 text-gray-500 mb-4">
        <div className="col-span-2 flex flex-col bg-white">
          <div className="flex p-5 border-b-2">
            <TruckIcon className="h-6 w-6 mr-4 text-black" />
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-start gap-5 p-5 text-sm">
            <p>International deliveries</p>
            <p>Where's my order?</p>
            <p>Can I track my order?</p>
            <p className="font-bold mt-2">View all</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col bg-white">
          <div className="flex p-5 border-b-2">
            <TruckIcon className="h-6 w-6 mr-4 text-black" />
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-start gap-5 p-5 text-sm">
            <p>International deliveries</p>
            <p>Where's my order?</p>
            <p>Can I track my order?</p>
            <p className="font-bold mt-2">View all</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col bg-white">
          <div className="flex p-5 border-b-2">
            <TruckIcon className="h-6 w-6 mr-4 text-black" />
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-start gap-5 p-5 text-sm">
            <p>International deliveries</p>
            <p>Where's my order?</p>
            <p>Can I track my order?</p>
            <p className="font-bold mt-2">View all</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col bg-white">
          <div className="flex p-5 border-b-2">
            <TruckIcon className="h-6 w-6 mr-4 text-black" />
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-start gap-5 p-5 text-sm">
            <p>International deliveries</p>
            <p>Where's my order?</p>
            <p>Can I track my order?</p>
            <p className="font-bold mt-2">View all</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col bg-white">
          <div className="flex p-5 border-b-2">
            <TruckIcon className="h-6 w-6 mr-4 text-black" />
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-start gap-5 p-5 text-sm">
            <p>International deliveries</p>
            <p>Where's my order?</p>
            <p>Can I track my order?</p>
            <p className="font-bold mt-2">View all</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col bg-white">
          <div className="flex p-5 border-b-2">
            <TruckIcon className="h-6 w-6 mr-4 text-black" />
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-start gap-5 p-5 text-sm">
            <p>International deliveries</p>
            <p>Where's my order?</p>
            <p>Can I track my order?</p>
            <p className="font-bold mt-2">View all</p>
          </div>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-2 gap-4 text-gray-500">
        <div className="flex flex-col gap-2">
          <h3 className="uppercase text-stone-900 font-bold text-sm">
            popular faqs
          </h3>
          <div className="flex-flex-col bg-white">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full flex items-center justify-between border-b-2 p-4">
                    <p className="">What is your Returns Policy?</p>
                    <ChevronRightIcon
                      className={
                        open ? "rotate-90 transform h-5 w-5" : "h-5 w-5"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="border-b-2">
                    <div className="px-4 py-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatum omnis doloribus
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full flex items-center justify-between border-b-2 p-4">
                    <p className="">Can I track the delivery of my order?</p>
                    <ChevronRightIcon
                      className={
                        open ? "rotate-90 transform h-5 w-5" : "h-5 w-5"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="border-b-2">
                    <div className="px-4 py-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatum omnis doloribus
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full flex items-center justify-between border-b-2 p-4">
                    <p className="">
                      Will my parcel be charged customs and import charges?
                    </p>
                    <ChevronRightIcon
                      className={
                        open ? "rotate-90 transform h-5 w-5" : "h-5 w-5"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="border-b-2">
                    <div className="px-4 py-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatum omnis doloribus
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full flex items-center justify-between border-b-2 p-4">
                    <p className="">Can I cancel my order after I placed it?</p>
                    <ChevronRightIcon
                      className={
                        open ? "rotate-90 transform h-5 w-5" : "h-5 w-5"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="border-b-2">
                    <div className="px-4 py-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatum omnis doloribus
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="uppercase text-stone-900 font-bold text-sm mb-2">
            need to get in touch?
          </h3>
          <div className="flex flex-col items-center bg-white h-64">
            <div className="flex-1 w-full border-b-2"></div>
            <button className="text-sm border-2 uppercase px-4 py-2 mx-auto my-4 hover:bg-darkGray hover:text-white">
              contact us now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
