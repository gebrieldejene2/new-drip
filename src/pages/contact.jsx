export default function Contact() {
  return (
    <section className="p-6 dark:text-gray-100">
      <form
        noValidate=""
        className="container mx-auto w-full max-w-xl space-y-6 rounded-md p-8 shadow dark:bg-gray-900"
      >
        <h2 className="leadi w-full text-3xl font-bold">Contact us</h2>
        <div>
          <label htmlFor="name" className="mb-1 ml-1 block">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            required=""
            className="focus:ri focus:ri block w-full rounded p-2 focus:outline-none focus:ring dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 ml-1 block">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            required=""
            className="focus:ri focus:ri block w-full rounded p-2 focus:outline-none focus:ring dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 ml-1 block">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Message..."
            className="autoexpand focus:ri focus:ri block w-full rounded p-2 focus:outline-none focus:ring dark:bg-gray-800"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="focus:ri focus:ri hover:ri w-full rounded px-4 py-2 font-bold shadow hover:ring focus:outline-none focus:ring dark:bg-violet-400 dark:text-gray-900"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  )
}
