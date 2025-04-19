const LabRow = ({ lab }) => {

  return (
    // 研究室、評価点を表示
    <div className="lab-row">
      <p className="lab-name"><a
        href={lab.url}
        target="_blank"
        rel="noopener noreferrer"
      >{lab.name}</a></p>
      <p className="lab-teacher">{lab.teacher}</p>
      <p className="lab-point">{lab.point}点</p>
    </div>
  );
};

export default LabRow;
