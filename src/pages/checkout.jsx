import { Disclosure, Tab } from '@headlessui/react'

import {
  ChevronDownIcon,
  TagIcon,
  TicketIcon,
  HomeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Checkout() {
  return (
    <div className="container flex max-w-5xl flex-col items-center px-4 md:px-12">
      <h1 className="my-8 text-2xl font-bold uppercase text-gray-900 md:text-3xl">checkout</h1>
      <div className="flex w-full grid-cols-5 flex-col-reverse gap-5 md:grid">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="col-span-3 flex w-full flex-col text-xs uppercase"
        >
          <div className="mb-5 w-full bg-white p-5 text-black">
            <label htmlFor="delivery-country" className="mb-4 block font-bold">
              delivery country:
            </label>
            <div className="flex w-1/2 items-center">
              <img
                src="https://hatscripts.github.io/circle-flags/flags/ng.svg"
                width="30"
                className="mr-4"
              ></img>
              <select
                name="birth-date"
                id="birth-date"
                className="flex-1 border-2 border-stone-400 p-4 font-medium uppercase text-black focus:outline-none"
              >
                <option>nigeria</option>
              </select>
            </div>
          </div>
          <div className="mb-5 w-full bg-white p-5 text-black">
            <Disclosure defaultOpen={true}>
              <Disclosure.Button className="mb-2 flex w-full justify-between py-2 text-xs uppercase">
                <span className="font-bold">promo/student code or vouchers:</span>
                <ChevronDownIcon className={open ? 'h-5 w-5 rotate-180 transform' : 'h-6 w-6'} />
              </Disclosure.Button>
              <Disclosure.Panel>
                <Tab.Group>
                  <Tab.List className="mb-4 flex">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'flex w-full items-center justify-center border-gray-700 p-2 text-xs font-extrabold uppercase tracking-wider md:p-4',
                          'focus:outline-none focus:ring-0',
                          selected ? 'border-x border-t' : 'border-b md:border-b-2',
                        )
                      }
                    >
                      <TagIcon className="mr-2 h-5 w-5" />
                      <span>promo/student code</span>
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'flex w-full items-center justify-center border-gray-700 p-2 text-xs font-extrabold uppercase tracking-wider md:p-4',
                          'focus:outline-none focus:ring-0',
                          selected ? 'border-x border-t' : 'border-b md:border-b-2',
                        )
                      }
                    >
                      <TicketIcon className="mr-2 h-5 w-5" />
                      <span>vouchers</span>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="mb-6">
                        <span className="mb-4 block font-bold">add promo/student code</span>
                        <label
                          htmlFor="promocode"
                          className="mb-0.5 block text-xs font-bold tracking-widest text-stone-400"
                        >
                          promo/student code:
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            name="promocode"
                            id="promocode"
                            className="flex-1 border-2 border-darkGray p-4 font-medium uppercase text-black focus:outline-none"
                          />
                          <button
                            type="submit"
                            className="bg-darkGray px-5 py-3 text-xs uppercase tracking-widest text-white"
                          >
                            apply code
                          </button>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="mb-6">
                        <span className="mb-4 block font-bold">add voucher:</span>
                        <label
                          htmlFor="voucher"
                          className="mb-0.5 block text-xs font-bold tracking-widest text-stone-400"
                        >
                          voucher
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            name="voucher"
                            id="voucher"
                            className="flex-1 border-2 border-darkGray p-4 font-medium uppercase text-black focus:outline-none"
                          />
                          <button
                            type="submit"
                            className="bg-darkGray px-5 py-3 text-xs uppercase tracking-widest text-white"
                          >
                            apply code
                          </button>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </Disclosure.Panel>
            </Disclosure>
            <div>
              <label className="mb-2 block font-bold">need to know</label>
              <ul className="list-outside list-disc px-5 text-sm normal-case leading-6 text-stone-600">
                <li className="mb-1">
                  You can only use one discount/promo code per order.This applies to our
                  free-delivery codes, too.
                </li>
                <li>Discount/promo codes cannot be used when buying gift vouchers.</li>
              </ul>
            </div>
          </div>
          <div className="mb-5 w-full bg-white p-5 text-black">
            <label htmlFor="email" className="mb-2 block font-bold">
              email address
            </label>
            <p className="text-sm normal-case text-stone-600">testemail@gmail.com</p>
          </div>
          <div className="mb-5 w-full bg-white p-5 text-black">
            <Disclosure defaultOpen={true}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="mb-2 flex w-full justify-between py-2 text-xs uppercase">
                    <span className="block font-bold">delivery address</span>
                    <ChevronDownIcon
                      className={open ? 'h-5 w-5 rotate-180 transform' : 'h-6 w-6'}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <Tab.Group>
                      <Tab.List className="mb-4 flex">
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              'flex w-full items-center justify-center border-gray-700 p-2 text-xs font-extrabold uppercase tracking-wider md:p-4',
                              'focus:outline-none focus:ring-0',
                              selected ? 'border-x border-t' : 'border-b md:border-b-2',
                            )
                          }
                        >
                          <HomeIcon className="mr-2 h-5 w-5" />
                          <span>postal address</span>
                        </Tab>
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              'flex w-full items-center justify-center border-gray-700 p-2 text-xs font-extrabold uppercase tracking-wider md:p-4',
                              'focus:outline-none focus:ring-0',
                              selected ? 'border-x border-t' : 'border-b md:border-b-2',
                            )
                          }
                        >
                          <MapPinIcon className="mr-2 h-5 w-5" />
                          <span>click & collect</span>
                        </Tab>
                      </Tab.List>
                      <Tab.Panels>
                        <Tab.Panel>
                          <div>
                            <span className="mb-6 block font-bold">add address</span>
                            <form>
                              <div className="gap-4 md:flex">
                                <div className="mb-4 block w-full">
                                  <label
                                    htmlFor="firstName"
                                    className="mb-1 block font-bold uppercase tracking-widest text-stone-400"
                                  >
                                    first name:
                                  </label>
                                  <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    className="w-full border-2 border-stone-400 p-3 text-sm font-medium text-black focus:outline-none"
                                  />
                                </div>
                                <div className="mb-4 block w-full">
                                  <label
                                    htmlFor="lastName"
                                    className="mb-1 block font-bold uppercase tracking-widest text-stone-400"
                                  >
                                    last name:
                                  </label>
                                  <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    className="w-full border-2 border-stone-400 p-3 text-sm font-medium text-black focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div className="mb-4 block w-full">
                                <label
                                  htmlFor="phoneNumber"
                                  className="mb-1 block font-bold uppercase tracking-widest text-stone-400"
                                >
                                  phone number:
                                </label>
                                <input
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  type="text"
                                  required
                                  className="w-full border-2 border-stone-400 p-3 text-sm font-medium text-black focus:outline-none"
                                />
                              </div>
                              <div className="mb-2 block w-full">
                                <label
                                  htmlFor="addressLine1"
                                  className="mb-1 block font-bold uppercase tracking-widest text-stone-400"
                                >
                                  address:
                                </label>
                                <input
                                  id="addressLine1"
                                  name="addressLine1"
                                  type="text"
                                  required
                                  className="w-full border-2 border-stone-400 p-3 text-sm font-medium text-black focus:outline-none"
                                />
                              </div>
                              <div className="mb-4 block w-full">
                                {/* <label
                                  htmlFor="addressLine2"
                                  className="block mb-1 uppercase text-stone-400 font-bold tracking-widest"
                                >
                                  address 2:
                                </label> */}
                                <input
                                  id="addressLine2"
                                  name="addressLine2"
                                  type="text"
                                  placeholder="Optional"
                                  className="w-full border-2 border-stone-400 p-3 text-sm font-medium text-black focus:outline-none"
                                />
                              </div>
                              <div className="mb-4 block w-full">
                                <label
                                  htmlFor="city"
                                  className="mb-1 block font-bold uppercase tracking-widest text-stone-400"
                                >
                                  city:
                                </label>
                                <input
                                  id="city"
                                  name="city"
                                  type="text"
                                  required
                                  className="w-full border-2 border-stone-400 p-3 text-sm font-medium text-black focus:outline-none"
                                />
                              </div>
                              <div className="mb-4 block w-full">
                                <label
                                  htmlFor="country"
                                  className="mb-1 block font-bold uppercase tracking-widest text-stone-400"
                                >
                                  country:
                                </label>
                                <input
                                  id="country"
                                  name="country"
                                  type="text"
                                  required
                                  className="w-full border-2 border-stone-400 p-3 text-sm font-medium text-black focus:outline-none"
                                />
                              </div>
                              <div className="mb-4 block w-full">
                                <label
                                  htmlFor="postalCode"
                                  className="mb-1 block font-bold uppercase tracking-widest text-stone-400"
                                >
                                  postal code:
                                </label>
                                <input
                                  id="postalCode"
                                  name="postalCode"
                                  type="text"
                                  required
                                  className="w-full border-2 border-stone-400 p-3 text-sm font-medium text-black focus:outline-none"
                                />
                              </div>
                              <button
                                type="submit"
                                className="mt-4 w-full bg-darkGray p-5 font-semibold uppercase tracking-widest text-white"
                              >
                                deliver to this address
                              </button>
                            </form>
                          </div>
                        </Tab.Panel>
                        <Tab.Panel>click</Tab.Panel>
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
                    <label htmlFor="promocode" className="block font-bold">
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
          <div className="mb-5 w-full bg-white p-5 text-black">
            <label htmlFor="delivery-options" className="mb-4 block font-bold">
              delivery options
            </label>
          </div>
          <div className="mb-5 w-full bg-white p-5 text-black">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-xs uppercase">
                    <label htmlFor="promocode" className="mb-4 block font-bold">
                      payment
                    </label>
                    <ChevronDownIcon
                      className={open ? 'h-5 w-5 rotate-180 transform' : 'h-5 w-5'}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>No</Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </form>
        <div className="col-span-2 w-full">
          <div className="bg-white p-4">
            <div className="mb-2 flex px-2">
              <h2 className="mr-auto text-xs font-bold uppercase">4 items</h2>
              <button className="text-sm font-semibold text-gray-500 hover:text-gray-700">
                Edit
              </button>
            </div>
            <div className="mb-4 flex flex-col gap-4 border-y py-4 md:gap-2">
              <div className="grid h-36 w-full grid-cols-3 gap-2 pr-4">
                <div className="col-span-1 h-full">
                  <img src="" alt="" className="h-full w-full" />
                </div>
                <div className="col-span-2 flex h-full w-full flex-col items-start justify-between">
                  <h2 className="text-xl font-bold text-stone-500">$12.50</h2>
                  <p className="text-sm normal-case tracking-wide text-black">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta autem
                    inventore.
                  </p>
                  <div className="mb-2 flex w-full items-center justify-between">
                    <button className="text-xs font-bold uppercase text-stone-500">color</button>
                    <button className="text-xs font-bold uppercase text-stone-500">size</button>
                    <button className="text-xs font-bold uppercase text-stone-500">Qty: 1</button>
                  </div>
                </div>
              </div>
              <div className="grid h-36 w-full grid-cols-3 gap-2 pr-4">
                <div className="col-span-1 h-full">
                  <img src="" alt="" className="h-full w-full" />
                </div>
                <div className="col-span-2 flex h-full w-full flex-col items-start justify-between">
                  <h2 className="text-xl font-bold text-stone-500">$12.50</h2>
                  <p className="text-sm normal-case tracking-wide text-black">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta autem
                    inventore.
                  </p>
                  <div className="mb-2 flex w-full items-center justify-between">
                    <button className="text-xs font-bold uppercase text-stone-500">color</button>
                    <button className="text-xs font-bold uppercase text-stone-500">size</button>
                    <button className="text-xs font-bold uppercase text-stone-500">Qty: 1</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-stone-500">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="normal-case">sub-total:</span>
                <span>$25.00</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-black">total to pay:</span>
                <span>$25.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
