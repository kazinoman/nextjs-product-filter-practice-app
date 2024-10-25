export default function ProductLoading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-lg border bg-white animate-pulse">
        <div className="group relative block h-48 overflow-hidden bg-gray-200 md:h-64"></div>
        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <div className="mb-2 h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="mb-8 h-20 bg-gray-200 rounded"></div>
          <div className="mt-auto flex items-end justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200"></div>
              <div>
                <div className="block h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="block h-4 bg-gray-200 rounded w-1/3 mt-1"></div>
              </div>
            </div>
            <div className="rounded border px-2 py-1 h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
