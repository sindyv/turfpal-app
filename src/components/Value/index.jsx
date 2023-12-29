import { ValueDiv, Unit, Title } from "./Value.styles"

import Gauge from "../ui/Gauge"

const Value = ({ title, value, unit, min, max, low, high, id }) => {
    return (
        <>
            <Title>{title}</Title>
            <Gauge
                id={id}
                value={value}
                min={min}
                max={max}
                low={low}
                high={high}
            />
            <ValueDiv>{value}</ValueDiv>
            <Unit>{unit}</Unit>
        </>
    )
}

export default Value
