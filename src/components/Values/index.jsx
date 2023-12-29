import React, { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
// Components
import Card from "../ui/Card"
import Value from "../Value"

// API
import API from "../../API"

const Values = () => {
    const query = useQuery({
        queryKey: ["values"],
        queryFn: API.fetchValuesPromise,
    })

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data</h1>

    return (
        <>
            <Card>
                <Value
                    id={crypto.randomUUID()}
                    title={"Temperature"}
                    value={query.data.temperature}
                    unit={"°C"}
                    min={-10}
                    max={40}
                    low={10}
                    high={25}
                />
            </Card>
            <Card>
                <Value
                    id={crypto.randomUUID()}
                    title={"PAR"}
                    value={query.data.light}
                    unit={"µMol"}
                    min={0}
                    max={2500}
                    low={500}
                    high={600}
                />
            </Card>
            <Card>
                <Value
                    id={crypto.randomUUID()}
                    title={"Soil temperature"}
                    value={query.data["soil-temperature"]}
                    unit={"°C"}
                    min={-10}
                    max={40}
                    low={10}
                    high={25}
                />
            </Card>
            <Card>
                <Value
                    id={crypto.randomUUID()}
                    title={"Soil moisture"}
                    value={query.data["soil-moisture"]}
                    unit={"%"}
                    min={0}
                    max={100}
                    low={10}
                    high={50}
                />
            </Card>
        </>
    )
}

export default Values
