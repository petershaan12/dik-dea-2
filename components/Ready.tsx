const Ready = ({ numQuestions, handleClick }: any) => {
  return (
    <div className="w-full text-center ">
      <h2 className="text-xl  sm:text-5xl md:text-3xl font-bold tracking-tighter text-dark">
        Apakah Sudah Siap? ☺️
      </h2>
      <h3 className="mt-4 text-xl">
        ada {numQuestions} pertanyaan untuk menguji cek ini
      </h3>
      {/* <Button dispatch={dispatch} status={start} */}
      <button
        className=" mt-8 rounded-md bg-primary hover:bg-red-700 px-8 py-3 text-sm font-medium text-gray-50 shadow transition-colors duration-500 hover:bg-primary/80"
        onClick={handleClick}
      >
        Saya Sudah Siap
      </button>
    </div>
  );
};

export default Ready;
