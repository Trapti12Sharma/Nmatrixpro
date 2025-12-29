export default function PageLayout({ title, children }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-gray-700 leading-7 max-w-3xl">{children}</p>
    </div>
  );
}
