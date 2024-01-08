export function Button({label, iconUrl, styleClass}) {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 font-montserrat text-lg leading-none  rounded-full ${
        styleClass !== undefined
          ? styleClass
          : 'text-white border-coral-red bg-coral-red'
      }`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="icon button"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
}
