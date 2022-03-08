const Loading = () => (
  <section className="grid place-content-center" style={{ height: '85vh' }}>
    <div className="flex items-center justify-center space-x-2 animate-pulse">
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
    </div>
  </section>
);

export { Loading };
