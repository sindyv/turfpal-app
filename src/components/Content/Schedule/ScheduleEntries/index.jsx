import React, { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import {
    Wrapper,
    Header,
    Content,
    LinkItem,
    ModalContent,
} from "./ScheduleEntries.styles"

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import ScheduleEntry from "../SchedueEntry"

import API from "../../../../API"
import MenuSpacer from "../../../UI/MenuSpacer"
import Modal from "../../../UI/Modal"

function ScheduleEntries() {
    const [viewModal, setViewModal] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null)

    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ["schedule"],
        queryFn: API.fetchSchedule,
        refetchInterval: 5000,
    })

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["schedule"] }),
    })

    const toggleModal = () => {
        setViewModal((prev) => !prev)
    }

    const onDeleteButton = (index) => {
        setActiveIndex(index)
    }

    const handleDelete = () => {
        commandMutation.mutate({
            commands: {
                schedule: {
                    cmd_schedule_function: "delete",
                    cmd_schedule_index: activeIndex,
                },
            },
        })

        setViewModal(false)
    }

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    let errorMessage = ""
    let sortedArray = []
    if (Array.isArray(query.data.schedules)) {
        if (query.data.schedules.length > 0) {
            sortedArray = query.data.schedules
                .sort((a, b) => a.schedule_start_time - b.schedule_start_time)
                .reverse()
        } else {
            errorMessage = "There are no entries stored in the lighting rig"
        }
    } else {
        errorMessage =
            "Ooops! Something went wrong when getting data from the rig!"
    }

    return (
        <Wrapper>
            {viewModal && (
                <Modal onClick={toggleModal}>
                    <ModalContent>
                        <h3>Do you really want to delete? </h3>
                        <p>If you delete this, you cannot restore it</p>
                        <div>
                            <button onClick={handleDelete}>DELETE</button>{" "}
                            <button onClick={toggleModal}>CANCEL</button>
                        </div>
                    </ModalContent>
                </Modal>
            )}
            <Header>
                <span>
                    <LinkItem to={"/schedule"}>
                        <ArrowBackIosNewOutlinedIcon />
                    </LinkItem>

                    {"Schedule > Entries"}
                </span>
                <span>
                    <LinkItem to={"add"}>
                        <AddOutlinedIcon />
                    </LinkItem>
                </span>
            </Header>
            <Content>
                {errorMessage === ""
                    ? sortedArray.map((item) => {
                          return (
                              <ScheduleEntry
                                  data={item}
                                  key={item.schedule_index}
                                  toggleModal={toggleModal}
                                  onDeleteButton={onDeleteButton}
                              />
                          )
                      })
                    : errorMessage}
            </Content>
            <MenuSpacer />
        </Wrapper>
    )
}

export default ScheduleEntries
