import React, { useEffect, useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import Card from "../ui/Card"
import Gauge from "../ui/Gauge"
import Button from "../ui/Button"
import { Wrapper, Title, ValueDiv, Unit } from "./Heating.styles"

import API from "../../API"

const Heating = () => {
    const queryClient = useQueryClient()

    const queryValues = useQuery({
        queryKey: ["values"],
        queryFn: API.fetchValuesPromise,
        refetchInterval: 5000,
    })

    const queryStatuses = useQuery({
        queryKey: ["statuses"],
        queryFn: API.fetchStatusesPromise,
        refetchInterval: 5000,
    })

    const commandMutation = useMutation({
        mutationFn: API.sendCommandPromise,
        onSuccess: () => queryClient.invalidateQueries(["values"]),
    })

    if (queryValues.isLoading) return <h1>Loading...</h1>
    if (queryStatuses.isLoading) return <h1>Loading...</h1>

    if (queryValues.isError) return <h1>Error fetching data</h1>

    return (
        <Card>
            <Wrapper>
                <Title>Heating</Title>
                <Gauge
                    value={queryValues.data.temperature}
                    min={-10}
                    max={40}
                    low={10}
                    high={30}
                />
                <ValueDiv>{queryValues.data.temperature}</ValueDiv>
                <Unit>°C</Unit>
                <Button
                    enabled={true}
                    selected={queryStatuses.data.mode === "auto"}
                    handleClick={() =>
                        commandMutation.mutate({ commands: { mode: "auto" } })
                    }
                >
                    Auto
                </Button>
                <Button
                    enabled={true}
                    selected={queryStatuses.data.mode === "manual"}
                    handleClick={() =>
                        commandMutation.mutate({ commands: { mode: "manual" } })
                    }
                >
                    Manual
                </Button>
                <Button
                    enabled={queryStatuses.data.mode === "manual"}
                    handleClick={() =>
                        commandMutation.mutate({
                            commands: {
                                heat_zone1: true,
                                heat_zone2: true,
                                heat_zone3: true,
                            },
                        })
                    }
                >
                    On
                </Button>
                <Button
                    enabled={queryStatuses.data.mode === "manual"}
                    handleClick={() =>
                        commandMutation.mutate({
                            commands: {
                                heat_zone1: false,
                                heat_zone2: false,
                                heat_zone3: false,
                            },
                        })
                    }
                >
                    Off
                </Button>
            </Wrapper>
        </Card>
    )
}

export default Heating
