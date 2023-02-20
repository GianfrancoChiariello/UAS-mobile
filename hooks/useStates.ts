import { useSelector } from "react-redux";

export const useRoles = () => {
    const ejemplo1 = useSelector((state: any) => state?.ejemplo1);
    const ejemplo2 = useSelector((state: any) => state?.ejemplo2);
    const ejemplo3 = useSelector((state: any) => state?.ejemplo3);
    const ejemplo4 = useSelector((state: any) => state?.ejemplo4);

    return {ejemplo1 , ejemplo2 , ejemplo3 , ejemplo4} 
}
