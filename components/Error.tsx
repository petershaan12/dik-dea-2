const Error = ({ texts }: any) => {
  return (
    <div className="flex flex-col items-center mt-4 gap-2 text-xl">
      <p className="text-center text-lg font-semibold py-8 ">
        <span>💥</span>
        {texts.error}
      </p>
    </div>
  );
};

export default Error;
