import { useParams, useLocation } from "react-router-dom";

export default function SimplePage() {
  const params = useParams();
  const location = useLocation();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          {location.pathname.replaceAll("/", " ").toUpperCase()}
        </h1>
        <p className="text-gray-600">
          This page is ready. Content will be added here.
        </p>
      </div>
    </div>
  );
}
