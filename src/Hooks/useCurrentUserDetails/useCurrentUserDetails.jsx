

const useCurrentUserDetails = () => {

    // get data from localStorage
    const storedData = localStorage.getItem("user-data");
    const currentUserData = JSON.parse(storedData);

    return { currentUserData };
};

export default useCurrentUserDetails;