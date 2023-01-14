import sadpikachu from "../assets/sadpikachu.gif";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center w-[230px] h-[260px] px-4 py-4 bg-transparent rounded-md">
      <img src={sadpikachu} alt="pikachu chorando" />
      <h2 className="mt-2">Desculpa. Não encontrei</h2>
    </div>
  );
};
