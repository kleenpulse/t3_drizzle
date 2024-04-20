const LoadingScreen = () => {
  return (
    <section className="bg-primary fixed inset-0 grid h-screen w-full place-items-center">
      <div className="flex items-center gap-x-2 text-3xl lg:text-4xl">
        <p className="font-inter w-fit bg-gradient-to-r from-white via-blue-200  to-blue-500 bg-clip-text font-medium text-transparent ">
          VXRCEL
        </p>
        <span>GALLERY</span>
      </div>
    </section>
  );
};

export default LoadingScreen;
