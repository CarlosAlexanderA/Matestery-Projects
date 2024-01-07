export function Button({label, iconUrl}) {
  return (
    <button className="flex justify-center items-center px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      <img
        src={iconUrl}
        alt="icon button"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
}
