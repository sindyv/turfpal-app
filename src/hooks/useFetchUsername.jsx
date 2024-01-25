const useFetchUsername = () => {
    const username = JSON.parse(localStorage.getItem("loginInformation")).user
    return username
}

export default useFetchUsername
