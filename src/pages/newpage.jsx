import { Disclosure, Tab } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Checkout() {
  return (
    <div className="container flex max-w-5xl flex-col items-center px-4 md:px-12">
      <h1 className="my-8 text-2xl font-bold uppercase text-gray-900 md:text-3xl">checkout</h1>
      <div className="flex w-full grid-cols-5 flex-col-reverse gap-5 md:grid">
        <form className="col-span-3 flex w-full flex-col text-xs uppercase">
          <div className="mb-5 w-full bg-white p-5 text-black">
            <label htmlFor="delivery-country" className="mb-4 block font-extrabold">
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
                <label htmlFor="promocode" className="block font-extrabold">
                  promo/student code or vouchers:
                </label>
                <ChevronDownIcon className={open ? 'h-5 w-5 rotate-180 transform' : 'h-6 w-6'} />
              </Disclosure.Button>
              <Disclosure.Panel>
                <Tab.Group>
                  <Tab.List className="mb-4 flex">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'flex w-full items-center justify-center border-gray-700 p-2 text-xs font-black uppercase tracking-wider md:p-4',
                          'focus:outline-none focus:ring-0',
                          selected
                            ? 'border-x border-t md:border-x-2 md:border-t-2'
                            : 'border-b md:border-b-2',
                        )
                      }
                    >
                      <span>promo/student code</span>
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'flex w-full items-center justify-center border-gray-700 p-2 text-xs font-black uppercase tracking-wider md:p-4',
                          'focus:outline-none focus:ring-0',
                          selected
                            ? 'border-x border-t md:border-x-2 md:border-t-2'
                            : 'border-b md:border-b-2',
                        )
                      }
                    >
                      <span>vouchers</span>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="mb-6">
                        <span className="mb-4 block font-extrabold">add promo/student code</span>
                        <label
                          htmlFor="promocode"
                          className="mb-0.5 block text-xs font-bold tracking-widest text-stone-400"
                        >
                          promo/student code
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
                        <span className="mb-4 block font-extrabold">add voucher</span>
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
              <label className="mb-2 block font-extrabold">need to know</label>
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
            <label htmlFor="email" className="mb-2 block font-extrabold">
              email address
            </label>
            <p className="text-sm normal-case text-stone-600">testemail@gmail.com</p>
          </div>
          <div className="mb-5 w-full bg-white p-5 text-black">
            <Disclosure defaultOpen={true}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="mb-2 flex w-full justify-between py-2 text-xs uppercase">
                    <span className="block font-extrabold">delivery address</span>
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
                              'flex w-full items-center justify-center border-gray-700 p-2 text-xs font-black uppercase tracking-wider md:p-4',
                              'focus:outline-none focus:ring-0',
                              selected
                                ? 'border-x border-t md:border-x-2 md:border-t-2'
                                : 'border-b md:border-b-2',
                            )
                          }
                        >
                          <span>postal address</span>
                        </Tab>
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              'flex w-full items-center justify-center border-gray-700 p-2 text-xs font-black uppercase tracking-wider md:p-4',
                              'focus:outline-none focus:ring-0',
                              selected
                                ? 'border-x border-t md:border-x-2 md:border-t-2'
                                : 'border-b md:border-b-2',
                            )
                          }
                        >
                          <span>click & collect</span>
                        </Tab>
                      </Tab.List>
                      <Tab.Panels>
                        <Tab.Panel>
                          <div>
                            <span className="mb-6 block font-extrabold">add address</span>
                            <form>
                              <div className="flex gap-4">
                                <div className="mb-4 block w-full">
                                  <label
                                    htmlFor="firstName"
                                    className="mb-1 block font-extrabold uppercase tracking-widest text-stone-400"
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
                                    className="mb-1 block font-extrabold uppercase tracking-widest text-stone-400"
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
                                  className="mb-1 block font-extrabold uppercase tracking-widest text-stone-400"
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
                                  className="mb-1 block font-extrabold uppercase tracking-widest text-stone-400"
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
                                  className="block mb-1 uppercase text-stone-400 font-extrabold tracking-widest"
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
                                  className="mb-1 block font-extrabold uppercase tracking-widest text-stone-400"
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
                                  className="mb-1 block font-extrabold uppercase tracking-widest text-stone-400"
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
                                  className="mb-1 block font-extrabold uppercase tracking-widest text-stone-400"
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
          <div className="mb-5 w-full bg-white p-5 text-black">
            <label htmlFor="delivery-options" className="mb-4 block font-extrabold">
              delivery options
            </label>
          </div>
          <div className="mb-5 w-full bg-white p-5 text-black">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-xs uppercase">
                    <label htmlFor="promocode" className="mb-4 block font-extrabold">
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
        <div className="col-span-2 w-full bg-white p-5 uppercase md:h-1/2">
          <div className="flex justify-between">
            <span className="mb-4 block text-xs font-extrabold">4 items</span>
            <button className="mb-4 block text-xs">editt</button>
          </div>
        </div>
      </div>
    </div>
  )
}
