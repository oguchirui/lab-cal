import GroupList from "./components/GroupList";
import LabList from "./components/LabList";

const App = () => {

  return (
    <>
      {/* タイトル */}
      <h1>東北大学 工学部 電気情報物理工学科 情報工学コース</h1>
      <h2>研究室配属評価点計算</h2>

      {/* 説明文と重み表へのリンク */}
      <div className="top-flex">
        <p>各科目で取得した成績を選択してください。</p>
        <p>実際の重み表は<a
          href="https://localweb.ecei.tohoku.ac.jp/~kyomu06/weighttable25.html"
          target="_blank"
          rel="noopener noreferrer"
        >こちら</a>(学内限定)</p>
      </div>

      {/* 科目群リストと研究室リストを表示 */}
      <GroupList />
      <LabList />
    </>
  );
};

export default App;
