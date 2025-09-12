import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/store";

export default function LangSwitcher() {
  const lang = useSelector((state) => state.locale.lang);

  const dispath = useDispatch();

  const handleChange = (event) => {
    dispath(changeLang(event.target.value));
    console.log(event.target.value);
  };
  return (
    <div>
      <select value={lang} onChange={handleChange}>
        <option value="en">EN</option>
        <option value="pl">PL</option>
        <option value="ua">UA</option>
      </select>
    </div>
  );
}
