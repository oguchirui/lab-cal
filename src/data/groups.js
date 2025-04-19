// 科目のクラス
class Subject {
  constructor(name, credit, score = 0) {
    this.name = name;
    this.credit = credit;
    this.score = score;
  }
}

// 素点のクラス
class RawPoint {
  constructor(upper = 0, lower = 0) {
    this.upper = upper;
    this.lower = lower;
  }
}

// 科目群のクラス
class Group {
  constructor(name, rawPoint, ...subjects) {
    this.name = name;
    this.rawPoint = rawPoint;
    this.subjects = subjects;
  }
}

// 科目群の配列
const groups = [
  new Group(
    '電磁気学群',
    new RawPoint(),
    new Subject('電磁気学基礎論', 2),
    new Subject('電磁気学基礎演習', 1),
    new Subject('電磁気学Ⅰ', 2),
    new Subject('電磁気学Ⅰ演習', 1),
    new Subject('電磁気学Ⅱ', 2),
    new Subject('基礎磁気工学', 2),
  ),
  new Group(
    '電気回路群',
    new RawPoint(),
    new Subject('電気回路学基礎論', 2),
    new Subject('電気回路学基礎演習', 1),
    new Subject('電気回路学Ⅰ', 2),
    new Subject('電気回路学Ⅰ演習', 1),
    new Subject('電気回路学Ⅱ', 2),
  ),
  new Group(
    '情報基礎群',
    new RawPoint(),
    new Subject('計算機学', 2),
    new Subject('情報数学', 2),
    new Subject('アルゴリズムとデータ構造', 2),
    new Subject('プログラミング演習A', 2),
  ),
  new Group(
    '力学群',
    new RawPoint(),
    new Subject('解析力学', 2),
  ),
  new Group(
    '応用数学群',
    new RawPoint(),
    new Subject('応用数学A', 2),
    new Subject('応用数学B', 2),
  ),
  new Group(
    'バイオ医工学基礎群',
    new RawPoint(),
    new Subject('基礎生物科学', 2),
    new Subject('基礎生命工学', 2),
    new Subject('工学者のための医学概論', 2),
    new Subject('生命システム情報学', 2),
  ),
  new Group(
    '電気工学群',
    new RawPoint(),
    new Subject('電磁エネルギー変換A', 2),
    new Subject('電気エネルギー発生工学', 2),
  ),
  new Group(
    'システム工学群',
    new RawPoint(),
    new Subject('システム制御工学A', 2),
    new Subject('ディジタル信号処理', 2),
  ),
  new Group(
    '通信工学群',
    new RawPoint(),
    new Subject('通信工学', 2),
    new Subject('情報通信理論', 2),
    new Subject('通信工学概論', 2),
  ),
  new Group(
    '電子工学群',
    new RawPoint(),
    new Subject('電子物性B', 2),
    new Subject('半導体デバイス', 2),
  ),
  new Group(
    '電子回路群',
    new RawPoint(),
    new Subject('電子回路Ⅰ', 2),
    new Subject('電気計測学', 2),
  ),
  new Group(
    '計算機学群A',
    new RawPoint(),
    new Subject('計算機ソフトウェア工学', 2),
    new Subject('プログラミング演習B', 2),
    new Subject('オートマトン・言語理論', 2),
    new Subject('情報基礎演習', 1),
    new Subject('人工知能', 2),
    new Subject('システムソフトウェア工学', 2),
    new Subject('情報論理学', 2),
  ),
  new Group(
    '計算機学群B',
    new RawPoint(),
    new Subject('ディジタルコンピューティング', 2),
  ),
  new Group(
    '量子力学群',
    new RawPoint(),
    new Subject('量子力学A', 2),
    new Subject('量子力学B', 2),
  ),
  new Group(
    '熱統計物理学群',
    new RawPoint(),
    new Subject('熱学・統計力学A', 2),
  ),
  new Group(
    '物性物理学群',
    new RawPoint(),
    new Subject('電子物性A', 2),
  ),
  new Group(
    '専門実験群',
    new RawPoint(),
    new Subject('電気・通信・電子・情報工学実験A', 1),
    new Subject('電気・通信・電子・情報工学実験B', 1),
  ),
  new Group(
    '英語',
    new RawPoint(),
    new Subject('英語Ⅰ-A', 1),
    new Subject('英語Ⅰ-B', 1),
    new Subject('英語Ⅱ-A', 1),
    new Subject('英語Ⅱ-B', 1),
    new Subject('英語Ⅲ', 1),
    new Subject('英語Ⅲ(e-learning)', 1),
  ),
  new Group(
    '専門英語',
    new RawPoint(),
    new Subject('工学英語 or アカデミックライティング', 1),
  ),
];

export default groups;
