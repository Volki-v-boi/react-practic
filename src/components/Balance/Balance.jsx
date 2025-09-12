import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reset } from "../../redux/store";

export default function Balance() {
  const credits = useSelector((state) => state.balance.value);
  const dispath = useDispatch();

  const hendleDeposit = () => {
    dispath(deposit(10));
  };

  const handleWithdraw = () => {
    dispath(withdraw(5));
  };

  const handleReset = () => {
    dispath(reset());
  };

  return (
    <div>
      <p>Balance: {credits} credits</p>
      <button onClick={hendleDeposit}>Credits Deposit</button>
      <button onClick={handleWithdraw}>Credits Withdraw</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
