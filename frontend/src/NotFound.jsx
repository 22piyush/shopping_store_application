function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-gray-200 md:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
        >
          Back to Home
        </a>

        <div className="mt-10 flex justify-center">
          <div className="h-40 w-40 rounded-full bg-gray-200 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
