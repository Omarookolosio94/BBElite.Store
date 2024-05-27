import { logoImg } from "core/consts/images";

export default function Loader() {
  return (
    <div
      className={`no-scrollbar overlay fixed left-0 top-0 z-40 h-screen w-screen overflow-auto bg-black bg-opacity-10 backdrop-blur-sm backdrop-filter`}
      style={{
        minHeight: "calc(100vh - 72px)",
        zIndex: 1000,
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <img
          loading="lazy"
          className="h-[50px] w-[50px] animate-bounce"
          src={logoImg}
          alt="BB Elites"
        />
        <p className="font-bold text-[#6a2625]">Loading please wait...</p>
      </div>
    </div>
  );
}
