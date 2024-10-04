
function Square({value,onSquareClick}) {

  return (
    <button
      className="bg-[#fff] border border-solid border-black font-bold text-[24px] leading-[34px] h-[34px] mr-[-1px] mt-[-1px] w-[34px] p-0 text-center float-left"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );}

export default Square