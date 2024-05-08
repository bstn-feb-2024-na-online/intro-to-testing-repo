import StoreCard from "./StoreCard";

function StoreList({ stores, sale, loadData }) {
    // console.log(typeof stores);
    //   const testFunction = () => {
    //     console.log("Hello world");
    //     loadData();
    //   };

    return (
        <div className={`storelist ${sale ? "sale" : ""}`}>
            <h2>Store List</h2>

            {stores.map((item) => (
                <StoreCard key={item.id} address={item.address} />
            ))}
            {/* --           loadData      */}
            <button onClick={loadData}>load more stores</button>
        </div>
    );
}

export default StoreList;
