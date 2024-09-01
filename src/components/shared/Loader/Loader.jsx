import { BallTriangle } from "react-loader-spinner";

export default function Loader({width, height, color = "#475467"}) {
  return (
    <div>
      <BallTriangle
        height={width}
        width={height}
        radius={5}
        color={color}
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
  />
    </div>
  )
}