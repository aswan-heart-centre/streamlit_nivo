import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib"
import React from "react"
import { ResponsiveBump } from "@nivo/bump"
import { ResponsiveCalendar } from "@nivo/calendar"
import { ResponsiveChord } from "@nivo/chord"

const NivoChart: React.FC<ComponentProps> = (props) => {
  const { data, layout } = props.args

  const style: React.CSSProperties = {}

  style.width = layout.width || "600px"
  style.height = layout.height || "360px"

  return (
    <>
      {layout.title && <h3>{layout.title}</h3>}
      {layout.type === "bump" && <ResponsiveBump data={data} {...layout} />}
      {layout.type === "calendar" && (
        <ResponsiveCalendar data={data} {...layout} />
      )}
      {layout.type === "chord" && <ResponsiveChord data={data} {...layout} />}
    </>
  )
}

export default withStreamlitConnection(NivoChart)
