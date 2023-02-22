import { useSelector } from "react-redux";

export const useStates = () => {
    const corps = useSelector((state: any) => state?.corps)
    const theme = useSelector((state: any) => state?.theme)

    return {corps , theme} 
}
