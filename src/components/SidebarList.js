import SidebarListItem from './SidebarListItem';
import listitems from '../Utils/data';

const  SidebarList= () => {
  return (
    <div className="sidebar-container__list">
      <ul>
        {listitems.map((items,index) => {
            return (
                <SidebarListItem key={index} text={items.text} path={items.path}/>
            );
        })}
        {/* <SidebarListItem text={listitems[0].text} path={listitems[0].path}/>
        <SidebarListItem text={listitems[1].text} path={listitems[1].path}/> */}
      </ul>
    </div>
  )
}
export default SidebarList;

