import { useGroLab } from "../context/GroLabContext";
import LabRow from "./LabRow";

const LabList = () => {
  const labs = useGroLab().labs;

  // 評価点の高い順に並び替えた新しい研究室の配列を作成
  const sortedLabs = labs.slice().sort((a, b) => b.point - a.point);

  return (
    <div className="lab-list">
      {/* 説明文 */}
      <div className="lab-header">
        <p>評価点が高い順に研究室を表示しています。</p>
        <p>研究室名をクリックすると研究室のホームページへ移動できます。</p>
        <p>※取得した科目の評点は AA: 95点  A: 85点  B: 75点  C: 65点 として計算しています。</p>
      </div>

      {/* 研究室リストの見出し */}
      <div className="lab-row">
        <p className="lab-name">研究室</p>
        <p className="lab-teacher">担当教員</p>
        <p className="lab-point">あなたの評価点</p>
      </div>

      {/* 各研究室を並び替えた順に表示 */}
      {sortedLabs.map(lab => <LabRow key={lab.name} lab={lab} />)}
    </div>
  );
};

export default LabList;
