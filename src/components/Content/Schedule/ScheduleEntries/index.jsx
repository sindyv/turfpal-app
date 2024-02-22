import React, { useContext, useState, useRef } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import {
    Wrapper,
    Header,
    Content,
    LinkItem,
    ModalContent,
} from "./ScheduleEntries.styles"

import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import ScheduleEntry from "../SchedueEntry"

import API from "../../../../API"
import MenuSpacer from "../../../UI/MenuSpacer"
import Modal from "../../../UI/Modal"
import { AllValuesContext } from "../../../../store/context/allValues-context"

function ScheduleEntries() {
    const { data: allValues } = useContext(AllValuesContext)

    const [viewModal, setViewModal] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null)

    const dialog = useRef()

    const queryClient = useQueryClient()

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["allValues"] }),
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

        dialog.current.close()
    }
    const openModal = () => {
        dialog.current.showModal()
    }

    let errorMessage = ""
    let sortedArray = []
    if (Array.isArray(allValues.schedules)) {
        if (allValues.schedules.length > 0) {
            sortedArray = allValues.schedules
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
            <Modal ref={dialog}>
                <ModalContent>
                    <h3>Do you really want to delete? </h3>
                    <p>If you delete this, you cannot restore it</p>
                    <div>
                        <button onClick={handleDelete}>DELETE</button>{" "}
                        <form method='dialog'>
                            <button>Close</button>
                            {/* <button onClick={toggleModal}>CANCEL</button> */}
                        </form>
                    </div>
                </ModalContent>
            </Modal>

            <Header>
                <span>
                    <LinkItem
                        to={"add"}
                        state={{ headerText: "Schedule > Add entry" }}
                    >
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
                                  toggleModal={openModal}
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
