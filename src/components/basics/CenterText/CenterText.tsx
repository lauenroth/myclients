const CenterText = ({ children }) => (
  <section className="grid place-content-center" style={{ height: '85vh' }}>
    <h1 className="text-2xl md:text-5xl">{children}</h1>
  </section>
);

export { CenterText };
