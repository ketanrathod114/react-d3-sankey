import { sankeyLinkHorizontal } from "d3-sankey";

const SankeyLink = ({ i, link, color, highlightlink }) => {
  // const [strokeColor, setStrokeColor] = useState(color)
  let strokeColor = color;
  if (highlightlink && highlightlink.includes(i)) {
    strokeColor = "red";
  }
  return (
    <>
     
      <path
        d={sankeyLinkHorizontal()(link)}
        stroke={strokeColor}
        style={{
          fill: "none",
          strokeOpacity: ".3",

          strokeWidth: Math.max(1, link.width),
        }}
        // onMouseOver={e => {
        //   setStrokeColor('red')}
        // }
        // onMouseOut={e => {
        //   setStrokeColor(color)
        // }}
      />
    </>
  );
};

export default SankeyLink;
