import { Disclosure, Tab } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Checkout() {
  return (
    <div className="container flex flex-col items-center max-w-5xl px-4 md:px-12">
      <h1 className="text-2xl md:text-3xl text-gray-900 font-bold my-8 uppercase">
        checkout
      </h1>
      <div className="flex flex-col-reverse md:grid grid-cols-5 gap-5 w-full">
        <form className="col-span-3 flex flex-col w-full text-xs uppercase">
          <div className="w-full bg-white text-black p-5 mb-5">
            <label
              htmlFor="delivery-country"
              className="block font-extrabold mb-4"
            >
              delivery country:
            </label>
            <div className="flex items-center w-1/2">
              <img
                src="https://hatscripts.github.io/circle-flags/flags/ng.svg"
                width="30"
                className="mr-4"
              ></img>
              <select
                name="birth-date"
                id="birth-date"
                className="flex-1 uppercase font-medium text-black border-2 border-stone-400 p-4 focus:outline-none"
              >
                <option>nigeria</option>
              </select>
            </div>
          </div>
          <div className="w-full bg-white text-black p-5 mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-2 mb-2 text-xs uppercase">
                    <label htmlFor="promocode" className="block font-extrabold">
                      promo/student code or vouchers:
                    </label>
                    <ChevronDownIcon
                      className={
                        open ? "rotate-180 transform h-5 w-5" : "h-6 w-6"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <Tab.Group>
                      <Tab.List className="flex mb-2">
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              "w-full flex items-center justify-center p-2 md:p-4 border-gray-700 text-xs font-black tracking-wider uppercase",
                              "focus:outline-none focus:ring-0",
                              selected
                                ? "border-x md:border-x-2 border-t md:border-t-2"
                                : "border-b md:border-b-2",
                            )
                          }
                        >
                          <span>promo/student code</span>
                        </Tab>
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              "w-full flex items-center justify-center p-2 md:p-4 border-gray-700 text-xs font-black tracking-wider uppercase",
                              "focus:outline-none focus:ring-0",
                              selected
                                ? "border-x md:border-x-2 border-t md:border-t-2"
                                : "border-b md:border-b-2",
                            )
                          }
                        >
                          <span>vouchers</span>
                        </Tab>
                      </Tab.List>
                      <Tab.Panels>
                        <Tab.Panel>Content 1</Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="w-full bg-white text-black p-5 mb-5">
            <label htmlFor="email" className="block font-extrabold mb-2">
              email address
            </label>
            <p className="text-sm text-stone-500 normal-case">
              testemail@gmail.com
            </p>
          </div>
          <div className="w-full bg-white text-black p-5 mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-2 mb-2 text-xs uppercase">
                    <label htmlFor="promocode" className="block font-extrabold">
                      delivery address
                    </label>
                    <ChevronDownIcon
                      className={
                        open ? "rotate-180 transform h-5 w-5" : "h-6 w-6"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <Tab.Group>
                      <Tab.List className="flex mb-2">
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              "w-full flex items-center justify-center p-2 md:p-4 border-gray-700 text-xs font-black tracking-wider uppercase",
                              "focus:outline-none focus:ring-0",
                              selected
                                ? "border-x md:border-x-2 border-t md:border-t-2"
                                : "border-b md:border-b-2",
                            )
                          }
                        >
                          <span>postal address</span>
                        </Tab>
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              "w-full flex items-center justify-center p-2 md:p-4 border-gray-700 text-xs font-black tracking-wider uppercase",
                              "focus:outline-none focus:ring-0",
                              selected
                                ? "border-x md:border-x-2 border-t md:border-t-2"
                                : "border-b md:border-b-2",
                            )
                          }
                        >
                          <span>click & collect</span>
                        </Tab>
                      </Tab.List>
                      <Tab.Panels>
                        <Tab.Panel>Content 1</Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-2 text-xs uppercase">
                    <label htmlFor="promocode" className="block font-extrabold">
                      delivery address
                    </label>
                    <ChevronDownIcon
                      className={
                        open ? "rotate-180 transform h-5 w-5" : "h-5 w-5"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="flex w-full items-start justify-between">
                      <div className="flex flex-col items-start gap-2">
                        <p className="text-sm text-stone-500 normal-case">
                          test address
                        </p>
                        <p className="text-sm text-stone-500 normal-case">
                          test city
                        </p>
                        <p className="text-sm text-stone-500 normal-case">
                          test state
                        </p>
                        <p className="text-sm text-stone-500 normal-case">
                          test country
                        </p>
                        <p className="text-sm text-stone-500 normal-case">
                          test postal code
                        </p>
                      </div>
                      <a
                        href="#"
                        className="uppercase text-sm tracking-wide font-bold bg-stone-200 px-5 py-3"
                      >
                        change
                      </a>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure> */}
          </div>
          <div className="w-full bg-white text-black p-5 mb-5">
            <label
              htmlFor="delivery-options"
              className="block font-extrabold mb-4"
            >
              delivery options
            </label>
          </div>
          <div className="w-full bg-white text-black p-5 mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-2 text-xs uppercase">
                    <label
                      htmlFor="promocode"
                      className="block font-extrabold mb-4"
                    >
                      payment
                    </label>
                    <ChevronDownIcon
                      className={
                        open ? "rotate-180 transform h-5 w-5" : "h-5 w-5"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>No</Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </form>
        <div className="col-span-2 bg-white w-full md:h-1/2 p-5"></div>
      </div>
    </div>
  );
}
