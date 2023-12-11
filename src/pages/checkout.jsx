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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="col-span-3 flex flex-col w-full text-xs uppercase"
        >
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
            <Disclosure defaultOpen={true}>
              <Disclosure.Button className="flex justify-between w-full py-2 mb-2 text-xs uppercase">
                <label htmlFor="promocode" className="block font-extrabold">
                  promo/student code or vouchers:
                </label>
                <ChevronDownIcon
                  className={open ? "rotate-180 transform h-5 w-5" : "h-6 w-6"}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                <Tab.Group>
                  <Tab.List className="flex mb-4">
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
                    <Tab.Panel>
                      <div className="mb-6">
                        <span className="block font-extrabold mb-4">
                          add promo/student code
                        </span>
                        <label
                          htmlFor="promocode"
                          className="block text-stone-400 text-xs tracking-widest font-bold mb-0.5"
                        >
                          promo/student code
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            name="promocode"
                            id="promocode"
                            className="flex-1 uppercase font-medium text-black border-2 border-darkGray p-4 focus:outline-none"
                          />
                          <button
                            type="submit"
                            className="uppercase text-xs tracking-widest text-white bg-darkGray px-5 py-3"
                          >
                            apply code
                          </button>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="mb-6">
                        <span className="block font-extrabold mb-4">
                          add voucher
                        </span>
                        <label
                          htmlFor="voucher"
                          className="block text-stone-400 text-xs tracking-widest font-bold mb-0.5"
                        >
                          voucher
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            name="voucher"
                            id="voucher"
                            className="flex-1 uppercase font-medium text-black border-2 border-darkGray p-4 focus:outline-none"
                          />
                          <button
                            type="submit"
                            className="uppercase text-xs tracking-widest text-white bg-darkGray px-5 py-3"
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
              <label className="block font-extrabold mb-2">need to know</label>
              <ul className="list-disc list-outside px-5 normal-case text-sm text-stone-600 leading-6">
                <li className="mb-1">
                  You can only use one discount/promo code per order.This
                  applies to our free-delivery codes, too.
                </li>
                <li>
                  Discount/promo codes cannot be used when buying gift vouchers.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full bg-white text-black p-5 mb-5">
            <label htmlFor="email" className="block font-extrabold mb-2">
              email address
            </label>
            <p className="text-sm text-stone-600 normal-case">
              testemail@gmail.com
            </p>
          </div>
          <div className="w-full bg-white text-black p-5 mb-5">
            <Disclosure defaultOpen={true}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-2 mb-2 text-xs uppercase">
                    <span className="block font-extrabold">
                      delivery address
                    </span>
                    <ChevronDownIcon
                      className={
                        open ? "rotate-180 transform h-5 w-5" : "h-6 w-6"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <Tab.Group>
                      <Tab.List className="flex mb-4">
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
                        <Tab.Panel>
                          <div>
                            <span className="block font-extrabold mb-6">
                              add address
                            </span>
                            <form>
                              <div className="flex gap-4">
                                <div className="block w-full mb-4">
                                  <label
                                    htmlFor="firstName"
                                    className="block mb-1 uppercase text-stone-400 font-extrabold tracking-widest"
                                  >
                                    first name:
                                  </label>
                                  <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    className="w-full text-sm font-medium text-black border-2 border-stone-400 p-3 focus:outline-none"
                                  />
                                </div>
                                <div className="block w-full mb-4">
                                  <label
                                    htmlFor="lastName"
                                    className="block mb-1 uppercase text-stone-400 font-extrabold tracking-widest"
                                  >
                                    last name:
                                  </label>
                                  <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    className="w-full text-sm font-medium text-black border-2 border-stone-400 p-3 focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div className="block w-full mb-4">
                                <label
                                  htmlFor="phoneNumber"
                                  className="block mb-1 uppercase text-stone-400 font-extrabold tracking-widest"
                                >
                                  phone number:
                                </label>
                                <input
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  type="text"
                                  required
                                  className="w-full text-sm font-medium text-black border-2 border-stone-400 p-3 focus:outline-none"
                                />
                              </div>
                              <div className="block w-full mb-2">
                                <label
                                  htmlFor="addressLine1"
                                  className="block mb-1 uppercase text-stone-400 font-extrabold tracking-widest"
                                >
                                  address:
                                </label>
                                <input
                                  id="addressLine1"
                                  name="addressLine1"
                                  type="text"
                                  required
                                  className="w-full text-sm font-medium text-black border-2 border-stone-400 p-3 focus:outline-none"
                                />
                              </div>
                              <div className="block w-full mb-4">
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
                                  className="w-full text-sm font-medium text-black border-2 border-stone-400 p-3 focus:outline-none"
                                />
                              </div>
                              <div className="block w-full mb-4">
                                <label
                                  htmlFor="city"
                                  className="block mb-1 uppercase text-stone-400 font-extrabold tracking-widest"
                                >
                                  city:
                                </label>
                                <input
                                  id="city"
                                  name="city"
                                  type="text"
                                  required
                                  className="w-full text-sm font-medium text-black border-2 border-stone-400 p-3 focus:outline-none"
                                />
                              </div>
                              <div className="block w-full mb-4">
                                <label
                                  htmlFor="country"
                                  className="block mb-1 uppercase text-stone-400 font-extrabold tracking-widest"
                                >
                                  country:
                                </label>
                                <input
                                  id="country"
                                  name="country"
                                  type="text"
                                  required
                                  className="w-full text-sm font-medium text-black border-2 border-stone-400 p-3 focus:outline-none"
                                />
                              </div>
                              <div className="block w-full mb-4">
                                <label
                                  htmlFor="postalCode"
                                  className="block mb-1 uppercase text-stone-400 font-extrabold tracking-widest"
                                >
                                  postal code:
                                </label>
                                <input
                                  id="postalCode"
                                  name="postalCode"
                                  type="text"
                                  required
                                  className="w-full text-sm font-medium text-black border-2 border-stone-400 p-3 focus:outline-none"
                                />
                              </div>
                              <button
                                type="submit"
                                className="w-full uppercase font-semibold tracking-widest text-white bg-darkGray mt-4 p-5"
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
        <div className="col-span-2 bg-white w-full md:h-1/2 p-5 uppercase">
          <div className="flex justify-between">
            <span className="block font-extrabold text-xs mb-4">4 items</span>
            <button className="block text-xs mb-4 uppercase">editt</button>
          </div>
        </div>
      </div>
    </div>
  );
}
