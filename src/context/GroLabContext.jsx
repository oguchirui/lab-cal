import { useReducer, createContext, useContext } from "react";
import groups from "../data/groups";
import labs from "../data/labs";

// 科目群と研究室の状態を保存するコンテキストを作成
const GroLabContext = createContext();
const GroLabDispatchContext = createContext();

// 状態を使うための関数
const useGroLab = () => useContext(GroLabContext);
// 状態を更新するための関数
const useGroLabDispatch = () => useContext(GroLabDispatchContext);

// コンテキストを共有するためのプロバイダー
const GroLabProvider = ({ children }) => {
  // 状態を更新する処理（actionで受け取ったindexの科目群について更新）
  const reducer = (state, action) => {
    const newState = structuredClone(state);  // 状態をコピー

    // 入力された成績へと状態を更新
    newState.groups[action.i].subjects[action.j].score = action.score;

    const subjects = newState.groups[action.i].subjects;
    let top1 = 0, bottom1 = 0, top2 = 0, bottom2 = 0;

    // 各科目の成績と単位数を使い素点の分母分子を計算
    for (let subject of subjects) {
      if (subject.score > 0) {
        top1 += subject.credit;
        top2 += subject.score * subject.credit;
        bottom2 += subject.credit;
      }
      bottom1 += subject.credit;
    }

    // 素点を計算、更新
    newState.groups[action.i].rawPoint = {
      upper: bottom1 === 0 ? 0 : (top1 / bottom1) * 100,  // 上段の素点
      lower: bottom2 === 0 ? 0 : (top2 / bottom2)  // 下段の素点
    };

    // グループ名をキーにしたmapオブジェクトを作成
    const groupMap = new Map(newState.groups.map(group => [group.name, group]));

    // 各研究室の評価点を計算
    for (let lab of newState.labs) {
      let point = 0;

      // 上段の素点を使った評価点
      for (let obj of lab.weights.upper) {
        const group = groupMap.get(obj.name);
        if (group) {
          point += group.rawPoint.upper * obj.weight / 100;
        }
      }

      // 下段の素点を使った評価点
      for (let obj of lab.weights.lower) {
        const group = groupMap.get(obj.name);
        if (group) {
          point += group.rawPoint.lower * obj.weight / 100;
        }
      }

      // 小数点第2位までに四捨五入して評価点を更新
      lab.point = Math.round(point * 100) / 100;
    }
    return newState;
  };

  // 状態と、それを更新する関数を作成
  const [state, dispatch] = useReducer(reducer, { groups, labs });

  return (
    // コンテキストを子コンポーネントに渡す
    <GroLabContext.Provider value={state}>
      <GroLabDispatchContext.Provider value={dispatch}>
        {children}
      </GroLabDispatchContext.Provider>
    </GroLabContext.Provider>
  );
};

export { useGroLab, useGroLabDispatch, GroLabProvider };
