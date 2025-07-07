import MenuItem from "../utils/MenuItem";
import { industryList, resourcesList, companyList } from "../utils/consts";

const ShortMenu = () => {
  return (
    <div className="shortmenu">
      <ul className="shortmenu__list">
        <MenuItem title={"Industries"} options={industryList} />
        <li className="shortmenu__item shortmenu__content">Platform</li>
        <MenuItem title={"Resources"} options={resourcesList} />
        <MenuItem title={"Company"} options={companyList} />
      </ul>
    </div>
  );
};

export default ShortMenu;
