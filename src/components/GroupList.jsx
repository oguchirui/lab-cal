import { useGroLab } from "../context/GroLabContext";
import GroupRow from "./GroupRow";

const GroupList = () => {
  const { groups } = useGroLab();

  return (
    <div className="group-list">
      {/* 各科目群を表示 */}
      {groups.map(group => <GroupRow key={group.name} group={group} />)}
    </div>
  );
};

export default GroupList;
