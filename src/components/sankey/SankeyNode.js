const SankeyNode = ({
  name,
  x0,
  x1,
  y0,
  y1,
  color,
  sourceLinks,
  targetLinks,
  onSetHighlight,
}) => (
  <>
    <rect
      x={x0}
      y={y0}
      width={x1 - x0}
      height={y1 - y0 || 5}
      fill={color}
      onMouseOver={(e) => {
        onSetHighlight([
          ...sourceLinks.map((l) => l.index),
          ...targetLinks.map((l) => l.index),
        ]);
      }}
      onMouseOut={(e) => {
        onSetHighlight([]);
      }}
    ></rect>

    <text
      x={(x0 + x1) / 2}
      y={(y0 + y1) / 2 + 5}
      verticalanchor="middle"
      style={{
        font: "12px sans-serif",
      }}
    >
      {name}
    </text>
  </>
);

export default SankeyNode;
