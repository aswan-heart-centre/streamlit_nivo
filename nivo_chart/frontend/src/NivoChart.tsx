import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import { ResponsiveBump } from "@nivo/bump"
import { ResponsiveCalendar } from "@nivo/calendar"
import { ResponsiveChord } from "@nivo/chord"

interface State {}

class NivoChart extends StreamlitComponentBase<State> {
  public render = (): ReactNode => {
    const { data, layout } = this.props.args

    const { theme } = this.props
    const style: React.CSSProperties = {}

    if (theme) {
      style.width = layout.width || "600px"
      style.height = layout.height || "360px"
    }
    return (
      <div style={style}>
        <h3>{layout.title}</h3>
        {layout.type === "bump" && <ResponsiveBump data={data} {...layout} />}
        {layout.type === "calendar" && (
          <ResponsiveCalendar data={data} {...layout} />
        )}
        {layout.type === "chord" && <ResponsiveChord data={data} {...layout} />}
      </div>
    )
  }
}
export default withStreamlitConnection(NivoChart)
