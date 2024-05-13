import { useEffect, useState } from "react";

const DataFetcher = ({ render, url }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (url.includes("desserts")) {
            setData(["cake", "ice cream", "pie", "brownie"]);
        } else {
            setData(["water", "soda", "juice"])
        }
    }, [url]);

    return render(data);
}

const DesertsCount = () => {
    return (
        <DataFetcher
            url="https://littlelemon/desserts"
            render={(data) => <p>{data.length} deserts</p>}
        />
    );
}


const DrinksCount = () => {
    return (
        <DataFetcher
            url="https://littlelemon/drinks"
            render={(data) => <p>{data.length} drinks</p>}
        />
    );
}

function RenderProp() {
    return (
        <div>
            <DesertsCount />
            <DrinksCount />
        </div>
    );
}

export default RenderProp;
