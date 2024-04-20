const LoadingScreen = () => {
  return (
    <section className="bg-primary fixed inset-0 grid h-screen w-full place-items-center">
      <div className="flex items-center gap-x-2">
        <p className="font-inter w-fit bg-gradient-to-r from-white via-blue-200  to-blue-500 bg-clip-text font-medium text-transparent">
          VXRCEL
        </p>
        <span className="lg:text-2xl">GALLERY</span>
      </div>
    </section>
  );
};

export default LoadingScreen;
