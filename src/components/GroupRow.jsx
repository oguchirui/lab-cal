import { useGroLab, useGroLabDispatch } from "../context/GroLabContext";
import gradeAndScore from "../data/gradeAndScore";

const GroupRow = ({ group }) => {
  const { groups } = useGroLab();
  const dispatch = useGroLabDispatch();

  // セレクトボックスの値が変更されたときに呼ばれる関数
  const calcHandler = (e, subjectName) => {
    // 現在の科目群のindex
    const i = groups.findIndex(val => val.name === group.name);
    // 変更されたセレクトボックスの科目のindex
    const j = group.subjects.findIndex(val => val.name === subjectName);
    // 選択された値
    const selected = JSON.parse(e.target.value);

    // 状態を更新
    dispatch({ i, j, score: selected.score });
  };

  // optionタグを返す関数
  const getOptions = (subject) => {
    // 現在の科目群が「専門英語」のときは「未取得・取得」のみ
    if (group.name === "専門英語") {
      return (
        <>
          <option value={JSON.stringify({ score: 0, credit: subject.credit })}>未取得</option>
          <option value={JSON.stringify({ score: 95, credit: subject.credit })}>取得</option>
        </>
      );
    } else {
      // 他では「未取得・AA〜C」
      return gradeAndScore.map(obj => (
        <option
          key={obj.grade}
          value={JSON.stringify({ score: obj.score, credit: subject.credit })}
        >
          {obj.grade}
        </option>
      ));
    }
  };

  return (
    // 科目群を表示
    <table className="group-row">
      <tbody>
        <tr>
          <th>{group.name}</th>
          {group.subjects.map(subject => (
            <td key={subject.name}>
              {subject.name + ' '}
              <select onChange={e => calcHandler(e, subject.name)}>
                {getOptions(subject)}
              </select>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default GroupRow;
