import {
  Streamlit,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib"
import React, { useEffect } from "react"
import { ResponsiveBump } from "@nivo/bump"
import { ResponsiveCalendar } from "@nivo/calendar"
import { ResponsiveChord } from "@nivo/chord"
import { ResponsiveSankey } from "@nivo/sankey"

const NivoChart: React.FC<ComponentProps> = (props) => {
  const { data, layout, key } = props.args
  const style: React.CSSProperties = {}
  // width should not be set if we want the components to be responsive
  // style.width = layout.width || "600px"
  style.height = layout.height || "360px"
  useEffect(() => {
    Streamlit.setFrameHeight()
  })
  return (
    <div style={style} key={key}>
      {layout.title && <h3>{layout.title}</h3>}
      {layout.type === "bump" && <ResponsiveBump data={data} {...layout} />}
      {layout.type === "calendar" && (
        <ResponsiveCalendar data={data} {...layout} />
      )}
      {layout.type === "chord" && <ResponsiveChord data={data} {...layout} />}
      {layout.type === "sankey" && <ResponsiveSankey data={data} {...layout} />}
    </div>
  )
}

export default withStreamlitConnection(NivoChart)
