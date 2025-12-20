export default function Contact() {
  return (
    <section className="pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border p-3 rounded md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded md:col-span-2 hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
