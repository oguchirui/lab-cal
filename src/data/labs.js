// 研究室の配列
const labs = [
  {
    name: '計算機構論',
    teacher: '青木・伊藤（康）',
    url: 'http://www.aoki.ecei.tohoku.ac.jp/oc2024/',
    point: 0,
    weights: {
      upper: [
        { name: '専門英語', weight: 5 }
      ],
      lower: [
        { name: '電気回路群', weight: 11 },
        { name: '情報基礎郡', weight: 11 },
        { name: '応用数学群', weight: 11 },
        { name: 'システム工学群', weight: 11 },
        { name: '通信工学群', weight: 11 },
        { name: '計算機学群A', weight: 11 },
        { name: '計算機学群B', weight: 11 },
        { name: '専門実験群', weight: 11 },
        { name: '英語', weight: 7 },
      ]
    }
  },
  {
    name: '知能集積システム学',
    teacher: '張山・ウィッデヤスーリヤ',
    url: 'http://www.ecei.tohoku.ac.jp/hariyama-lab/',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 20 },
        { name: '応用数学群', weight: 5 },
        { name: 'システム工学群', weight: 15 },
        { name: '計算機学群A', weight: 5 },
        { name: '計算機学群B', weight: 10 },
        { name: '専門実験群', weight: 10 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 10 },
        { name: 'システム工学群', weight: 10 },
        { name: '計算機学群B', weight: 10 },
      ]
    }
  },
  {
    name: 'ソフトウェア基礎科学',
    teacher: '住井・松田（一）',
    url: 'http://www.sf.ecei.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 12 },
        { name: '計算機学群A', weight: 20 },
        { name: '計算機学群B', weight: 3 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 12 },
        { name: '計算機学群A', weight: 20 },
        { name: '計算機学群B', weight: 3 },
        { name: '英語', weight: 25 },
      ]
    }
  },
  {
    name: '情報システム評価学',
    teacher: '伊藤（健）・全',
    url: 'http://www.dais.is.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 20 },
        { name: '計算機学群A', weight: 10 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 30 },
        { name: '計算機学群A', weight: 10 },
        { name: '計算機学群B', weight: 5 },
        { name: '専門実験群', weight: 5 },
        { name: '英語', weight: 15 },
      ]
    }
  },
  {
    name: 'ネットワークアーキテクチャ',
    teacher: '長谷川',
    url: 'http://www.cn.riec.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 10 },
        { name: '通信工学群', weight: 10 },
        { name: '計算機学群A', weight: 10 },
        { name: '専門実験群', weight: 5 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 10 },
        { name: 'システム工学群', weight: 10 },
        { name: '通信工学群', weight: 10 },
        { name: '計算機学群A', weight: 10 },
        { name: '計算機学群B', weight: 10 },
        { name: '専門実験群', weight: 5 },
        { name: '英語', weight: 5 },
      ]
    }
  },
  {
    name: 'コンピューティング情報理論',
    teacher: '中野',
    url: 'http://www.riec.tohoku.ac.jp/~ksk/lab/',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 10 },
        { name: '計算機学群A', weight: 10 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 20 },
        { name: '応用数学群', weight: 10 },
        { name: '計算機学群A', weight: 25 },
        { name: '計算機学群B', weight: 5 },
        { name: '英語', weight: 15 },
      ]
    }
  },
  {
    name: 'ソフトコンピューティング集積システム',
    teacher: '堀尾',
    url: 'http://www.scis.riec.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [

      ],
      lower: [

      ]
    }
  },
  {
    name: 'アルゴリズム論',
    teacher: '周・鈴木（顕）',
    url: 'http://www.ecei.tohoku.ac.jp/alg/',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 20 },
        { name: '計算機学群A', weight: 10 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 30 },
        { name: '計算機学群A', weight: 20 },
        { name: '計算機学群B', weight: 5 },
        { name: '英語', weight: 10 },
      ]
    }
  },
  {
    name: '知能システム科学',
    teacher: '篠原・吉仲',
    url: 'https://www.iss.is.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 5 },
        { name: '計算機学群A', weight: 10 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 25 },
        { name: '応用数学群', weight: 5 },
        { name: 'システム工学群', weight: 5 },
        { name: '計算機学群A', weight: 30 },
        { name: '計算機学群B', weight: 5 },
        { name: '専門実験群', weight: 5 },
        { name: '英語', weight: 5 },
      ]
    }
  },
  {
    name: '自然言語処理学',
    teacher: '(鈴木（潤））・坂口・乾',
    url: 'https://www.nlp.ecei.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 10 },
        { name: '計算機学群A', weight: 10 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 20 },
        { name: '応用数学群', weight: 5 },
        { name: 'システム工学群', weight: 5 },
        { name: '計算機学群A', weight: 25 },
        { name: '計算機学群B', weight: 5 },
        { name: '英語', weight: 15 },
      ]
    }
  },
  {
    name: '人工知能基礎学',
    teacher: '鈴木（潤）',
    url: 'https://www.fai.cds.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 10 },
        { name: '計算機学群A', weight: 10 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 25 },
        { name: '計算機学群A', weight: 30 },
        { name: '英語', weight: 20 },
      ]
    }
  },
  {
    name: '生命情報システム科学',
    teacher: '木下・西',
    url: 'http://www.sb.ecei.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 5 },
        { name: 'バイオ医工学基礎群', weight: 2 },
        { name: '計算機学群A', weight: 10 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 20 },
        { name: '応用数学群', weight: 5 },
        { name: 'バイオ医工学基礎群', weight: 8 },
        { name: '計算機学群A', weight: 15 },
        { name: '英語', weight: 30 },
      ]
    }
  },
  {
    name: '先端音情報システム',
    teacher: '坂本',
    url: 'http://www.ais.riec.tohoku.ac.jp/index-j.html',
    point: 0,
    weights: {
      upper: [
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 10 },
        { name: '応用数学群', weight: 15 },
        { name: 'バイオ医工学基礎群', weight: 15 },
        { name: 'システム工学群', weight: 15 },
        { name: '通信工学群', weight: 5 },
        { name: '計算機学群A', weight: 10 },
        { name: '計算機学群B', weight: 10 },
        { name: '専門実験群', weight: 5 },
        { name: '英語', weight: 10 },
      ]
    }
  },
  {
    name: '高次視覚情報システム',
    teacher: '（坂本）・曽',
    url: 'https://sites.google.com/view/tohoku-vision/ホーム?authuser=3',
    point: 0,
    weights: {
      upper: [
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '電気回路群', weight: 5 },
        { name: '情報基礎群', weight: 10 },
        { name: '力学群', weight: 5 },
        { name: '応用数学群', weight: 5 },
        { name: 'バイオ医工学基礎群', weight: 5 },
        { name: '電気工学群', weight: 5 },
        { name: 'システム工学群', weight: 10 },
        { name: '通信工学群', weight: 10 },
        { name: '電子工学群', weight: 5 },
        { name: '電子回路群', weight: 5 },
        { name: '計算機学群A', weight: 10 },
        { name: '計算機学群B', weight: 5 },
        { name: '専門実験群', weight: 5 },
        { name: '英語', weight: 10 },
      ]
    }
  },
  {
    name: 'インタラクティブコンテンツ',
    teacher: '北村・藤田',
    url: 'https://www.icd.riec.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 5 },
        { name: 'システム工学群', weight: 5 },
        { name: '通信工学群', weight: 5 },
        { name: '計算機学群A', weight: 5 },
        { name: '計算機学群B', weight: 5 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 15 },
        { name: 'システム工学群', weight: 10 },
        { name: '通信工学群', weight: 5 },
        { name: '計算機学群A', weight: 15 },
        { name: '計算機学群B', weight: 10 },
        { name: '専門実験群', weight: 5 },
        { name: '英語', weight: 10 },
      ]
    }
  },
  {
    name: '物理フラクチュオマティクス論',
    teacher: '田中（和）',
    url: 'http://www.smapip.is.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '電気回路群', weight: 5 },
        { name: '情報基礎群', weight: 20 },
        { name: '応用数学群', weight: 20 },
        { name: 'システム工学群', weight: 5 },
        { name: '通信工学群', weight: 5 },
        { name: '計算機学群A', weight: 10 },
        { name: '計算機学群B', weight: 10 },
        { name: '英語', weight: 20 },
      ]
    }
  },
  {
    name: '数理情報学/量子コンピューティング共同講座',
    teacher: '大関・工藤',
    url: 'https://altema.is.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 15 },
        { name: '応用数学群', weight: 30 },
        { name: 'システム工学群', weight: 10 },
        { name: '計算機学群A', weight: 20 },
        { name: '計算機学群B', weight: 5 },
        { name: '英語', weight: 15 },
      ]
    }
  },
  {
    name: '情報通信技術論',
    teacher: '加藤（寧）・川本',
    url: 'http://www.it.is.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 20 },
        { name: 'システム工学群', weight: 10 },
        { name: '通信工学群', weight: 15 },
        { name: '計算機学群A', weight: 15 },
        { name: '専門実験群', weight: 20 },
        { name: '英語', weight: 15 },
      ]
    }
  },
  {
    name: '情報通信ソフトウェア',
    teacher: '（菅沼）・阿部（亨）',
    url: 'http://www.ci.cc.tohoku.ac.jp/',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 20 },
        { name: '応用数学群', weight: 20 },
        { name: 'システム工学群', weight: 20 },
        { name: '通信工学群', weight: 10 },
        { name: '計算機学群A', weight: 10 },
        { name: '計算機学群B', weight: 10 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '英語', weight: 5 },
      ]
    }
  },
  {
    name: '情報ネットワーク論',
    teacher: '菅沼・後藤',
    url: 'http://www.ci.cc.tohoku.ac.jp/index.html',
    point: 0,
    weights: {
      upper: [
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 30 },
        { name: '応用数学群', weight: 10 },
        { name: 'システム工学群', weight: 10 },
        { name: '通信工学群', weight: 10 },
        { name: '計算機学群A', weight: 20 },
        { name: '英語', weight: 15 },
      ]
    }
  },
  {
    name: '暗号プロトコル論',
    teacher: '水木',
    url: 'https://sites.google.com/tohoku.ac.jp/mizuki-lab',
    point: 0,
    weights: {
      upper: [
        { name: '情報基礎群', weight: 20 },
        { name: '専門実験群', weight: 10 },
        { name: '専門英語', weight: 5 },
      ],
      lower: [
        { name: '情報基礎群', weight: 30 },
        { name: '応用数学群', weight: 5 },
        { name: '計算機学群A', weight: 15 },
        { name: '専門実験群', weight: 10 },
        { name: '英語', weight: 5 },
      ]
    }
  },
]

export default labs;
